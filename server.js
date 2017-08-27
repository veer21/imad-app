var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articletwo={
    title:'a lip balm girl',
    heading:'A LIP BALM GIRL',
    content:`
    <p>The Story of "A LIP BALM GiRL" is just a feeling of the writer about the Girl.</p>
     <p>The Most interested Question is,Why  the Title is"A LIP BALM GiRL"???????<br>
      !!!The Title is A LIP BALM GiRL, Because she used to LIP BALM  on her BeAUtYFuL PINK LIPS ...!!!</p>


      <p><u> the story starts since a ceremony........</u>
when the first time writer saw that girl then suddenly a feeling of attraction arises towards her, GOD knows whether it is the, feeling of crush or the feeling of love. but due to lack of communication or due to the busy schedule of the ceremony writer unable to interact with her... then after the ending of the ceremony both of them are separated from each other towards their DestiNatioN.

</p>
<p>After that AGAIN both of them are meeted in a group.but still writer unable to interact with her. after that a moment came when, may be by mistake,she texts him then suddenly a rise of hope arises in him. then till onwards a game of texting message get started and this game consists lots of emojis,certain feelings...Etc, and Finally  he puts his Feeling towards her and the writer thinks that the BalmY Girl also Liked him........</P>
<p><u>After the Proposal, she started asking some feelingfull Questions from the Writer  like:-</u> </p>

    <p>Q1.Plzz..Describe a character sketch of me.</p>
    <p>Q2.Why u calling me by another names?</p>
    <p>Q3. Will U really like me?</p>
    <p>...........</p>
    <p>...........</p>
    <p><u>Replies from the Writer</u></p>
    <P>FOR Q 1....U r looking GoRGeouS with your BALMY LiPs,,,U have such a Glittering Eyes that Attract me a LOT,and u r luking much more Cute when U BRAID your Silky-Shining HaiRs,,,when your Hairs comes in front of your Glowing Face and Touching your Glittering eyes is just the most  AwEsOmE thing that I can't Explain and U r Little Bit Shy Along with Naughty Nature that i love it.........EtC.,  </P>
    <p>FOR Q 2....PTa NHI DEar,,,,it just a Felling....</p>
    <p>FOR Q 3.... writer says HAAN-HAAN-HAAN...........</p>
    <p><u>AFTER this text messages....FIRST time they are talking in a phone call ....During this they are talking about ONE-Another...BUT they are specifying by their good names.... at last they cut their phone calls...but the writer calls her thrice after cutting the Ist conversasation....its due to some feelings that wake up in the writer due to phone call</u></p>
    <p>Finaly,After the call Balmy Girl messesged to the Writer "plzz don't tells to anyone that we were talking in a phone call "</p>
    <P>Then,the Writer says "Okkk Dear"</P>
    <p>After that,Again texting is going ON.....</p>
    <p>The above things is so looking simple,but actually what is going on with the writer no one knows,when he is going to propose his Balmy....
he can't imagine what he is going to do..but with all courage initially he tried the most wonderful 3 magical words>>>>with I only...bcoz he is too much afraid what she thinks about him. 

</p>
<p></p>
<p5><right><h9><u>....... to be continued</u></h9></right></p5>`
};
var htmlTemplate=`




`;
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
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
