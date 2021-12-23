const express = require('express');
const router = express.Router();
const imageController = require('../controllers/images');
const uploadMiddleware = require('../middlewares/imgUpload');
const Image = require('../db/models/image');
router.post('/load', uploadMiddleware.single, imageController.load);

router.get('/test', async (req, res, next) => {
  res.send(await Image.find({}))
})

module.exports = router;