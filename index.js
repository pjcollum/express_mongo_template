const bodyParser = require('body-parser');      //import body parser npm i body-parser
const hbs = require('express-handlebars');          //import handlebars and path
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const app = express();

require('dotenv').config();                 //linked to .env file

mongoose.connect('mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@usersignup-zziud.mongodb.net/userdb?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology: true
});



//use path to join these two paths, tells path is static=all static files to be sent to client
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('.hbs', hbs({        //handlebars view engine
    defaultLayout: 'layout',        //set layout file as layout.hbs
    extname: '.hbs'
}));
app.set('view engine', '.hbs');




app.get('/', async (req, res) => {     //async function
    res.render('index');
});
app.get('/login', async (req, res) => {     //async function
    res.render('logIn');
});
app.get('/signup', async (req, res) => {     //async function
    res.render('signUp');
});

app.listen(3000, () => {                            //opens code in local host port 300
    console.log('server listening on port 3000');
});