import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const Card = (props) => {
    const { id, description, handleLikes, title, owner, userId, likes, dislikes } = props

    let token = localStorage.getItem('token')

    // useEffect(() => {
    //     token = localStorage.getItem('token')

    // }, [token])

    return (
        <div className="flex flex-col w-full space-y-3 bg-gray-300 from-gray-100 rounded-sm p-3 shadow-md">
            <Link to={`/myBlog/article/${id}`}>
                <h3 className="text-bold text-slate-400">Creator: <Link to={`/myBlog/profile/${userId}`}>{owner}</Link></h3>
                <div className="">
                    <h3 className="">Title: {title}</h3>
                </div>
                <p>Description: {description}</p>
                <div className="flex iitems-center space-x-4 flex-row">
                    {
                        token ?
                            <>
                                <button onClick={handleLikes}>Likes: {likes}</button>
                                <button>dislikes: {dislikes}</button>
                                <button>comments</button>
                            </>
                            : ''
                    }

                </div>
            </Link>
        </div>
    )
}