# So pflegst du die Seite selbst

Für Preis, Verfügbarkeit, Datum, Telefon, Mail und die zwei Links musst du nur **eine Datei** ändern. Alles andere auf der Seite bleibt, wie es ist.

## Etwas ändern, drei Schritte

1. Öffne diesen Link: https://github.com/timimmo/casa-joppolo/edit/main/_data/inhalt.yml
2. Ändere den Text zwischen den Anführungszeichen. Nur den Text, sonst nichts.
3. Klick rechts oben auf den grünen Knopf **Commit changes**, dann im Fenster noch einmal auf **Commit changes**.

Nach etwa einer Minute ist die Seite neu. Lade https://casa-joppolo.de einmal neu, dann siehst du es.

## Welche Zeile macht was

| Zeile | Wo es auf der Seite steht | Was du eintragen darfst |
|---|---|---|
| `frei_de` | Faktenband oben und im Abschnitt „Richiesta“, deutsche Seite | zum Beispiel `April bis Juni 2027` |
| `frei_en` | dieselben Stellen auf der englischen Seite | zum Beispiel `April to June 2027` |
| `miete` | überall, wo der Preis steht, beide Sprachen | nur die Zahl, zum Beispiel `550` |
| `kaution` | Faktenband und Abschnitt „Il prezzo“, beide Sprachen | nur die Zahl, zum Beispiel `600` |
| `stand` | unten auf jeder Seite („Stand 10/2026“) und bei den Wanderungen | Monat/Jahr, zum Beispiel `11/2026` |
| `telefon` | Abschnitt „Richiesta“ und Impressum, beide Sprachen | so, wie sie dastehen soll |
| `mail` | Abschnitt „Richiesta“, Impressum, Datenschutz, beide Sprachen | deine E-Mail-Adresse |
| `wg_link` | Satz „Das Loft steht auch auf WG-gesucht“ | der Link zum Inserat; leer lassen, dann verschwindet der Satz |
| `video_link` | Satz „Auf YouTube gibt es ein Video vom Loft“ | der Link zum Video; leer lassen, dann verschwindet der Satz |

Beide Sprachen lesen dieselbe Datei. Du änderst also einmal, es wirkt auf Deutsch und Englisch.

## Wenn die Seite nach einer Änderung nicht neu wird

Dann ist beim Tippen ein Anführungszeichen verloren gegangen oder eine Zeile verrutscht. Die alte Seite bleibt solange stehen, nichts geht kaputt. GitHub schickt dir eine Mail mit dem Betreff „Page build failure“.

1. Öffne wieder den Link von oben.
2. Prüfe die Zeile, die du geändert hast: vorne der Name, dann Doppelpunkt, Leerzeichen, dann der Text in Anführungszeichen.
3. Speichern wie oben, zweimal **Commit changes**.

## Einmal im Jahr

- Bei INWX nachsehen, dass die Domain `casa-joppolo.de` verlängert wird (am besten automatische Verlängerung an und ein gültiges Zahlungsmittel): https://www.inwx.de
- In den Einstellungen der Seite muss bei der Domain ein grüner Haken stehen, und der Haken bei „Enforce HTTPS“ gesetzt sein: https://github.com/timimmo/casa-joppolo/settings/pages
- Dein GitHub-Konto: Zwei-Faktor-Anmeldung an, Wiederherstellungscodes irgendwo sicher aufbewahrt.
- Einmal die Seite durchlesen: Stimmen Preis, Verfügbarkeit, Zugzeiten, SIM-Preise, Öffnungszeiten, die Wanderungen? Zahlen in der Datei ändern, Sätze als Issue melden (siehe unten).
- Läuft der Link zum WG-gesucht-Inserat noch? Wenn nicht: neuen Link in `wg_link` eintragen oder die Zeile leer lassen.

## Was nicht in der Datei steht

Sätze, Fotos und neue Abschnitte kannst du nicht über die Datei ändern. Dafür schreibst du wie bisher ein Issue: https://github.com/timimmo/casa-joppolo/issues/new

Björn schaut dort nur noch ab und zu rein. Rechne also nicht mit einer schnellen Antwort und sammle kleine Wünsche lieber in einem Issue.
