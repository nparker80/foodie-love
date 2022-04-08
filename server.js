const express = require('express');
const mongoose = require('mongoose');
const app = express()
const Recipe = require('./models/Recipe')
const User = require('./models/User')


const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
})
