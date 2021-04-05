import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/approach" exact>
                  My Approach
                </NavLink>
              </li>

              <li>
                <NavLink to="/about-us" exact>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact" exact>
                    Get in touch
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Where am I</li>
                <li>Toronto</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>226 510 2870</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
