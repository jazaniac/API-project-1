var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: String,
    type: String,
    age: Number,
    birthday: Date
    
});

var Account = mongoose.model('Character', AccountSchema);

module.exports = Character;