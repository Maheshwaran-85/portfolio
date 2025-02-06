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
      <Nav /> 
      
      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Skill' element={<Skill />} />
        <Route path='/Education' element={<Education />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      </>
  );
}

export default App;
