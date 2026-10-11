# casa-joppolo

Website für die Casa Joppolo, ein Haus mit zwei Wohnungen („Bellevue“ und „Loft“) in Joppolo an der Costa degli Dei, Kalabrien.

Die Seite ist im Aufbau.

## Wie das hier läuft

- **Timm** (`timimmo`) liefert Inhalte und Wünsche als [Issues](../../issues): Texte, Fotos, PDFs, Links, Korrekturen. Jedes Issue sollte kurz sagen, was damit passieren soll.
- **Björn** (`dasboe`) setzt die Issues um. Sobald GitHub Pages eingeschaltet ist, geht jeder Push auf `main` nach etwa einer Minute live.

## Aufbau

Reines HTML und CSS, kein Build-Schritt, kein JavaScript. GitHub Pages liefert den Inhalt von `main` direkt aus.

```
index.html          Startseite
assets/css/         Stylesheet
assets/fonts/       Schriften, selbst gehostet
assets/img/         Fotos als WebP in mehreren Größen
dokumente/          PDFs zum Herunterladen
```

Alles in diesem Repository ist öffentlich abrufbar, auch PDFs. Nichts hier ablegen, was nicht veröffentlicht werden soll.

## Bilder nachliefern

Neue Fotos am besten in voller Auflösung als Issue-Anhang. Sie werden dann verkleinert und als WebP in `assets/img/` abgelegt.
