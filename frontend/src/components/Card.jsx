import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuthContext"

import { ArticleCommentBtn, ArticleLikeBtn } from "../pages/article/components/article_components";


export const Card = (props) => {
    const { id, description, handleLikes, title, owner, userId, likes, dislikes, } = props
    const [commentCount, setCommentCount] = useState('')
    const { accessToken } = useAuth()

    const getCommentCount = async () => {
        const response = await fetch(`http://localhost:8080/api/v2/comments/count/${id}`)
        const res = await response.json()
        setCommentCount(res.commentCount)

    }

    useEffect(() => {
        getCommentCount()
    }, [commentCount, getCommentCount])
    return (
        <>

            <Link to={`/myBlog/article/${id}`}>

                <div className="flex flex-col items-start bg-lightGray rounded-sm space-y-4 px-2 p-2 w-fulls">
                    <div>
                        <h3 className="text-wider text-royalBlue">{title}</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                        <h5 className="text-darkCharcoal">Creator: <Link to={`/myBlog/profile/${userId}`}>{owner}</Link></h5>
                        <button className="bg-royalBlue text-lightGray p-1 border-darkCharcoal text-xs">Follow</button>
                    </div>
                    <div className="">
                        <p className="">{description}</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        {
                            accessToken ?
                                <>
                                    <ArticleLikeBtn postId={id} token={accessToken} />
                                    <div className="flex  item-center space-x-5">
                                        <div>{likes}</div>
                                    </div>

                                    <ArticleCommentBtn id=
                                        {id} commentCount={commentCount} />
                                </>
                                : ''
                        }

                    </div>

                </div>
            </Link>

        </>
    )
}