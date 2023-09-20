// Importiere das eingebaute "http"-Modul, um einen Webserver zu erstellen.
const http = require('http');

// Erstelle einen neuen Webserver. "req" enthält die Anfrageinformationen, "res" ermöglicht es, eine Antwort zu senden.
const server = http.createServer((req, res) => {
  
  // Setze den HTTP-Status auf 200 (OK) und den Inhaltstyp auf "text/plain".
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Beende die Antwort und sende den Text "Hallo Welt!" zurück.
  res.end('Hallo Welt!\n');
});

// Starte den Webserver auf Port 3000 und gebe eine Meldung auf der Konsole aus.
server.listen(3000, () => {
  console.log('Server läuft auf http://localhost:3000/');
});
/*
Einfacher Webserver

    Ähnlich wie beim ersten Beispiel, fügen Sie den Webserver-Code in einen Texteditor ein und speichern Sie die Datei als einfacher-server.js.
    Navigieren Sie im Terminal zum Dateispeicherort und führen Sie node einfacher-server.js aus.
    Öffnen Sie einen Webbrowser und gehen Sie zu http://localhost:3000/.
    Der Browser sollte die Nachricht "Hallo Welt!" anzeigen.
    */
