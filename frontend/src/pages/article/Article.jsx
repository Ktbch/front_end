import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useTitle } from "../../hooks/useTitle";
import { CommentsForm, CommentsSpace } from "./components/comments";
import { ArticleBody } from "./components/article_components";


export const Article = () => {
    const params = useParams()
    const { data: article } = useFetch(`/${params.id}`)
    const { data: comments, error, fetchData } = useFetch(`${params.id}`, true, 'comments',) // fetch all comments
    useTitle(article.title)

    const [commentInput, setCommentInput] = useState()
    const token = localStorage.getItem('token')

    const handleInput = (e) => {
        setCommentInput(e.target.value)
    }


    const handleCommentSubmit = async (e) => {
        e.preventDefault()

        if (!commentInput) {
            toast.error('fill in the field')
            return
        }
        const request = {
            comments: commentInput,
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token.toString()}`
            },
            body: JSON.stringify(request)
        }
        try {
            const response = await fetch(`http://localhost:8080/api/v2/comments/${params.id}`, requestOptions)

            if (response.ok) {
                // After submitting a new comment, refetch comments to update the UI
                setCommentInput('');
                fetchData(`${params.id}`, true, 'comments');
            } else {
                throw new Error('Could not create comment');
            }
        } catch (error) {
            console.error('Error creating comment:', error);
        }



    }


    return (

        <main>
            <div className="max-w-7xl m-auto p-5">
                <div className="flex flex-col flex-wrap  space-y-5">
                    <ArticleBody article={article} />
                    <div className="p-5">comments</div>
                    {comments ? comments.map((comment) => {
                        return (
                            <CommentsSpace key={comment.id} comment={comment} />
                        )
                    }) : ''}
                    <CommentsForm handleInput={handleInput} handleCommentSubmit={handleCommentSubmit} />
                </div>
            </div>
        </main>
    )
}
