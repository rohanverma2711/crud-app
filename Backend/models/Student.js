const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a schema for the data to be stored.
let studentSchema = new Schema({

email: {
	type: String
},
password: {
	type: String
}
}, {
	collection: 'students'
})


module.exports = mongoose.model('Student', studentSchema)
