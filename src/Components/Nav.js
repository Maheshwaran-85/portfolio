import React, { useState } from 'react';
import './Nav.css';  // Import the CSS file for styling
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import user from '../Images/person-fill-gear.svg';
import bag from '../Images/suitcase-lg.svg';
import skill from '../Images/book.svg';
import education from '../Images/mortarboard.svg';
import contact from '../Images/envelope (1).svg';
import code from '../Images/code (1).png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHamburgerMenu } from 'react-icons/gi';  // Import the Hamburger icon
import { useNavigate } from 'react-router-dom';

function Nav() {
  const nav = useNavigate();

  // OffCanvas component to handle the mobile menu
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        {/* Hamburger icon as button trigger */}
        <Button variant="link" onClick={handleShow} className="me-2">
          <GiHamburgerMenu size={30} /> {/* Display hamburger icon */}
        </Button>

        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <div>
              <p onClick={() => { nav('/About'); handleClose(); }}>About</p>
              <p onClick={() => { nav('/Project'); handleClose(); }}>Projects</p>
              <p onClick={() => { nav('/Skill'); handleClose(); }}>Skills</p> {/* Changed from Skills to Skill */}
              <p onClick={() => { nav('/Education'); handleClose(); }}>Education</p>
              <p onClick={() => { nav('/Contact'); handleClose(); }}>Contact Me</p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return (
    <>
      <div className='web-nav'>
        <div>
          <div className="nav-container">
            <h3 className='portfolio-nav'>
              <img src={code} alt="portfolio logo" />Portfolio
            </h3>
          </div>
          <div className="nav-links">
            <h5 className="nav-links1" onClick={() => nav('/About')}>
              <img src={user} alt="user" />
              <span className='text-Navbar'>About</span>
            </h5>
            <h5 className="nav-links1" onClick={() => nav('/Project')}>
              <img src={bag} alt="projects" /> 
              <span className='text-Navbar'>Projects</span>
            </h5>
            <h5 className="nav-links1" onClick={() => nav('/Skill')}> {/* Changed from /Skills to /Skill */}
              <img src={skill} alt="skills" /> <span className='text-Navbar'>Skills</span>
            </h5>
            <h5 className="nav-links1" onClick={() => nav('/Education')}>
              <img src={education} alt="education" /> <span className='text-Navbar'>Education</span>
            </h5>
            <h5 className="nav-links2" onClick={() => nav('/Contact')}>
              <img src={contact} alt="contact" /> <span className='text-Navbar'>Contact</span>
            </h5>
          </div>
        </div>

        {/* Mobile navigation with hamburger menu */}
        <div className='mobile-nav'>
          {['end'].map((placement, idx) => (
            <OffCanvasExample key={idx} placement={placement} name={placement} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Nav;
