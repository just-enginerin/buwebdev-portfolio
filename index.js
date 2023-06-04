/*
============================================
; Title:  index.js
; Author: Erin Brady
; Date:   5 February 2023
; Description: Server and route file for Portfolio
;===========================================
*/

"use strict"

// Express and Node.js import statements
const express = require('express');
const path = require('path');

// Express app variable. Provides access to Express's built-in functions/classes.
// This creates the Express App
const app = express();

// Tells Express that the views (ejs pages) are in the views' folder.
app.set('views', path.join(__dirname, 'views')); 

// Tells Express to use ejs as it's view engine.
app.set('view engine', 'ejs');

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

// Constant variable to hold the server port value. The first part checks to see if
// the "process.env" variable already has a port defined. If it does, that will be used;
// otherwise, we will use port 3000.
const PORT = process.env.PORT || 3000;

// App routes:
app.get('/', (req, res) => {
    res.render('index', {
        title: "Erin Brady's Web Development Portfolio",
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me'
    })
})

app.get('/resume', (req, res) => {
    res.render('resume', {
        title: 'Resume'
    })
})

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects'
    })
})

app.get('/database', (req, res) => {
    res.render('database', {
        title: 'Database Diagrams'
    })
})

app.get('/tests', (req, res) => {
    res.render('tests', {
        title: 'API Unit Tests'
    })
})

app.get('/devops', (req, res) => {
    res.render('devops-presentations', {
        title: 'DevOps Presentations'
    })
})


/**
 * Starts the server on port 3000.
 */
app.listen(PORT, () => {
    console.log('Personal Portfolio started and listening on port ' + PORT);
})