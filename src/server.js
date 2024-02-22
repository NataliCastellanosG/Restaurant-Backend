require('./DataBase/sync.js');

const connection = require('./DataBase/connection.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

connection.sync({force: false})
    .then(() => { 
        console.log('Synchronized DataBase'); 
        app.listen(port, ()=> {
            console.log("The application is running on port: " + port);
        })
    })
    .catch((error) => { 
        console.error('Error syncing DataBase' + error);
    }); 