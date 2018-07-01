const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const controller = require('./controller');

massive( process.env.CONNECTIONSTRING )
  .then( dbInstance => {
    app.set('db', dbInstance);
    console.log('Connected to database');
  })
  .catch( err => {
    console.log(err.message);
  });

// (READ) GET endpoint to fetch ALL houses
app.get('/api/houses', controller.readHouses);

// (CREATE) POST endpoint to post a new house
app.post('/api/house', controller.createHouse);

// (DELETE) DELETE endpoint to delete a house
app.delete('/api/house/:id', controller.deleteHouse);

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});