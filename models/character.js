var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var AgeSchema = new Schema({    
    age: Number

    
});

var TypeSchema = new Schema({
    type: String
});

var NameSchema = new Schema({
   name: String 
});



var Name = mongoose.model('Name', NameSchema);

var Age = mongoose.model('Age', AgeSchema);

var Type = mongoose.model('Type', TypeSchema);

module.exports = {
   
    Name: Name,
    Age: Age,
    Type: Type
}
