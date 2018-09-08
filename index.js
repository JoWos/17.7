var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
    console.log('Zawartość katalogu: '.green);
    console.log(data);
    fs.writeFile('./nowy.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano do nowego pliku'.bgBlue);
        fs.readFile('./nowy.txt', 'utf-8', function(err, data) {
            console.log("\nOto co zostało zapisane: ".cyan);
            console.log(data);
        });
    });
});
