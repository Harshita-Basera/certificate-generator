import React from "react"
import classes from "./index.module.css"
import logo from "../../Assets/logo1.png"

const NavBar = () => {
    return(
        <div className={classes.header}>
            <img src={logo} alt="logo"/>
           
        </div>
       
    
    )
}

export default NavBar
