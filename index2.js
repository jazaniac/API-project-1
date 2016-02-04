var express = require("express");
var app = express();
var Character = require('./models/character.js');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
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
 res.json({message:"API live"});  
});

router.get('/getCharacter', function(req, res) {
	var name = req.query.name;
	if(name) {
        Name.findOne({name:name,
                     age:age,
                      type:type
                     }, function(error, result){
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


router.get('/getName', function(req, res) {
	var name = req.query.name;
	if(name) {
        Name.findOne({name:name}, function(error, result){
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

router.get('/getAge', function(req, res) {
	var age = req.query.age;
	if(age) {
       Age.findOne({age:age}, function(error, result){
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

router.get('/getType', function(req, res) {
	var type = req.query.type;
	if(type) {
        Type.findOne({type:type}, function(error, result){
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







router.post('/makeName', function(req, res){
	var name = req.body.name;
	Name.create({
			name:name,
			}, function(err, result) {
				if(err) res.status(500).json({error:"error creating character"})
					res.json({message:"character created", name:result});
			});

})

router.post('/makeAge', function(req, res){
	var age = req.body.age;
	Age.create({
			age:age}, function(err, result) {
				if(err) res.status(500).json({error:"error creating character"})
					res.json({message:"character created", age:result});
			});

})

router.post('/makeType', function(req, res){
	var type = req.body.type;
	Type.create({
			type:type}, function(err, result) {
				if(err) res.status(500).json({error:"error creating character"})
					res.json({message:"character created", type:result});
			});

})



    

app.use('/api', router);
app.listen(port);
console.log("API active at localhost:" + port);