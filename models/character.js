var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: String,
    type: String,
    age: Number,
    birthday: Date
    
});

var AgeSchema = new Schema({    
    age: Number

    
});

var TypeSchema = new Schema({
    type: String
});

var NameSchema = new Schema({
   name: String 
});

var Character = mongoose.model('Character', CharacterSchema);

var Name = mongoose.model('Name', NameSchema);

var Age = mongoose.model('Age', AgeSchema);

var Type = mongoose.model('Type', TypeSchema);

module.exports = {
    Character: Character,
    Name: Name,
    Age: Age,
    Type: Type
}
