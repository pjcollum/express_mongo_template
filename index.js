const bodyParser = require('body-parser');      //import body parser npm i body-parser
const hbs = require('express-handlebars');          //import handlebars and path
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const app = express();

const getUsers = require('./lib/getUsers');

require('dotenv').config();                 //linked to .env file

// const mongoose = require('mongoose');
const UserSchema = require('./models/user');

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@usersignup-zziud.mongodb.net/userdb?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
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

app.post('/', async (req, res) => {
    let username = req.body.username;
    let email = req.body.email
    let password = req.body.password
    
    let docs = await getUsers.email(email);
    let docs1 = await getUsers.username(username);
         //console.log(docs);                  //prints in terminal
    
        if(docs.length > 0){
            res.render('index', {err: "a user with this email already exists"})
            return;
        } 
        if(docs1.length > 0){
            res.render('index', {err: "a user with this username already exists"})
            return;
        } 

    const user = new UserSchema({
        username: username,
        email: email,
        password: password
    })
    user.save();

    res.render('profile')

    //res.render('index', { data: { name, email, password } });

})
app.get('/login', async (req, res) => {     //async function
    res.render('logIn');
});

app.post('/login', async (req, res) => {
    // let username = req.body.username
    // let email = req.body.email
    // let password = req.body.password
    
   
    // let docs1 = await getUsers.username(username);
    //      console.log(docs);                  //prints in terminal
    
    // if(docs1.length > 0){
    //     res.render('index', {err: "a user with this username already exists"})
    //     return;
    // } 
    // const user = new UserSchema({
    //     email: email,
    //     password: password
    // })
    // user.save();
    // res.render('profile')
})
app.get('/profile', async (req, res) => {     //async function
    res.render('profile');
});

app.listen(3006, () => {                            //opens code in local host port 300
    console.log('server listening on port 3006');
});