import React from "react";
import { NavLink } from "react-router-dom"  
// import './NavBar.css'

function NavBar({onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    const linkStyles = {
        // textAlignVertical: "center",
        // display:"inline-block",
        flex: "1",
        flexDirection: "row",
        justifyContent: "center",
        // width: "75px",
        // height: "75px",
        padding: "12px",
        margin: "30px 10px",
        background: "green",
        textDecoration: "none",
        color: "white",
        fontFamily: 'Segoe UI'
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
            onClick={onLogout, handleLogout}
            >
                Log Out
            </NavLink>
        </div>
    )
}

export default NavBar;