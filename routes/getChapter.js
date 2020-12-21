const express = require('express');
const router = express.Router();
const requests = require('request');

const getChapter = require("../crawlFunction/getChapterFuction");

router.post('/', (request, respose) => {
    respose.setHeader("Access-Control-Allow-Origin", "*")
    respose.setHeader("Access-Control-Allow-Credentials", "true");
    respose.setHeader("Access-Control-Max-Age", "1800");
    respose.setHeader("Access-Control-Allow-Headers", "content-type");
    respose.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

    const param = request.body;
    const url = param.url;
    requests(url, (err, res, body) => {
        if(!err && res.statusCode == 200){
            const result = getChapter(body);
            respose.send(result);
        }
    })
    
})

module.exports = router;