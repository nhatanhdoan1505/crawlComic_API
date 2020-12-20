const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Express body-Parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


const PORT = process.env.PORT || 5000;

app.use('/search', require('./routes/search'));
app.use('/link', require("./routes/getLink"));
app.use('/chapter', require("./routes/getChapter"));
app.use('/image', require("./routes/getImages"));

app.listen(PORT, console.log("Server is starting"));