// const http = require('http');

// http.createServer((req, res) =>{// simbolo de flecha abreviacion de  function
//     res.end('Hello world');
// }).listen(port);

const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

//Settings
app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

// MIDDLEWARE
app.use(morgan('dev'));

// MIDDLEWARE
// app.use( (req, res ,next)=>{  //middle wares funciones q s ejecutan lineal si no tiene el next se ejecuta el archivo hasta entre en una middle ware
//  console.log('request url :' + req.url);
//  next(); 
// });
// app.use( (req, res ,next)=>{  //middle wares funciones q s ejecutan lineal si no tiene el next se ejecuta el archivo hasta entre en una middle ware
//     console.log('Ha pasado por esta funcion');
//     next(); 
//    });

//RUTAS routes
app.get('/', (req, res)=> {    //req=peticion res= responder
//     res.end('Hello world');
res.render('index.ejs');
});
app.get('/login', (req, res)=> {  
    res.render('login.ejs'); 
    // res.end('Aqui va el login');
});
app.get('*', (req, res)=> {    
    res.end('Ruta no encontrada');
});
app.listen(port, ()=>{
    console.log ('Server ok')
    console.log ('Nombre de la ap: ', app.get('appName'));
});