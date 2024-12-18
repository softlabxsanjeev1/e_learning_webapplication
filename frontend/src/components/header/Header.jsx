import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = ({ isAuth, user }) => {
    return (
        <header>
            <div className="logo">Tech-Courses</div>

            <div className="link">
                <Link to={"/"}>Home</Link>
                <Link to={"/courses"}>Courses</Link>
                <Link to={"/about"}>About</Link>
                {isAuth ? (
                    <Link to={"/account"}>{` Hi 🎉  ${user.name}`}</Link>
                ) : (
                    <Link to={"/login"}>Login</Link>
                )
                }
            </div>
        </header>
    )
}

export default Header