// Importiere das eingebaute "fs"-Modul (File System) für Dateioperationen.
const fs = require('fs');

// Lese den Inhalt der Datei "beispiel.txt". "utf8" gibt an, dass der Text als UTF-8 interpretiert werden soll.
fs.readFile('beispiel.txt', 'utf8', (err, data) => {
  
  // Überprüfe, ob beim Lesen der Datei ein Fehler aufgetreten ist.
  if (err) {
    // Gibt den Fehler auf der Konsole aus, wenn einer auftritt.
    console.error('Ein Fehler ist aufgetreten:', err);
    return;
  }
  
  // Gibt den Inhalt der Datei auf der Konsole aus.
  console.log('Dateiinhalt:', data);
});

/*
Dateioperationen

    Erstellen Sie zuerst eine Textdatei namens beispiel.txt und schreiben Sie etwas hinein, z.B. "Dies ist ein Test".
    Dann fügen Sie den Datei-Lese-Code in einen Texteditor ein und speichern Sie ihn als datei-lesen.js.
    Führen Sie im Terminal node datei-lesen.js aus.
    Die Konsole sollte "Dateiinhalt: Dies ist ein Test" ausgeben. */
