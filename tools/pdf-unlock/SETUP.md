# Setting up the ₹10 payment check for the maths notes PDF

GS HOUSE is a static site, so it cannot see your payments. This small script runs in **your own Google account**. When a reader types the 12-digit UPI reference of a payment, it looks in your Gmail for your bank's "credited" alert with that reference and at least ₹10. Only then does it hand over the PDF, which stays private in your Google Drive. A reference can unlock for one email address only.

It takes about 10 minutes, on a computer.

## 1. Check your bank's alert emails

The check works only if your bank **emails** you when money comes in by UPI.

- Open Gmail and find the alert for any UPI payment you received recently. It must show the amount, the word "credited" and the 12-digit UPI reference number (UPI Ref No., UTR or RRN).
- If your bank only sends an SMS, turn on email alerts in its net-banking or app settings (alerts or InstaAlerts). If it can't email UPI credits at all, stop here and tell Claude: another way is needed.

## 2. Put the PDF in Google Drive

1. Go to [drive.google.com](https://drive.google.com) and upload `private/UP-TGT-PGT-Mathematics-Notes.pdf` from the GS HOUSE folder. This is the locked copy without the ELP Maths header and footer. Do **not** share it with anyone.
2. Open the file, choose **Share → Copy link**. The link looks like `https://drive.google.com/file/d/1AbC…xyz/view`. The part between `/d/` and `/view` is the **file id**. Keep it for step 4.

## 3. Create the script

1. Go to [script.google.com](https://script.google.com) and click **New project**. Name it `GS HOUSE PDF unlock`.
2. Delete what is in the editor and paste the whole of `tools/pdf-unlock/Code.gs`. Click **Save** (the disk icon).

## 4. Add the settings

In the script, open **Project Settings** (the gear on the left), scroll to **Script properties**, then **Add script property**:

| Property | Value |
| --- | --- |
| `PDF_FILE_ID` | the file id from step 2 |
| `PDF_PASSWORD` | the PDF's password (the readers who pay will see it) |

Optional ones: `FEE` (default `10`), `OWNER_EMAIL` (where sale notices go; default: this Google account), `BANK_SENDERS` (only if step 6 shows your bank's alerts are not recognised).

## 5. Give permission once

1. Back in the **Editor**, choose `setupCheck` in the function list at the top and click **Run**.
2. Google asks for permission. Click **Review permissions**, choose your account, then **Advanced → Go to GS HOUSE PDF unlock (unsafe) → Allow**. ("Unsafe" only means Google has not reviewed a script you wrote for yourself.) It asks to read Gmail (to find the bank alert), read Drive (for the PDF) and send email (the copy to the reader and a notice to you).
3. The log at the bottom should say `PDF found: UP-TGT-PGT-Mathematics-Notes.pdf, …`.

## 6. Test with a real reference

1. In `Code.gs`, find `testReference` near the end. Put the 12-digit reference of a UPI payment you received in the last 30 days between the quotes, in place of `PUT-12-DIGITS-HERE`.
2. Choose `testReference` and click **Run**. The log should show your bank's alert, `sender checks passed: true`, and `Check result: {"amount":…}`.
3. If the check result is `null`, send Claude the log lines (they hold only the sender, subject and amount).

## 7. Publish it as a web app

1. Click **Deploy → New deployment**. Next to "Select type", click the gear and choose **Web app**.
2. Description: `GS HOUSE PDF unlock`. **Execute as: Me**. **Who has access: Anyone**. Click **Deploy**.
3. Copy the **Web app URL**. It ends in `/exec`. Open it in a browser: it should show `{"ok":true,"service":"gs-house-pdf",…}`.
4. Send that URL to Claude. Claude puts it into the site, so the PDF button checks payments through it.

If you change `Code.gs` later, use **Deploy → Manage deployments → Edit → Version: New version** so the URL stays the same.

## Limits worth knowing

- Google lets a personal account send about 100 emails a day. Each sale uses two (the copy to the reader and your notice). Past that, the reader still gets the PDF on the page; only the emails are skipped.
- A reader who pays can still pass the PDF and its password on. No payment check can stop that.
- References already used are kept in the script's properties (Project Settings → Script properties, `utr_…`). Delete one there to let that reference unlock again.
