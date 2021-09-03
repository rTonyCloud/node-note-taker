const express = require('express')
const { v4 } = require('uuid');
const path = require('path');


const apiRoutes = require('./routes/apiRoutes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes.js');
const { readFile, writeFile } = require('fs');
const router = require('./routes/apiRoutes/apiRoutes.js');
const PORT = process.env.PORT || 3008;
const app = express();


// routes 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// listening to the ports
app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
})
