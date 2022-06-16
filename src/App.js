import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Reset from "./Components/Reset";
import Dashboard from "./Components/Dashboard";
import React from 'react';
import Home from "./Components/Home";
import Yoga1 from './Components/Yoga1';
import Yoga2 from './Components/Yoga2';
import Yoga3 from './Components/Yoga3';
import Exercise1 from './Components/Exercise1';
import Exercise2 from './Components/Exercise2';
import Exercise3 from './Components/Exercise3';
import About from './Components/YAbout';
import YogaList from './Components/YogaList';
import ExerciseList from './Components/ExerciseList';
import Main from './Components/main';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/yoga1" element={<Yoga1 />} />
          <Route exact path="/yoga2" element={<Yoga2 />} />
          <Route exact path="/yoga3" element={<Yoga3 />} />
          <Route exact path="/exercise1" element={<Exercise1 />} />
          <Route exact path="/exercise2" element={<Exercise2 />} />
          <Route exact path="/exercise3" element={<Exercise3 />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/yogalist" element={<YogaList />} />
          <Route exact path="/exerciselist" element={<ExerciseList />} />
          <Route exact path="/main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;