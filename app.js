// Module dependencies.
var express = require('express')
  , routes = require('./routes')
var fs = require('fs');
var less = require('less');
var app = module.exports = express.createServer();


// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

//Less CSS compiler
app.get("*.less", function(req, res) {
    var path = __dirname + '/public' + req.url;
    fs.readFile(path, "utf8", function(err, data) 
    {
    	if (err) throw err;
    	less.render(data, function(err, css) 
    	{
            if (err) throw err;
            res.header("Content-type", "text/css");
            res.send(css);
   		});
    });
});



// Routes
app.get('/', routes.index);
app.get('/library', routes.library);
app.get('/album/:id', routes.album);


//Run Server
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
