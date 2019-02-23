const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

//Helpers


app.set('view engine', 'hbs');

app.get('/', function (req, res) {    
    res.render('home', {
        nombre: 'MAGM',
        anio: new Date().getFullYear()
    });
})

app.get('/about', function (req, res) {    
    res.render('about', {
        anio: new Date().getFullYear()
    });
})

// app.get('/', function (req, res) {
//     let salida = {
//         nombre: 'Melvin',
//         edad: 32,
//         url: req.url
//     }
//     res.send(salida)
// })

app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
})