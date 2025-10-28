import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Feedback from './components/Feedback'; 
import Education from './components/Education';
import Manage from './components/Manage';
import Category_base from './components/Category_base';
import Signup from './components/signup';
import Category1 from './components/Category1';
import Category2 from './components/Category2';
import Category3 from './components/Category3';
import Category4 from './components/Category4';

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
      <Route path="/category1" element={<Category1/>}/>
      <Route path="/category2" element={<Category2/>}/>
      <Route path="/category3" element={<Category3/>}/>
      <Route path="/category4" element={<Category4/>}/>

      </Routes>
    </Router>
  );
}

export default App;