
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Nav from './Components/Nav';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Education from './Components/Education';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Nav/>
  
    <Routes>
     <Route path='/About'element={<About/>}>  </Route>  
     <Route path='/Project'element={<Project/>}>  </Route>  
     <Route path='/Skill'element={<Skill/>}>  </Route>
     <Route path='/Education'element={<Education/>}>  </Route>
     <Route path='/Contact'element={<Contact/>}>  </Route>
     </Routes>
 
    
    </>
  );
}

export default App;
