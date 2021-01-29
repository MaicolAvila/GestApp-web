import React from "react";
import { Link } from "react-router-dom";

function Panel(props) {
  return (
    <div className="panel" id="panel">
      <div className="panel-box">
        <ul>
          <li>
            Gest<span>APP</span>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Login</Link>
          </li>
          <li>
            {" "}
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Panel;
