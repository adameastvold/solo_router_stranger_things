var express = require('express');
var app = express();
var path = require('path'); //path is built into node, it is a module, not hooked up by default so it must be declared here

app.set("port", (process.env.PORT || 5000));

app.get('/*', function(req, res) {
    console.log(req.params);
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "/public", file));
});

app.listen(app.get("port"), function() {
    console.log("Listening on port: ", app.get("port"));
});
