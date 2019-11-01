var express = require('express');
var server = express();
var port = 3000;

server.use('/static', express.static('./views/static'));

server.set('view engine', 'ejs');

server.get('/', function(req, res) {
   res.render('index');
});

server.get('/academic', function(req, res) {
    res.render('academic');
})

server.get('/project', function(req, res) {
    res.render('project');
})

server.get('/resume', function(req, res) {
    var fs = require('fs');
    var readStream = fs.createReadStream(__dirname + '/views/static/Star-Li-Resume.pdf')
    readStream.pipe(res);
 });

server.listen(port, function() {
    console.log(`express server starts at port:${port}`);
});