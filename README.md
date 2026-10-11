# casa-joppolo

Website für die Casa Joppolo: zwei Wohnungen („Bellevue“ und „Loft“) und ein altes Dorfhaus („Rustico“) in Joppolo an der Costa degli Dei, Kalabrien.

Stand Oktober 2026: **Entwurf.** Die Seite ist mit `noindex` markiert, bis der Eigentümer die Inhalte freigegeben hat.

## Wie das hier läuft

- **Timm** (`timimmo`) liefert Inhalte und Wünsche als [Issues](../../issues): Texte, Fotos, PDFs, Links, Korrekturen. Jedes Issue sollte kurz sagen, was damit passieren soll.
- **Björn** (`dasboe`) setzt die Issues um. Sobald GitHub Pages eingeschaltet ist, geht jeder Push auf `main` nach etwa einer Minute live.

## Aufbau

Reines HTML und CSS, kein Build-Schritt, kein JavaScript. GitHub Pages liefert den Inhalt von `main` direkt aus. Alle Pfade sind relativ, weil die Seite unter `timimmo.github.io/casa-joppolo/` in einem Unterpfad läuft.

```
index.html          Startseite: Ort, Haus, Loft, Joppolo for Friends, Anreise, Umgebung, Kontakt
impressum.html      Impressum
datenschutz.html    Datenschutz
404.html            Fehlerseite (eigenständig, ohne relative Pfade)
assets/css/         Stylesheet
assets/fonts/       Schriften, selbst gehostet, mit Lizenzen
assets/img/         Fotos als WebP in mehreren Breiten, dazu og.jpg für Link-Vorschauen
dokumente/          PDFs zum Herunterladen
```

Alles in diesem Repository ist öffentlich abrufbar, auch PDFs. Nichts hier ablegen, was nicht veröffentlicht werden soll.

## Schriften

- [Bodoni Moda](https://github.com/indestructible-type/Bodoni) (indestructible type), SIL Open Font License 1.1, für Titel und große Zahlen.
- [Archivo](https://github.com/Omnibus-Type/Archivo) (Omnibus-Type), SIL Open Font License 1.1, für Text und Labels.

Beide als variable WOFF2, nur der lateinische Zeichensatz. Lizenztexte liegen in `assets/fonts/`.

## Bilder

Fotos liegen als `assets/img/<name>-<breite>.webp` in bis zu drei Breiten (480, 960 und die Originalbreite, nie hochskaliert). Metadaten werden beim Umwandeln entfernt. Die aktuellen Fotos stammen aus dem Inserat und dem Flyer des Eigentümers und sind eine Zwischenlösung. Neue Fotos am besten in voller Auflösung als Issue-Anhang, sie werden dann verkleinert und als WebP abgelegt.

Die Horizontzeichnung auf der Startseite und der Linienplan unter „Anreise“ sind Inline-SVG, schematisch und nicht maßstäblich.
