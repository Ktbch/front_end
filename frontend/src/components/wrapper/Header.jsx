import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/useAuthContext';
import Hero from './Hero';

export const Header = () => {
    const active = 'text-blue-400'

    const inactive = 'text-slate-400'
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    
    const { accessToken, username, id, logOut, addToken } = useAuth()
    useEffect(() => {
        if (token) {
            addToken(token)
        }
    }, [token])

    const handleClick = () => {
        toast.info('logging out')
        logOut()
        setTimeout(() => {
            navigate('/')
            toast.success('logged out successful')
        }, 5000)
    }

    return (
        <>
            <header className="bg-lightGray">
                <navbar className="bg-royalBlue  mx-auto flex justify-between items-center border-darkCharcoal border-b p-5">
                    <div className="flex justify-between  items-center">
                        {/* <img src={logo} alt='The Blog' /> */}
                        <Link to={'/'}><h2 className='text-slate-600 dark:text-white '>TheBlog..</h2></Link>
                    </div>
                    <ul className="flex space-x-10 items-center flex-wrap">
                        <li><NavLink to={'/'} className={(navData) => navData.isActive ? active : inactive}>Article</NavLink></li>
                        <li>{accessToken ? <button className='text-slate-400' onClick={handleClick}>Log out</button> : <NavLink to={'/myBlog/login'} className={(navData) => navData.isActive ? active : inactive}>Login</NavLink>}</li>
                        <li><NavLink to={accessToken ? '/myBlog/create-article' : '/myBlog/register'} className={(navData) => navData.isActive ? active : inactive}>{accessToken ? 'create an article' : 'register'}</NavLink></li>
                        <li><NavLink to={id ? `/myBlog/profile/${id}` : ''} className={(navData) => navData.isActive ? active : inactive}>{username ? username : ''}</NavLink></li>
                    </ul>
                </navbar>
                {<Hero />}
                <ToastContainer />
            </header>

        </>
    )
}
