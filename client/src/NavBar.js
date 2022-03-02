import React from "react";
import { NavLink } from "react-router-dom"  
import './NavBar.css'

function NavBar({onLogout, user}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout(''));
      }

      function fullLogout() {
          handleLogout();
      }

    const linkStyles = {
        // textAlignVertical: "center",
        // display:"inline-block",
        flex: "1",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius:"5%",
        // width: "75px",
        // height: "75px",
        padding: "12px",
        margin: "30px 20px",
        background: "green",
        textDecoration: "none",
        color: "white",
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        fontSize: 20
    }
    return (
        <div className="navbar">
            <NavLink
            to="/"
            exact
            style={linkStyles}
            >
                Home
            </NavLink>
            <NavLink
            to="/about"
            exact
            style={linkStyles}
        
            >
                About
            </NavLink>
            <NavLink
            to="/upload-audio"
            exact
            style={linkStyles}
            >
                Upload Audio
            </NavLink>
            <NavLink
            to="/"
            exact
            style={linkStyles}
            onClick={fullLogout}
            >
                Log Out
            </NavLink>
        
        </div>
    )
}

export default NavBar;