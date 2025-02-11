import React from 'react'
import'./Skill.css'
import Html from '../Images/htmll-removebg-preview.png'
import css from '../Images/css-removebg-preview.png'
import Javascript from '../Images/javascript-removebg-preview.png'
import Reactt from '../Images/react-removebg-preview.png'
import Exp from '../Images/exp-removebg-preview.png'
import node from '../Images/node-removebg-preview (1).png'
import Mongo from '../Images/mongodb-removebg-preview.png'
import fire from '../Images/firebase-removebg-preview.png'
import Reactb from '../Images/download-removebg-preview.png'
import Mui  from '../Images/mui-removebg-preview.png'
import Post from '../Images/postman-removebg-preview.png'
import Git from '../Images/git_hub-removebg-preview.png'
import AWS from '../Images/aws-removebg-preview.png'
function Skill() {
  return (
    <div className="card-container">

    <div className="html-card">
      <img src={Html} alt="HTML" className="html-icon" />
      <h1 className="html-title">HTML</h1>
    </div>
  
    <div className="html-card">
      <img src={css} alt="CSS" className="html-icon" />
      <h1 className="html-title">CSS</h1>
    </div>
  

    <div className="html-card">
      <img src={Javascript} alt="JAVASCRIPT" className="html-icon" />
      <h1 className="html-title">JAVASCRIPT</h1>
    </div>

    <div className="html-card">
      <img src={Reactt} alt="REACT JS" className="html-icon" />
      <h1 className="html-title">REACT</h1>
    </div>

    <div className="html-card">
      <img src={Exp} alt="EXPRESS JS" className="html-iconexp" />
      <h1 className="html-title">EXPRESS JS</h1>
    </div>
    <div className="html-card">
      <img src={node} alt="NODE JS" className="html-icon" />
      <h1 className="html-title">NODE JS</h1>
    </div>
    <div className="html-card">
      <img src={Mongo} alt="MONGODB" className="html-icon" />
      <h1 className="html-title">NODE JS</h1>
    </div>
    <div className="html-card">
      <img src={fire} alt="FIRE BASE" className="html-icon" />
      <h1 className="html-title">FIRE BASE</h1>
    </div>
    <div className="html-card">
      <img src={Reactb} alt="REACT BOOTSTRAP" className="html-icon" />
      <h1 className="html-title">REACT BOOTSTRAP</h1>
    </div>
    <div className="html-card">
      <img src={Mui} alt="MUI" className="html-icon" />
      <h1 className="html-title">MUI</h1>
    </div>
    <div className="html-card">
      <img src={Post} alt="POST MAN" className="html-icon" />
      <h1 className="html-title">POST MAN</h1>
    </div>
    <div className="html-card">
      <img src={Git} alt="GIT HUB" className="html-icon" />
      <h1 className="html-title">GIT HUB</h1>
    </div>
    <div className="html-card">
      <img src={AWS} alt="AWS" className="html-icon" />
      <h1 className="html-title">AWS</h1>
    </div>



  </div>
  )
}

export default Skill