import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        exact
        to="/"
        style={styles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/movies"
        style={styles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        exact
        to="directors"
        style={styles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Directors
      </NavLink>
      <NavLink
        exact
        to="/actors"
        style={styles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;