import { NavLink } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">And Digital</NavLink>
        <NavLink to="/agile-benefits">Agile Benefits</NavLink>
        <NavLink to="/next-steps">Next Steps</NavLink>
        <NavLink to="/challenges-and-solutions">
          Challenges and Solutions
        </NavLink>
        <NavLink to="/prototype-design">Prototype Design</NavLink>
        <NavLink to="/finish">Finish</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
