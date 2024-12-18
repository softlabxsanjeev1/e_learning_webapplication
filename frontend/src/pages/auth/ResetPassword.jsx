import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { server } from '../../main'
import toast from 'react-hot-toast';

function ResetPassword() {
    const [password, setPassword] = useState()
    const [btnLoading, setBtnLoading] = useState(false)
    const navigate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        setBtnLoading(true)
        e.preventDefault();
        try {
            const { data } = await axios.post(`${server}/api/user/resetpassword?token=${params.token}`,
                { password, }
            );
            toast.success(data.message)
            navigate("/login")
            setBtnLoading(false)
        } catch (error) {
            toast.error(error.response.data.message);
            setBtnLoading(false)
        }
    };


    return (
        <div className='auth-page'>
            <div className='auth-form'>
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='text'>Enter password</label>
                    <input
                        type='text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button disabled={btnLoading} className='common-btn'>
                        {btnLoading ? "Please wait ..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword