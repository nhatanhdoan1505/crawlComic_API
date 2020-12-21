const express = require('express');
const router = express.Router();

router.get('/', (request, respose) => {
    respose.setHeader("Access-Control-Allow-Origin", "*")
    respose.setHeader("Access-Control-Allow-Credentials", "true");
    respose.setHeader("Access-Control-Max-Age", "1800");
    respose.setHeader("Access-Control-Allow-Headers", "content-type");
    respose.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

    respose.render('index');
})

module.exports = router;