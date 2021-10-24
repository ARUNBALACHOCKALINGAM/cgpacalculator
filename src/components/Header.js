import React from "react";

import "./Header.css";
import Link from "@material-ui/core/Link";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

function Header() {
  return (
    <div className="header">
      <div className="nav">
        <Link href="#" style={{ color: "white", padding: "10px" }}>
          CGPA CALCULATOR
        </Link>
      </div>
      <div className="links">
        <Link href="#" style={{ color: "white", padding: "20px" }}>
          GPA
        </Link>
        <Link href="#" style={{ color: "white", padding: "20px" }}>
          CGPA
        </Link>
        <Link href="#" style={{ color: "white", padding: "20px" }}>
          RETAIN
        </Link>
      </div>
      <div className="toggle">
        <div className="toggle-button"></div>
      </div>
    </div>
  );
}

export default Header;
