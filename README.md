# casa-joppolo

**Für Timm:** Preis, Verfügbarkeit, Datum, Telefon, Mail und Links änderst du selbst, Anleitung in [WARTUNG.md](WARTUNG.md).

Website für das Loft in Joppolo, Kalabrien: eine möblierte Wohnung zur Langzeitmiete ab drei Monaten, dazu die obere Wohnung „Bellevue“ und das Dorfhaus „Rustico“. Eigentümer: Tim Lehmann.

Seit 14.10.2026 öffentlich und für Suchmaschinen freigegeben (Freigabe durch den Eigentümer in Issue #12).

## Wie das hier läuft

- **Timm** (`timimmo`) liefert Inhalte und Wünsche als [Issues](../../issues): Texte, Fotos, PDFs, Links, Korrekturen.
- **Björn** (`dasboe`) setzt die Issues um. Sobald GitHub Pages eingeschaltet ist, geht jeder Push auf `main` nach etwa einer Minute live.

## Aufbau

Reines HTML und CSS, ein kleines Skript ohne Abhängigkeiten. GitHub Pages baut die Seite mit Jekyll (ohne Theme, ohne Plugins, ohne Actions): Die veränderlichen Werte stehen in `_data/inhalt.yml`, die sechs HTML-Seiten lesen sie über Platzhalter ein; alles andere wird unverändert ausgeliefert. Die Seite läuft unter https://casa-joppolo.de (Datei `CNAME`). Alle Pfade sind relativ, damit sie auch unter `timimmo.github.io/casa-joppolo/` funktioniert.

```
_data/inhalt.yml    Die veränderlichen Werte (Preis, Verfügbarkeit, Stand, Kontakt, Links), siehe WARTUNG.md
_config.yml         Jekyll: nur die Ausschlussliste
WARTUNG.md          Anleitung für den Eigentümer
index.html          Einseiter: Per chi, La casa, Il prezzo, Lavorare, Il paese, Le stagioni, Camminare, Arrivare, Da dove, Richiesta
impressum.html      Impressum und Quellen
datenschutz.html    Datenschutz
en/                 Dieselbe Seite auf Englisch (index.html, imprint.html, privacy.html); Flaggen oben rechts schalten um
404.html            Fehlerseite (eigenständig, ohne relative Pfade)
assets/css/site.css Stylesheet
assets/js/site.js   Einblenden der Abschnitte, aktive Navigation, Kartenausschnitt auf dem Handy; ohne JS ist alles sichtbar
assets/fonts/       Schriften, selbst gehostet, mit Lizenzen
assets/img/         Fotos als WebP in mehreren Breiten, Grundriss, og.jpg und og-en.jpg für Link-Vorschauen
```

Beide Sprachfassungen sind eins zu eins: Jede Änderung an `index.html` gehört auch nach `en/index.html` (gleiche Struktur, Pfade dort mit `../assets/`).

Alles in diesem Repository ist öffentlich abrufbar. Nichts hier ablegen, was nicht veröffentlicht werden soll.

## Schriften

- [Cormorant Garamond](https://github.com/CatharsisFonts/Cormorant) (Christian Thalmann), SIL Open Font License 1.1, für Lesetext und Titel.
- [Archivo](https://github.com/Omnibus-Type/Archivo) (Omnibus-Type), SIL Open Font License 1.1, als variable Schrift mit Breitenachse für das Plakatwort, Labels und Zahlen.

Beide als WOFF2, nur der lateinische Zeichensatz. Lizenztexte liegen in `assets/fonts/`.

## Bilder und Zeichnungen

Fotos liegen als `assets/img/<name>-<breite>.webp` in zwei bis drei Breiten (480, 960, bei großen Motiven die Originalbreite, nie hochskaliert), einheitlich leicht entsättigt, Metadaten entfernt. Die Fotos und der Grundriss stammen vom Eigentümer (Inserat und Flyer) und sind eine Zwischenlösung bis zu Originalen in voller Auflösung. Die Lageskizze unter „Arrivare“ ist ein Inline-SVG, aus Koordinaten gezeichnet, schematisch. Die fünf Illustrationen (`assets/img/illu-*.webp`, `spot-*.webp`) sind KI-generiert im Stil der italienischen Reiseplakate der 1930er und im Impressum als solche genannt.

## Quellen

Die Angaben zum Ort stammen aus öffentlichen Quellen (ISTAT, Comune di Joppolo, RFI/Trenitalia, SIUSA, INGV, Qualigeo, Wikipedia u. a.), Klimawerte sind typische Werte für Tropea. Alles zum Haus, zur Wohnung und zum Preis stammt aus dem Material des Eigentümers. Fahrpläne und Flugverbindungen ändern sich; Stand Oktober 2026.
