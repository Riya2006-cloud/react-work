import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feedback from './components/Feedback'; 
import Education from './components/Education';
import Manage from './components/Manage';
import Category_base from './components/Category_base';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/education" element={<Education />} />
        <Route path="/manage" element={<Manage />}/>
        <Route path="/category-base" element={<Category_base />}/>
        
      </Routes>
    </Router>
  );
}

export default App;