var logger = require('./logger')(module);
const express = require('express');

const app = express();

//app.use('/assets', express.static(appRoot + '/public'))

app.enable('strict routing');
app.all('/static', function(req, res) { res.redirect('/static/'); });
app.use('/static/', express.static('public'));

// app.get('/', (req, res) => res.send('Hello World!'))


app.listen(3000, () => logger.info('HTTP listening on port 3000!'))

module.exports = app;
