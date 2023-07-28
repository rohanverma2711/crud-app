const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
