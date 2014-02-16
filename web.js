/**
 * Created with IntelliJ IDEA.
 * User: byeongjinahn
 * Date: 2014. 2. 13.
 * Time: 오후 2:35
 * To change this template use File | Settings | File Templates.
 */

// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.send('Hello World!?????');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
