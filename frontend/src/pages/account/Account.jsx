import React from 'react'
import './account.css'
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
// import { UserData } from '../../context/UserContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Account({ user, setUser, setIsAuth }) {
    // const [setUser] = UserData()
    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.clear()
        setUser([])
        setIsAuth(false)
        toast.success("User Logged Out Succesfully")
    }

    return (
        <div>
            {user && (
                <div className='profile'>
                    <h2>My Profile</h2>
                    <div className='profile-info'>
                        <p>
                            <strong>Name- {user.name}</strong>
                        </p>
                        <p>
                            <strong>Email - {user.email}</strong>
                        </p>
                        <button
                            onClick={() => navigate(`/${user._id}/dashboard`)}
                            className='common-btn'>
                            <MdDashboard size={24} style={{ marginRight: 10 }} />
                            Dashboard
                        </button>
                        {user.role === "admin" && (
                            <button
                                style={{ marginLeft: 15 }}
                                onClick={() => navigate(`/admin/dashboard`)}
                                className='common-btn'>
                                <MdDashboard size={24} style={{ marginRight: 10 }} />
                                Admin Dashboard
                            </button>
                        )}
                        <button onClick={logoutHandler} className='common-btn'
                            style={{ backgroundColor: "red", color: "white", marginLeft: 30 }}>
                            <IoMdLogOut size={24} style={{ marginRight: 10 }} />
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Account