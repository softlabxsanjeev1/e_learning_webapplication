import React, { useState } from 'react'
import "./auth.css"
import { UserData } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";


const Verify = () => {
    const [otp, setOtp] = useState("");
    const { btnLoading, verifyOtp } = UserData()
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    function onChange(value) {
        console.log("Captcha value:", value);
        setShow(true)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await verifyOtp(Number(otp), navigate)

    }

    return (
        <div className="auth-page">
            <div className="auth-form">
                <h2>Verify Account</h2>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Enter OTP</label>
                    <input
                        type="number"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                    />,
                    {show && (
                        <button disabled={btnLoading} type='submit' className='common-btn'>
                            {btnLoading ? "Please wait..." : "Verify"}
                        </button>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Verify