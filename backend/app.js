const express = require('express');
const app = express();
const port = 80; //must change to 80 when communicating
var qs = require('querystring');
var fs = require('fs')

var template = require('./lib/template.js');
const { join } = require('path');
var title = template.ko_list.title;
var explain = template.ko_list.explain;
var adlist = template.adlistFunc(template.adlist_site, template.ko_list.adlist);
var action_site = '/new_ad'
var placeholderlist = template.ko_list.placeholderlist
var contentslist = template.contentslistFunc(template.ko_list.contentslist, placeholderlist);
var html = template.HTML(title, explain, adlist, action_site, contentslist);


app.get('/', (req, res, next) => {
    res.send(html);
})

app.get('/temp', function (req, res) {
    let sjson = require('./data/newfile.json');
    res.json(sjson);
});


app.post('/new_ad', (req, res, next) => {
    let user_name = "newfile";
    console.log('chek');
    var body = "";
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        var post = qs.parse(body);
        const content = `${JSON.stringify(post)}`;
        var newJson = JSON.parse(content);
        console.log(newJson);
        newJson.ad_len = Number(newJson['Exposure Frequency']);
        newJson.ad_num = Number(newJson['Number of days']);
        
        console.log(newJson);
        fs.writeFileSync(`./data/${user_name}.json`, JSON.stringify(newJson), 'utf-8');
        res.redirect(302, '/');
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})