const express = require('express');
const moment = require('moment');
const router = express.Router();
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDooBjPPCGgXuIACYdt-Ril_Xx85ExI-4Y'
});

router.post('/', (req, res) => {
  googleMapsClient.places({
    'query': req.body.query
  }, (err, response) => {
    if (!err)
      console.log(response.json.results)
  });
});

module.exports = router;
