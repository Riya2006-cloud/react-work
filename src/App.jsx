import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Feedback from './components/Feedback'; 
import Education from './components/Education';
import Manage from './components/Manage';
import Category_base from './components/Category_base';
import Signup from './components/signup';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SplashScreen />} /> 
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/education" element={<Education />} />
        <Route path="/manage" element={<Manage />}/>
        <Route path="/category-base" element={<Category_base />}/>
        <Route path="/homepage" element={<Homepage />}/>
      <Route path="/signup" element={<Signup />}/>

      </Routes>
    </Router>
  );
}

export default App;