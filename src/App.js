// Import React
import React from "react";

// Import Bootstrap

import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";
// Import other React Component
import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

import Register from "./components/register";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		
			<div className="">
				<Routes>
					<Route  path="/"
					element={<Register/>} />
				<Route path="/create-student"
					element={<CreateStudent/>} />
				<Route path="/edit-student/:id"
					element={<EditStudent/>} />
				<Route path="/student-list"
					element={<StudentList/>} />
				</Routes>
			</div>
		
	</div>
	</Router>
);
};

export default App;
