const cheerio = require("cheerio");

const getImage = (body) => {
    const result = body.slice(body.indexOf('noi_dung_online'));
    const source = result.slice(result.indexOf('<img'), result.indexOf('</p>'));
    const $ = cheerio(source);

    const value = $.map((i, el) => {
        return el.attribs
    })
    
    let images = [];

    for(i=0; i< value.length; i++){
        images.push(value[i]);
    }

    return images;
    
}

module.exports = getImage;