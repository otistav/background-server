const express = require('express');
const app = express();
const db = require('./db');
const PORT = 3000;

const imagesRouter = require('./routes/images');

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use('/v1/images', imagesRouter);
db.connect((err) => {
  if (err) return console.error(err);
  app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`);
  });
});


// /v1/images/load