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

function Nav() {
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
              <p>About</p>
              <p>Projects</p>
              <p>Skills</p>
              <p>Education</p>
              <p>Contact Me</p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return (
    <>
      <div className='web-nav'>
        <div className="nav-container">
          <h3 className='portfolio-nav'>
            <img src={code} alt="portfolio logo" />Portfolio
          </h3>
        </div>
        <div className="nav-links">
          <h5 className="nav-links1"><img src={user} alt="user" />About</h5>
          <h5 className="nav-links2"><img src={bag} alt="projects" />Projects</h5>
          <h5 className="nav-links3"><img src={skill} alt="skills" />Skills</h5>
          <h5 className="nav-links3"><img src={education} alt="education" />Education</h5>
          <h5 className="nav-links4"><img src={contact} alt="contact" />Contact</h5>
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
