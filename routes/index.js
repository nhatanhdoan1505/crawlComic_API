const express = require('express');
const router = express.Router();

router.get('/', (request, respose) => {
    respose.render('index');
})

module.exports = router;