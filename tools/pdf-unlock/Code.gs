/**
 * GS HOUSE: genuine check of the ₹10 payment for the maths notes PDF.
 *
 * This file is pasted into a Google Apps Script project in the site owner's own Google account and
 * deployed there as a web app ("Execute as: Me", "Who has access: Anyone"). See SETUP.md beside it.
 *
 * When a reader sends the 12-digit UPI reference of a payment, the script:
 *   1. looks in the owner's Gmail for the bank's credit alert that contains that reference;
 *   2. accepts it only if the alert comes from a bank's own address, says "credited" and shows at least the fee;
 *   3. refuses a reference already used with a different email address;
 *   4. returns the PDF (kept privately in the owner's Google Drive), emails a copy to the reader and a
 *      notice to the owner.
 * Nothing secret is in this file: the PDF's Drive id and its password live in the project's script properties.
 *
 * Script properties (Project Settings → Script properties):
 *   PDF_FILE_ID   Drive id of the PDF (required)
 *   PDF_PASSWORD  the PDF's password, if the file is locked (optional; shown to the reader after a checked payment)
 *   FEE           fee in rupees (optional, default 10)
 *   BANK_SENDERS  comma-separated sender domains of the bank's alert emails (optional; the default list below
 *                 covers the larger Indian banks and every *.bank.in address, which only banks can hold)
 *   OWNER_EMAIL   where the notice of each sale goes (optional; default: this account's own address)
 */

const PROPS = PropertiesService.getScriptProperties();
const DEFAULT_SENDERS = [
  'bank.in', 'hdfcbank.net', 'hdfcbank.com', 'sbi.co.in', 'icicibank.com', 'axisbank.com', 'kotak.com',
  'pnb.co.in', 'bankofbaroda.com', 'bankofbaroda.co.in', 'unionbankofindia.co.in', 'canarabank.com',
  'yesbank.in', 'idfcfirstbank.com', 'indusind.com', 'aubank.in', 'federalbank.co.in',
];

function fee() { return Number(PROPS.getProperty('FEE') || 10); }

function senders() {
  const own = (PROPS.getProperty('BANK_SENDERS') || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
  return own.length ? own : DEFAULT_SENDERS;
}

function json(out) {
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

// A quick "is it running?" check: open the web app's /exec address in a browser.
function doGet() {
  return json({ ok: true, service: 'gs-house-pdf', fee: fee() });
}

function doPost(e) {
  try {
    return json(handle(JSON.parse((e && e.postData && e.postData.contents) || '{}')));
  } catch (err) {
    console.error(err);
    return json({ ok: false, reason: 'error' });
  }
}

function handle(req) {
  const utr = String(req.utr || '').replace(/\s+/g, '');
  const mail = String(req.mail || '').trim().toLowerCase();
  const name = String(req.name || '').trim().slice(0, 80);
  if (!/^\d{12}$/.test(utr)) return { ok: false, reason: 'utr' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) return { ok: false, reason: 'mail' };

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(20000)) return { ok: false, reason: 'busy' };
  try {
    const key = 'utr_' + utr;
    const used = PROPS.getProperty(key);
    if (used) {
      // The same reader may come back (another device, a lost file); another email address may not.
      if (JSON.parse(used).mail !== mail) return { ok: false, reason: 'used' };
      return deliver();
    }
    const found = findCredit(utr);
    if (!found) return { ok: false, reason: 'not_found' };
    if (found.amount + 1e-9 < fee()) return { ok: false, reason: 'amount' };
    PROPS.setProperty(key, JSON.stringify({ mail: mail, name: name, amount: found.amount, at: new Date().toISOString() }));
    const out = deliver();
    sendCopy(name, mail, out);
    notifyOwner(name, mail, utr, found.amount);
    return out;
  } finally {
    lock.releaseLock();
  }
}

// The bank's credit alert for this reference, from the last 30 days: { amount, from } or null.
function findCredit(utr) {
  const allowed = senders();
  const threads = GmailApp.search('"' + utr + '" newer_than:30d', 0, 10);
  for (const thread of threads) {
    for (const m of thread.getMessages()) {
      const from = m.getFrom().toLowerCase();
      const domain = ((from.match(/@([a-z0-9.-]+)/) || [])[1] || '');
      if (!allowed.some((s) => domain === s || domain.endsWith('.' + s))) continue;
      if (!authentic(m)) continue;                       // a forged "From" fails Gmail's sender checks
      const text = m.getSubject() + ' \n ' + m.getPlainBody();
      if (text.indexOf(utr) < 0) continue;
      if (!/credited/i.test(text) || /debited/i.test(text)) continue;
      const amt = text.match(/(?:Rs\.?|INR|₹)\s*([0-9][0-9,]*(?:\.[0-9]{1,2})?)/i);
      if (!amt) continue;
      return { amount: parseFloat(amt[1].replace(/,/g, '')), from: domain };
    }
  }
  return null;
}

// Gmail records whether the sender's server was allowed to send for that domain (SPF) and whether the
// message carries the domain's signature (DKIM). A genuine bank alert passes at least one.
function authentic(m) {
  const auth = (m.getHeader('Authentication-Results') || '') + ' ' + (m.getHeader('ARC-Authentication-Results') || '');
  return /\b(dkim|spf)=pass\b/i.test(auth) && !/\bdmarc=fail\b/i.test(auth);
}

function pdfBlob() {
  return DriveApp.getFileById(PROPS.getProperty('PDF_FILE_ID')).getBlob();
}

function deliver() {
  const blob = pdfBlob();
  return {
    ok: true,
    name: blob.getName(),
    file: Utilities.base64Encode(blob.getBytes()),
    password: PROPS.getProperty('PDF_PASSWORD') || '',
  };
}

function sendCopy(name, mail, out) {
  if (MailApp.getRemainingDailyQuota() < 2) return;   // keep one for the owner's notice
  const pass = out.password ? '\n\nThe PDF opens with the password: ' + out.password : '';
  MailApp.sendEmail({
    to: mail,
    subject: 'Your GS HOUSE maths notes PDF',
    body: 'Hello ' + (name || '') + ',\n\nThank you for your payment. The UP TGT / PGT Mathematics notes PDF is attached.' + pass +
      '\n\nGS HOUSE\nhttps://lalitbhardwaj2002.github.io/gs-house/',
    attachments: [pdfBlob()],
  });
}

function notifyOwner(name, mail, utr, amount) {
  if (MailApp.getRemainingDailyQuota() < 1) return;
  const owner = PROPS.getProperty('OWNER_EMAIL') || Session.getEffectiveUser().getEmail();
  MailApp.sendEmail(owner, 'GS HOUSE: ₹' + amount + ' paid for the maths notes PDF (UPI ref ' + utr + ')',
    'Payment found in the bank alert and the PDF delivered.\n\nName: ' + name + '\nEmail: ' + mail +
    '\nUPI reference: ' + utr + '\nAmount: ₹' + amount + '\nTime: ' + new Date().toString());
}

// ---------- set-up helpers, run from the editor ----------

// Run once after setting the script properties: it asks for the permissions and checks the PDF.
function setupCheck() {
  const blob = pdfBlob();
  console.log('PDF found: ' + blob.getName() + ', ' + Math.round(blob.getBytes().length / 1024) + ' KB');
  console.log('Fee: ₹' + fee() + '; bank alert senders accepted: ' + senders().join(', '));
  console.log('Emails left today: ' + MailApp.getRemainingDailyQuota());
}

// Put the 12-digit UPI reference of a payment you have received between the quotes and run this:
// it shows which emails carry that reference and whether the check would accept it.
function testReference() {
  const utr = 'PUT-12-DIGITS-HERE';
  GmailApp.search('"' + utr + '" newer_than:30d', 0, 10).forEach((t) => t.getMessages().forEach((m) => {
    console.log('From: ' + m.getFrom() + ' | Subject: ' + m.getSubject() + ' | sender checks passed: ' + authentic(m));
  }));
  console.log('Check result: ' + JSON.stringify(findCredit(utr)));
}
