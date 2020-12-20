const cheerio = require('cheerio');

const search = (body) => {
    const string = "panel panel-primary"
    let index = body.indexOf(string);
    let div = body.slice(index+string.length);
    let result = div.slice(0,div.indexOf(string));
    let source = result.slice(result.indexOf('panel-body'));
    
    let comic = [];

    if(source.indexOf("ebook") != -1){
        while(source.indexOf('ebook') != -1){

            let object = {
                title: "",
                thumbnail: "",
                href:"",
            }

            const html = source.slice(source.indexOf('ebook'), source.indexOf("</div> <div"));

            let thumbnail = html.slice(html.indexOf('<img'), html.indexOf('</a>'));
            let cheerios = cheerio(thumbnail);

            let title = html.slice(html.indexOf('<h5'), html.indexOf('</h5>'));
            let a = title.slice(title.indexOf('<a'));
            let $ = cheerio(a);

            object.title = $.text().trim();
            object.href = $[0].attribs.href;
            object.thumbnail = cheerios[0].attribs.src;

            comic.push(object);

            source = source.slice(source.indexOf("</div> <div")+5);
            
        }

    }

    return comic;

} 

module.exports = search;