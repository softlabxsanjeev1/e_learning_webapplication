import React, { useEffect, useState } from 'react'
import './courseDescription.css'
import { useNavigate, useParams } from "react-router-dom"
import { CourseData } from '../../context/CourseContext';
import { server } from '../../main';
import axios from 'axios';
import toast from 'react-hot-toast';
import { UserData } from '../../context/UserContext';
import Loading from '../../components/loading/Loading';

function CourseDescription({ user }) {
    const params = useParams();
    // console.log(params.id)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { fetchUser } = UserData();

    const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

    useEffect(() => {
        fetchCourse(params.id);
    }, []);


    const checkouthandler = async () => {
        const token = localStorage.getItem("token");
        setLoading(true);

        const { data: { order },
        } = await axios.post(`${server}/api/user/course/checkout/${params.id}`,
            {},
            {
                headers: {
                    token,
                }
            });

        const options = {
            key: "rzp_test_f0OZHGJrgtUxhn",
            amount: order.id,
            currency: "INR",
            name: "Tech Courses",
            description: "Learn with us",
            order_id: order.id,

            handler: async function (response) {
                const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

                try {
                    const { data } = await axios.post(`${server}/api/user/verification/${params.id}`,
                        {
                            razorpay_order_id,
                            razorpay_payment_id,
                            razorpay_signature,
                        },
                        {
                            headers: {
                                token,
                            },
                        }
                    );

                    await fetchUser();
                    await fetchCourses();
                    await fetchMyCourse()
                    toast.success(data.message);
                    setLoading(false);
                    navigate(`/payment-success/${razorpay_payment_id}`)
                } catch (error) {
                    toast.error(error.response.data.message);
                    setLoading(false);
                }
            },
            theme: {
                color: "#0895ff",
            },
        };
        const rzpy = new window.Razorpay(options);
        rzpy.open()
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {course && (
                        <div className="course-description">
                            <div className="course-header">
                                <img
                                    src={`${server}/${course.image}`}
                                    alt=""
                                    className="course-image"
                                />
                                <div className='course-info'>
                                    <h2>{course.title}</h2>
                                    <p>Instructor: {course.createdBy}</p>
                                    <p>Duration: {course.duration} weeks</p>
                                </div>
                            </div>
                            <p>{course.description}</p>
                            <p>Get started with course At &#8377;{course.price}</p>
                            {user && user.subscription.includes(course._id) ? (
                                <button
                                    onClick={() => navigate(`/course/study/${course._id}`)}
                                    className="common-btn"
                                >
                                    Study
                                </button>
                            ) : (
                                <button onClick={checkouthandler} className="common-btn">Buy Now</button>
                            )}
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default CourseDescription