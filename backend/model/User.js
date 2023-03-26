const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    rating:Number,
    name:String

});

module.exports = mongoose.model('user',UserSchema)