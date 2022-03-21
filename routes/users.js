var express = require('express');
var router = express.Router();
const { whatsappMessage } = require('../models/WhatsappSchema');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post("/v1/messages/new", (req, res) => {
  const dbMessage = req.body;

  whatsappMessage.create(dbMessage, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);

  })

});

router.get("/messages/sync", (req, res) => {

  whatsappMessage.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);

  })

});


module.exports = router;
