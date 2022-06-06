const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/plays');
app.use('/plays', postsRoute);

mongoose.connect(
    process.env.DB_CONNECTION,
    { dbName: 'testing_site' },
    function(err) {
        if (err)
            console.log(err);
        else
            console.log('Database connected');
    },
);

// How do we start listening to the server
app.listen(2999);