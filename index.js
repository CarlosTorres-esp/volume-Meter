var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Ya entre perro')
})

app.listen(8080)