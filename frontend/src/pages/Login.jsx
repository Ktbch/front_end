import { Form } from "../components"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const userName = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/')

        }
    })

    const loginUser = async (e) => {

        e.preventDefault()
        if (!userName.current.value || !password.current.value) {
            toast.error('fill in the required fields')
            return
        }

        const request = {
            username: userName.current.value,
            password: password.current.value,
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }

        try {
            const response = await fetch('http://localhost:8080/api/v2/users/login', requestOptions)
            if (response.ok) {
                const res = await response.json()
                const token = res.token
                if (token) {
                    toast.success('you are loggined')
                    await localStorage.setItem('username', res.user.username)
                    await localStorage.setItem('token', token)
                    await localStorage.setItem('id', res.user.id)
                    navigate('/')

                } else {
                    toast.error('invalid details')
                }
            } else {
                if (response.status === 401) {
                    toast.error('invalid details')
                }
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while logging in');
        }
    }

    return (
        <>


            <main className="max-w-7xl mx-[500px] mt-20 ">
                <Form isReg={false} registerUser={loginUser} username={userName} password={password} errorMessage={<ToastContainer />} />

            </main>
        </>
    )
}
