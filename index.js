const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const fs = require('fs');


app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res) =>{

    res.status(200).render('about.pug');
})

app.get('/resume',(req,res) =>{
    const params = {};

    res.status(200).render('resume.pug', params);
})

app.get('/projects',(req,res) =>{
    const params = {};

    res.status(200).render('projects.pug', params);
})

app.get('/contact',(req,res) =>{
    const params = {};

    res.status(200).render('contact.pug', params);
})

app.get('/certificates',(req,res) =>{
    const params = {};

    res.status(200).render('certificates.pug', params);
})

// app.get('/home',(req,res) =>{
//     const params = {
//         names: home
//     }
//     res.status(200).render('home.pug', params );
// })

app.listen(port, () =>{
    console.log(`The application started successfully on port ${port}`);
})
