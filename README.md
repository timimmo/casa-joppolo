# casa-joppolo

Website für das Loft in Joppolo, Kalabrien: eine möblierte Wohnung zur Langzeitmiete ab drei Monaten, dazu die obere Wohnung „Bellevue“ und das Dorfhaus „Rustico“. Eigentümer: Tim Lehmann.

Stand Oktober 2026: **Entwurf.** Die Seite ist mit `noindex` markiert, bis der Eigentümer die Inhalte freigegeben hat.

## Wie das hier läuft

- **Timm** (`timimmo`) liefert Inhalte und Wünsche als [Issues](../../issues): Texte, Fotos, PDFs, Links, Korrekturen.
- **Björn** (`dasboe`) setzt die Issues um. Sobald GitHub Pages eingeschaltet ist, geht jeder Push auf `main` nach etwa einer Minute live.

## Aufbau

Reines HTML und CSS, ein kleines Skript ohne Abhängigkeiten, kein Build. GitHub Pages liefert den Inhalt von `main` direkt aus. Alle Pfade sind relativ, weil die Seite unter `timimmo.github.io/casa-joppolo/` in einem Unterpfad läuft.

```
index.html          Einseiter: Per chi, La casa, Il prezzo, Lavorare, Il paese, Le stagioni, Arrivare, Da dove, Richiesta
impressum.html      Impressum und Quellen
datenschutz.html    Datenschutz
404.html            Fehlerseite (eigenständig, ohne relative Pfade)
assets/css/site.css Stylesheet
assets/js/site.js   Einblenden der Abschnitte, aktive Navigation, Kartenausschnitt auf dem Handy; ohne JS ist alles sichtbar
assets/fonts/       Schriften, selbst gehostet, mit Lizenzen
assets/img/         Fotos als WebP in mehreren Breiten, Grundriss, og.jpg für Link-Vorschauen
```

Alles in diesem Repository ist öffentlich abrufbar. Nichts hier ablegen, was nicht veröffentlicht werden soll.

## Schriften

- [Cormorant Garamond](https://github.com/CatharsisFonts/Cormorant) (Christian Thalmann), SIL Open Font License 1.1, für Lesetext und Titel.
- [Archivo](https://github.com/Omnibus-Type/Archivo) (Omnibus-Type), SIL Open Font License 1.1, als variable Schrift mit Breitenachse für das Plakatwort, Labels und Zahlen.

Beide als WOFF2, nur der lateinische Zeichensatz. Lizenztexte liegen in `assets/fonts/`.

## Bilder und Zeichnungen

Fotos liegen als `assets/img/<name>-<breite>.webp` in zwei bis drei Breiten (480, 960, bei großen Motiven die Originalbreite, nie hochskaliert), einheitlich leicht entsättigt, Metadaten entfernt. Die Fotos und der Grundriss stammen vom Eigentümer (Inserat und Flyer) und sind eine Zwischenlösung bis zu Originalen in voller Auflösung. Die Lageskizze unter „Arrivare“ ist ein Inline-SVG, aus Koordinaten gezeichnet, schematisch.

## Quellen

Die Angaben zum Ort stammen aus öffentlichen Quellen (ISTAT, Comune di Joppolo, RFI/Trenitalia, SIUSA, INGV, Qualigeo, Wikipedia u. a.), Klimawerte sind typische Werte für Tropea. Alles zum Haus, zur Wohnung und zum Preis stammt aus dem Material des Eigentümers. Fahrpläne und Flugverbindungen ändern sich; Stand Oktober 2026.
