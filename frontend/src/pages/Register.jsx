import { Form } from "../components"
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Register = () => {
    const firstName = useRef(null)
    const lastName = useRef(null)
    const userName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/')
        }
    })

    const emptyInput = (input) => {
        input.current.value = ""
    }
    const registerUser = async (e) => {
        e.preventDefault()
        if (!firstName.current.value || !lastName.current.value || !userName.current.value || !email.current.value || !password.current.value) {
            toast.error('fill in the required fields')
            return
        }
        const request = {
            firstname: firstName.current.value,
            lastname: lastName.current.value,
            username: userName.current.value,
            email: email.current.value,
            password: password.current.value,
        }
        console.log(request.firstname)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }
        try {
            const response = await fetch('http://localhost:8080/api/v2/users/register', requestOptions)
            if (response.ok) {
                const res = await response.json()
                console.log(res)
                if (response.status === 200) {
                    toast.success('Account created successfully')
                    navigate('/myBlog/login')
                }
            } else {
                if (response.status === 403) {
                    toast.warning('user already exists')
                } else if (response.status === 404) {
                    toast.error('page not found')
                }
            }

        } catch (error) {
            console.log(error.message)
        }
        emptyInput(firstName)
        emptyInput(lastName)
        emptyInput(userName)
        emptyInput(email)
        emptyInput(password)
    }
    return (
        <>
            <main className="max-w-7xl max-h-2xl mx-[500px] px-10 pt-10">
                <Form isReg={true} registerUser={registerUser} firstname={firstName} lastname={lastName} username={userName} email={email} password={password} errorMessage={<ToastContainer />} />
            </main>
        </>
    )
}
