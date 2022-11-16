import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#D0F0FB",
  textDecoration: "none",
  color: "black",
  borderRadius: "5px",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#A1E0EB",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/recipes"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#A1E0EB",
        }}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/gallery"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#A1E0EB",
        }}
      >
        Gallery
      </NavLink>
    </div>
  );
}

export default NavBar;

