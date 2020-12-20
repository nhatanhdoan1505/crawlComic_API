const cheerio = require('cheerio');

const getChapter = (body) => {
    let chapter = [];
    string = "dropdown-menu scrollable-menu";

    if(body.indexOf(string) != -1 ){
        const source = body.slice(body.indexOf(string));
        const result = source.slice(source.indexOf('<li'), source.indexOf('</ul>'))
        const $ = cheerio(result);

        const value = $.map((i, el) => {
            const information = el.children[0].children[0].parent;
            const href = information.attribs.href;
            const data = information.children[0].data;
            return {href: href, data: data}
        });
    
        for(i = 0; i < value.length; i++){
            chapter.push(value[i]);
        }
    }
        return chapter;
}

module.exports = getChapter;