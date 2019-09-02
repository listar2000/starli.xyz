var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
    res.send('蒋子龙你妈个台独臭傻逼我🇺🇸战狼实名制日你屁眼');
});

app.listen(port, () => console.log(`server starts to run on port:${port}`));