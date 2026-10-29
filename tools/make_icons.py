"""Draws the GS HOUSE app icons (maroon tile, gold ring, bold "GS" over "HOUSE").

Usage:  python tools/make_icons.py
Needs:  pip install pillow, and a bold serif font (Georgia Bold on Windows by default;
        pass another .ttf path as the first argument elsewhere).
Writes icons/icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png, favicon-32.png.
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

FONT = sys.argv[1] if len(sys.argv) > 1 else 'C:/Windows/Fonts/georgiab.ttf'
MAROON, GOLD, CREAM = (123, 30, 30), (201, 151, 43), (251, 243, 226)
out = Path(__file__).resolve().parent.parent / 'icons'
out.mkdir(exist_ok=True)


def centered(draw, y, text, font, fill, size):
    w = draw.textlength(text, font=font)
    draw.text(((size - w) / 2, y), text, font=font, fill=fill)


def tile(size, safe):
    """safe = share of the tile the artwork may use (maskable icons need a margin)."""
    img = Image.new('RGB', (size, size), MAROON)
    d = ImageDraw.Draw(img)
    s = size * safe
    pad = (size - s) / 2
    ring = max(2, round(s * 0.035))
    d.ellipse([pad, pad, size - pad, size - pad], outline=GOLD, width=ring)
    gs = ImageFont.truetype(FONT, round(s * 0.42))
    house = ImageFont.truetype(FONT, round(s * 0.13))
    centered(d, pad + s * 0.18, 'GS', gs, CREAM, size)
    centered(d, pad + s * 0.66, 'HOUSE', house, GOLD, size)
    return img


tile(512, 0.92).save(out / 'icon-512.png')
tile(192, 0.92).save(out / 'icon-192.png')
tile(512, 0.72).save(out / 'icon-maskable-512.png')
tile(180, 0.86).save(out / 'apple-touch-icon.png')
tile(64, 1.0).resize((32, 32), Image.LANCZOS).save(out / 'favicon-32.png')
print('icons written to', out)
