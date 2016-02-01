var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: String,
    type: String,
    age: Number,
    birthday: Date
    
});

var Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;