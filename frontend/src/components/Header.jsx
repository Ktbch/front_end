import { useEffect, useState } from 'react';
import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Header = () => {
    const active = 'text-blue-400'
    const [username, setUsername] = useState('')
    const [id, setId] = useState('')
    const inactive = 'text-slate-400'
    let token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            try {
                setId(localStorage.getItem('id'))
                setUsername(localStorage.getItem('username'))
                toast.success(`welcome ${username}`)


            } catch (error) {
                throw error
            }
        }
    }, [token])

    const handleClick = () => {
        token = ''
        localStorage.clear('username')
        localStorage.clear('id')
        localStorage.clear("token")
        setUsername("")
        setId("")
        toast.info('logging out')
        setTimeout(() => {
            navigate('/')
            toast.success('logged out successful')
        }, 5000)
    }

    return (
        <div className="max-w-7xl m-auto p-3 shadow-sm dark:bg-slate-800">
            <div className="flex justify-between flex-wrap items-center">
                <div className="flex justify-between  items-center">
                    <img src={logo} alt='The Blog' />
                    <Link to={'/'}><h2 className='text-slate-600 dark:text-white '>TheBlog..</h2></Link>
                </div>
                <div>
                    <ul className='flex space-x-10 items-center'>
                        <li><NavLink to={'/'} className={(navData) => navData.isActive ? active : inactive}>Posts</NavLink></li>
                        <li>{token ? <button className='text-slate-400' onClick={handleClick}>Log out</button> : <NavLink to={'/myBlog/login'} className={(navData) => navData.isActive ? active : inactive}>Login</NavLink>}</li>
                        <li><NavLink to={token ? '/myBlog/create-article' : '/myBlog/register'} className={(navData) => navData.isActive ? active : inactive}>{token ? 'create an article' : 'register'}</NavLink></li>
                        <li><NavLink to={id ? `/myBlog/profile/${id}` : ''} className={(navData) => navData.isActive ? active : inactive}>{username ? username : ''}</NavLink></li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
