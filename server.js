var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
'article-two':{
    title:'a lip balm girl',
    heading:'A LIP BALM GIRL',
    content:`
    <p>The Story of "A LIP BALM GiRL" is just a feeling of the writer about the Girl.</p>
     <p>The Most interested Question is,Why  the Title is"A LIP BALM GiRL"???????<br>
      !!!The Title is A LIP BALM GiRL, Because she used to LIP BALM  on her BeAUtYFuL PINK LIPS ...!!!</p>`
},
'article-one':{
    title:'a lip balm girl2',
    heading:'A LIP BALM GIRL',
    content:`
     
     <p>The Most interested Question is,Why  the Title is"A LIP BALM GiRL"???????<br>
      !!!The Title is A LIP BALM GiRL, Because she used to LIP BALM  on her BeAUtYFuL PINK LIPS ...!!!</p>`  
    
    
}
};

function createTemplate(data)
{
  var title=data.title;
  var heading=data.heading;
  var content=data.content;

var htmlTemplate=`
<html>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
<title><center>${title}</center></title>
<body bgcolor=white text=blue>
   <div> <center><h2><u>${heading}</u></h2></center></div>
    <link href="/ui/style.css" rel="stylesheet" />
  <div class="container">
 ${content}
</div>
</body>

</html>

 `;
 return htmlTemplate;
    
}
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
 
});
app.get('/article-three', function (req, res) {
  res.send('article 3 requested here and it will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
