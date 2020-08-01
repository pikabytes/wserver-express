const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

//middlewar para dejar archivos publicos
app.use(express.static(__dirname + '/public'));
// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'ALEXIS mAMANI'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});


app.listen(port, () =>{
  console.log('listening request on port 3000');
});