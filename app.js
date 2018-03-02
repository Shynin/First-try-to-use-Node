var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();
	
app.use( bodyParser.urlencoded( { extended: true}));
app.use( bodyParser.json());

var posts = [
	{title: "First test post", content: "Some text"},
	{title: "Second test post", content: "Some text"},
	{title: "My third test post", content: "Some text"}
];

app.get( "/", function(req, res) {
	res.render("index.ejs", {posts: posts});
});

app.get( "/post/:id", function (req, res) {
	var id = req.params.id;
	res.render( 'post.ejs', {post: posts[id - 1]});
});

app.get ("/write", function (req, res) {
	res.render ( 'write.ejs');
});

app.post ("/write", function (req, res) {
	var
		title = req.body.title,
		content = req.body.content;

	posts.push({title: title, content: content});

	res.redirect( '/');
});

app.listen( 3000, function(){
	console.log("Work on localhost: 3000");
});