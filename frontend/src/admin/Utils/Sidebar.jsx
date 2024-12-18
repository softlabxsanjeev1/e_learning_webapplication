import React from 'react'
import './common.css'
import { Link } from 'react-router-dom'
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaAddressBook, FaUserAlt } from "react-icons/fa";

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to={"/admin/dashboard"}>
                        <div className='icon'>
                            <AiFillHome />
                        </div>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/admin/course"}>
                        <div className='icon'>
                            <FaAddressBook />
                        </div>
                        <span>Courses</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/admin/users"}>
                        <div className='icon'>
                            <FaUserAlt />
                        </div>
                        <span>Users</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/account"}>
                        <div className='icon'>
                            <AiOutlineLogout />
                        </div>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar