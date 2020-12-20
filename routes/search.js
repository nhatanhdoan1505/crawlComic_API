const express = require('express');
const router = express.Router();

const requests = require('request');


const search = require('../crawlFunction/searchFunction');

router.post('/', (request, respose) => {
    const param = request.body;
    const url = param.url;
    requests(url, (err, res, body) => {
        if(!err && res.statusCode == 200){
            const result = search(body);
            respose.send(result);
        }
    })
})

module.exports = router;