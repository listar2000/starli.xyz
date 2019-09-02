var fs = require('fs');

// // blocking code (synchronuous version)
// var readMe = fs.readFileSync('./hope.txt', 'utf8');
// fs.writeFileSync('./hope2.txt', readMe);

// non-blocking mode (async version)
fs.readFile('./hope.txt', 'utf8', function(err, data) {
    console.log(err);
    fs.writeFile('./despair.txt', data);
})