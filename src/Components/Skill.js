import React from 'react'
import'./Skill.css'
import Html from '../Images/htmll-removebg-preview.png'
import css from '../Images/css-removebg-preview.png'
import Javascript from '../Images/javascript-removebg-preview.png'
import Reactt from '../Images/react-removebg-preview.png'
import Exp from '../Images/exp.jpg'
import node from '../Images/node.png'
import Mongo from '../Images/mongodb.png'
import fire from '../Images/firebase.png'
import Reactb from '../Images/download.jpeg'
import Mui  from '../Images/mui.png'
import Post from '../Images/postman.png'
import Git from '../Images/git hub.png'
import AWS from '../Images/aws.png'
function Skill() {
  return (
    <div className="card-container">

    <div className="html-card">
      <img src={Html} alt="HTML" className="html-icon" />
      <h1 className="html-title">HTML</h1>
    </div>
  
    <div className="html-card">
      <img src={css} alt="HTML" className="html-icon" />
      <h1 className="html-title">CSS</h1>
    </div>
  

    <div className="html-card">
      <img src={Javascript} alt="HTML" className="html-icon" />
      <h1 className="html-title">JAVASCRIPT</h1>
    </div>

    <div className="html-card">
      <img src={Reactt} alt="HTML" className="html-icon" />
      <h1 className="html-title">REACT</h1>
    </div>

    <div className="html-card">
      <img src={Exp} alt="HTML" className="html-icon" />
      <h1 className="html-title">EXPRESS JS</h1>
    </div>

  </div>
  )
}

export default Skill