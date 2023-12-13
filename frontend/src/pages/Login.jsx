import { Form } from "../components"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../context/useAuthContext";


export const Login = () => {
    const userName = useRef(null)
    const password = useRef(null)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { addToken } = useAuth()



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
            const response = await fetch('https://api-v2-fyq5.onrender.com/api/v2/users/login', requestOptions)
            if (!response.ok) {
                throw new Error(`response error ${response.status}`)
            }


            const res = await response.json()
            console.log(res)
            const token = res.token
            if (token) {
                localStorage.setItem('token', token)
                addToken(token)
                toast.success('you are loggined')
                navigate('/')
            }


        } catch (error) {
            console.error(error);
            toast.error('invalid details')
            return


        }
    }
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    })

    return (
        <>


            <main className="max-w-7xl mx-[500px] mt-20 ">
                <Form isReg={false} registerUser={loginUser} username={userName} password={password} errorMessage={<ToastContainer />} />

            </main>
        </>
    )
}
