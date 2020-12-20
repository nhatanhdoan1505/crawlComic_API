const cheerio = require('cheerio');

const getLink = (body) => {
    const result = body.slice(body.indexOf("row thong_tin_ebook"));
    let source = result.slice(result.indexOf("alert-info"), result.indexOf("btn-warning")+20);
    let link = "";
    if(source.indexOf("btn-success") == -1){
        source = source.slice(source.indexOf("<a"));
        const $ = cheerio(source);
        link = $[0].attribs.href;
    }else{
        source = source.slice(source.indexOf("</a>")+4);
        const $ = cheerio(source);
        link = $[1].attribs.href;
    }
    
    return link;
}

module.exports = getLink;