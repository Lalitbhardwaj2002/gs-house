"""Draws the GS HOUSE logo files and app icons.

The logo: a house split into a light (cream) and a dark (maroon) half, with a drawn G on the light
half, a drawn S on the dark half and a lamp under the roof; beside it the drawn wordmark
"GS HOUSE", whose O is a little house. Nothing uses a font, so the artwork looks the same everywhere.
app.js holds the same shapes as LOGO_MARK and LOGO_WORD (the wordmark there takes the theme
colours): change both together.

Usage:  python tools/make_icons.py [path to chrome.exe or msedge.exe]
Needs:  Google Chrome or Microsoft Edge (used without a window to turn the SVG drawings into PNG files).
Writes: icons/logo.svg            the mark alone
        icons/logo-full.svg       mark + wordmark (for print, sharing and a trademark application)
        icons/logo-full.png       the same, 1400 x 1120 on white
        icons/icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png, favicon-32.png
"""
import base64
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

CHROME = sys.argv[1] if len(sys.argv) > 1 else 'C:/Program Files/Google/Chrome/Application/chrome.exe'
MAROON, CREAM, GOLD, SAFFRON, GLOW = '#7b1e1e', '#fbf3e2', '#c9972b', '#e07a1f', '#fbe7a8'
out = Path(__file__).resolve().parent.parent / 'icons'
out.mkdir(exist_ok=True)

# The mark, drawn on a 512 x 512 field.
MARK = f'''
  <path d="M256 40 L44 200 V452 Q44 472 64 472 H256 Z" fill="{CREAM}"/>
  <path d="M256 40 L468 200 V452 Q468 472 448 472 H256 Z" fill="{MAROON}"/>
  <path d="M256 40 L468 200 V452 Q468 472 448 472 H64 Q44 472 44 452 V200 Z" fill="none" stroke="{GOLD}" stroke-width="16" stroke-linejoin="round"/>
  <path d="M256 92 C280 126 290 142 290 160 A34 34 0 0 1 222 160 C222 142 232 126 256 92 Z" fill="{SAFFRON}"/>
  <circle cx="256" cy="164" r="13" fill="{GLOW}"/>
  <path d="M194.4 271.4 A66 66 0 1 0 218 322 H166" fill="none" stroke="{MAROON}" stroke-width="38" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M388.6 272.5 A33 33 0 1 0 360 322 A33 33 0 1 1 331.4 371.5" fill="none" stroke="{CREAM}" stroke-width="38" stroke-linecap="round"/>'''

# The wordmark, drawn on a 600 x 100 field (letters 100 high).
WORD = f'''
  <g fill="none" stroke-width="15" stroke-linecap="round" stroke-linejoin="round">
    <g stroke="{MAROON}">
      <path d="M85.4 14.6 A50 50 0 1 0 100 50 H60"/>
      <path d="M171.65 12.5 A25 25 0 1 0 150 50 A25 25 0 1 1 128.35 87.5"/>
    </g>
    <g stroke="{SAFFRON}">
      <path d="M222 0 V100 M282 0 V100 M222 50 H282"/>
      <path d="M304 100 V38 L336 0 L368 38 V100 Z"/>
      <path d="M390 0 V70 A30 30 0 0 0 450 70 V0"/>
      <path d="M521.65 12.5 A25 25 0 1 0 500 50 A25 25 0 1 1 478.35 87.5"/>
      <path d="M600 0 H550 V100 H600 M550 50 H590"/>
    </g>
  </g>
  <circle cx="336" cy="66" r="10" fill="{MAROON}"/>'''

XMLNS = 'xmlns="http://www.w3.org/2000/svg"'


def mark_svg():
    return f'<svg {XMLNS} viewBox="0 0 512 512">{MARK}\n</svg>\n'


def tile_svg(scale):
    """A cream tile with the mark in the middle; `scale` is the share of the tile the mark takes."""
    shift = 256 * (1 - scale)
    return (f'<svg {XMLNS} viewBox="0 0 512 512"><rect width="512" height="512" fill="{CREAM}"/>'
            f'<g transform="translate({shift:.1f} {shift:.1f}) scale({scale})">{MARK}\n</g></svg>\n')


def full_svg(background=None):
    """Mark above the wordmark, on a 700 x 560 field."""
    back = f'<rect width="700" height="560" fill="{background}"/>' if background else ''
    return (f'<svg {XMLNS} viewBox="0 0 700 560">{back}'
            f'<g transform="translate(190 20) scale(0.625)">{MARK}\n</g>'
            f'<g transform="translate(86 392) scale(0.88)">{WORD}\n</g></svg>\n')


JOBS = [  # file name, drawing, width, height
    ('icon-512.png', tile_svg(0.86), 512, 512),
    ('icon-192.png', tile_svg(0.86), 192, 192),
    ('icon-maskable-512.png', tile_svg(0.62), 512, 512),
    ('apple-touch-icon.png', tile_svg(0.82), 180, 180),
    ('favicon-32.png', mark_svg(), 32, 32),
    ('logo-full.png', full_svg('#ffffff'), 1400, 1120),
]

PAGE = '''<!doctype html><meta charset="utf-8"><pre id="out"></pre><script>
const jobs = %s;
const done = {};
Promise.all(jobs.map(([name, svg, w, h]) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    c.getContext('2d').drawImage(img, 0, 0, w, h);
    done[name] = c.toDataURL('image/png'); resolve();
  };
  img.onerror = reject;
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}))).then(() => { document.getElementById('out').textContent = JSON.stringify(done); });
</script>'''

(out / 'logo.svg').write_text(mark_svg(), encoding='utf-8', newline='\n')
(out / 'logo-full.svg').write_text(full_svg(), encoding='utf-8', newline='\n')

with tempfile.TemporaryDirectory() as tmp:
    page = Path(tmp) / 'icons.html'
    page.write_text(PAGE % json.dumps(JOBS), encoding='utf-8')
    dom = subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--virtual-time-budget=10000', '--dump-dom', page.as_uri()],
                         capture_output=True, text=True, encoding='utf-8', timeout=120).stdout
found = re.search(r'<pre id="out">(\{.*?\})</pre>', dom, re.S)
if not found:
    sys.exit('The browser did not return the pictures; check the path to Chrome or Edge.')
for name, url in json.loads(found.group(1).replace('&amp;', '&')).items():
    (out / name).write_bytes(base64.b64decode(url.split(',', 1)[1]))
    print('wrote', name)
print('logo and icons written to', out)
