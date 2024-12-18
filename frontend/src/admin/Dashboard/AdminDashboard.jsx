/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Utils/Layout'
import { server } from "../../main"
import axios from 'axios'
import './adminDashboard.css'


const AdminDashboard = ({ user }) => {
    const navigate = useNavigate();

    if (user && user.role !== "admin") return navigate("/")

    const [stats, setStats] = useState([])

    async function fetchStats() {
        try {
            const { data } = await axios.get(`${server}/api/admin/stats`, {
                headers: {
                    token: localStorage.getItem("token"),
                },
            });

            setStats(data.stats);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchStats()
    }, [])

    return (
        <div>
            <Layout>
                <div className='main-content'>
                    <div className='box'>
                        <p>Total Courses</p>
                        <p>{stats.totalCourse}</p>
                    </div>
                    <div className='box'>
                        <p>Total Lectures</p>
                        <p>{stats.totalLectures}</p>
                    </div>
                    <div className='box'>
                        <p>Total Users</p>
                        <p>{stats.totalUsers}</p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AdminDashboard