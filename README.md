# Strona zespołu Biała Wilczyca

Kompletna, wielostronicowa strona statyczna: bez frameworków, bez bazy danych,
bez kosztów utrzymania poza domeną. Gotowa do wrzucenia na darmowy hosting.

## Struktura

```
index.html      strona główna (hero, nowość, najbliższe koncerty, social)
muzyka.html     wydawnictwa + osadzony teledysk
koncerty.html   nadchodzące i zagrane koncerty (minione wygaszają się same)
zespol.html     historia + skład
galeria.html    zdjęcia
kontakt.html    booking / media
404.html        strona błędu
css/main.css    cały wygląd (tokeny kolorów i typografii na górze pliku)
js/main.js      menu mobilne, animacje, wygaszanie minionych dat (~1,5 KB)
img/            logo + placeholdery SVG do podmiany
robots.txt, sitemap.xml, site.webmanifest
```

## Co podmienić przed startem (szukaj komentarzy `═══ EDYCJA`)

1. **Domena** — wszędzie zamień `https://example.com` na własną
   (`grep -rl "example.com" .` pokaże pliki). Uwaga: `bialawilczyca.pl` jest
   zajęta przez dom weselny spod Krakowa — rozważ `zespolbialawilczyca.pl`,
   `bialawilczyca.band` albo `bialawilczyca.rocks`.
2. **Zdjęcia** — logo, fotka zespołu oraz portrety Kai i Rafała są już
   wgrane (`img/`). Do podmiany zostały: 3 portrety członków
   (`member-3/4/5.svg` → zdjęcia 480×600), zdjęcia w galerii
   (`photo-live-*.svg`) i okładki wydawnictw (`cover-*.svg`).
   Format WebP/JPG, szerokość ok. 1200 px (kompresja: squoosh.app).
   Zachowaj atrybuty `width`/`height` w HTML — chronią przed
   skakaniem układu (CLS).
3. **Muzyka** — w `muzyka.html` wpisz prawdziwe ID filmu z YouTube
   (fragment po `v=` w adresie) i linki do Spotify/Bandcamp, jeśli są.
4. **Koncerty** — daty w formacie `datetime="RRRR-MM-DD"`; skopiuj blok
   `<li class="gig">…</li>` dla każdego terminu. Zaktualizuj też JSON-LD
   `MusicEvent` w `<head>` — dzięki temu Google może pokazać koncert
   bezpośrednio w wynikach wyszukiwania.
5. **Kontakt** — e-mail i telefon w `kontakt.html`.
6. **Skład i historia** — `zespol.html`.

## Publikacja (darmowa, 10 minut)

**Netlify (najprościej):** app.netlify.com → „Add new site" → przeciągnij
cały folder. Strona działa od razu; potem podepnij domenę w ustawieniach.
HTTPS włącza się automatycznie.

Alternatywy: Cloudflare Pages, GitHub Pages, Vercel — wszystkie darmowe
dla stron statycznych.

## Po publikacji — checklist SEO

- [ ] Google Search Console: dodaj domenę i prześlij `sitemap.xml`.
- [ ] Wstaw link do strony w bio na Facebooku i Instagramie (to najcenniejsze
      pierwsze linki przychodzące).
- [ ] Sprawdź podgląd udostępniania: developers.facebook.com/tools/debug
      (obraz OG 1200×630 jest już gotowy: `img/og-image.jpg` — kadr ze zdjęcia zespołu).
- [ ] Test wydajności: pagespeed.web.dev — strona powinna osiągać 95–100
      po podmianie zdjęć na skompresowane WebP.
- [ ] Przy każdym nowym koncercie: dopisz go na `koncerty.html`,
      zaktualizuj `lastmod` w `sitemap.xml`.

## Dostępność i wydajność — co już jest zrobione

Semantyczny HTML, skip-link, focus-visible, kontrasty ≥ WCAG AA,
`prefers-reduced-motion`, leniwe ładowanie obrazów i osadzeń,
`youtube-nocookie` dla prywatności, fonty z `display=swap`,
brak zewnętrznych bibliotek JS.
