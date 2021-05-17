const express = require('express');
const catalog = require('./routes/catalog');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

// routes middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use('/api',catalog)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})