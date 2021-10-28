import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';

function Header() {

  function toggleMode(){
     
  }

  return (
    <div className="header">
    
      <div className="nav">
       <Link to="/" style={{ textDecoration:"none", color: "white", padding: "10px" }}>
          CGPA CALCULATOR
        </Link>
      </div>
      <div className="links">
        <Link to="/gpa" style={{textDecoration:"none", color: "white", padding: "20px" }}>
          GPA
        </Link>
        <Link to="cgpa" style={{textDecoration:"none", color: "white", padding: "20px" }}>
          CGPA
        </Link>
        <Link to="/retain" style={{textDecoration:"none", color: "white", padding: "20px" }}>
          RETAIN
        </Link>    
        </div>
      
       <div className="toggle">
        <div onClick="toggleMode" className="toggle-button"></div>
      </div>
    </div>
  );
}

export default Header;