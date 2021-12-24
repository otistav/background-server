const express = require('express');
const router = express.Router();
const imageController = require('../controllers/images');
const uploadMiddleware = require('../middlewares/imgUpload');
const Image = require('../db/models/image');
const imageService = require('../services/imageService');

router.post('/load', uploadMiddleware.single, imageController.load);

router.get('/', async (req, res, next) => {
  res.send(await Image.find({}))
})

router.get('/test', async (req, res, next) => {
  res.send(req.headers.host);
})

router.get('/del', async (req, res, next) => {
  Image.find({}).remove().exec();
  res.sendStatus(200);
})

module.exports = router;