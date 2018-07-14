var logger = require('./logger')(module);
var app = require('./express')
var exphbs  = require('express-handlebars');

// Register '.hbs' extension with The Handlebars Express
app.engine('hbs', exphbs({defaultLayout: 'default', extname: '.hbs', layoutsDir: 'views/_layouts/', partialsDir: 'views/_partials/'}));
app.set('view engine', 'hbs');
app.set('views', 'views');


// app.enable('view cache');

app.get('/*', function (req, res) {
  res.render(req.path.replace(/^\/+/g, '') + '.hbs');
});

logger.info('handlebars express is ready to serve templates from folder: /views')
