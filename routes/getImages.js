const express = require('express');
const router = express.Router();
const requests = require('request');

const getImages = require("../crawlFunction/getImageFunction");

router.post('/', (request, respose) => {
    const param = request.body;
    const url = param.url;
    requests(url, (err, res, body) => {
        if(!err && res.statusCode == 200){
            const result = getImages(body);
            respose.send(result);
        }
    })
    
})

module.exports = router;