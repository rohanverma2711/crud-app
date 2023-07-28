let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Student Model
let studentSchema = require("../models/Student");


// CREATE Student
router.post("/create-student", (req, res) => {
studentSchema.create(req.body)
	.then(users=>res.json(users))
	.catch(err=>(res.json(err)))

})

// READ Students
router.get("/", (req, res) => {
studentSchema.find(req.body)
	
.then(users=>res.json(users))
	.catch(err=>(res.json(err)))
	
});


//api to find the user when clicked on it.
router.get("/update-student/:id", async (req, res) => {
	try {
	  const student = await studentSchema.findById(req.params.id);
  
	  if (student) {
		res.json(student);
	  } else {
		res.status(404).json({
		  msg: "Student not found."
		});
	  }
	} catch (error) {
	  console.log(error,"rssdsa");
	}
  });


//api to update the details of the user
  router.put("/update-student/:id", async (req, res, next) => {
	try {
	  const updatedStudent = await studentSchema.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true } // This option returns the updated document instead of the original one
	  );
  
	  if (updatedStudent) {
		res.json(updatedStudent);
		console.log("Student updated successfully !");
	  } else {
		res.status(404).json({
		  msg: "Student not found."
		});
	  }
	} catch (error) {
	  next(error);
	  console.log(error);
	}
  });

  //api to delete a user
router.delete("/delete-student/:id", async (req, res, next) => {
	try {
	  const deletedStudent = await studentSchema.findByIdAndRemove(req.params.id);
  
	  if (deletedStudent) {
		res.status(200).json({
		  msg: "Student deleted successfully.",
		  data: deletedStudent
		});
	  } else {
		res.status(404).json({
		  msg: "Student not found."
		});
	  }
	} catch (error) {
	  next(error);
	}
  });

  


	



module.exports = router;
