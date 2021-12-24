const express = require('express');
const app = express();
const db = require('./db');
const PORT = 3000;
const cors = require('cors');
const fs = require('fs');
const dir = '../uploads';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const imagesRouter = require('./routes/images');

app.use(express.static('../uploads'));
app.use('/', express.static('public/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors());

app.use('/v1/images', imagesRouter);
db.connect((err) => {
  if (err) return console.error(err);
  app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`);
  });
});


// /v1/images/load