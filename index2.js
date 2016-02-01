var express = require("express");
var app = express();
var Character = require('./models/character.js');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true;
}));

mongoose.connect('mongodb://localhost:27017/newnode', function(error){
        if(error) {
            comsole.log(error);
        } else { 
            console.log("Connected to database!");
        }
});

var port = 8001;

var router = express.Router();

router.get('/', function(req, res) {
 res.json({message:"API live"})   
});


router.get('/getCharacter', funciton(req, res){
	var name = res.query.name;
	if(name) {
        Character.findOne({name:name}, function(error, result){
        	if(error) {
        		console.log(error);
        		res.status(500).json({error:"I am become error"});
        	}
        	res.json(result);
        });
        } else {
    res.status(400).json({error:"character does not exist"})
        }
});


})

router.post('/makeCharacter', function(req, res){
	var name = req.body.name;
	var type = req.body.type;
	var age = req.body.age;
	Character.create({
			name:name,
			type:type,
			age:age}, function(err, result) {
				if(err) res.status(500).json({error:"error creating character"})
					res.json({message:"character created", character:result});
			});

})

app.use('/api', router);
app.listen(port);
console.log("API active at localhost:" + port);