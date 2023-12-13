import { useEffect, useState } from 'react';
import { HandThumbsUp, HandThumbsUpFill } from 'react-bootstrap-icons';

export const ArticleLikeBtn = (props) => {
    const [likeCounts, setLikeCount] = useState()
    const [like, setLike] = useState()
    const { postId, token } = props

    console.log(like)
    const handleLikes = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token.toString()}`
            },
        }
        if (!like) {
            try {
                const response = await fetch(`http://https://api-v2-fyq5.onrender.com/api/v2/likes/${postId}`, requestOptions)
                if (!response.ok) {
                    throw new Error(response.status)
                }
                const res = await response.json()
                setLike(!like)
                console.log(res)
            } catch (error) {
                throw new Error(`couldn't like`, error.message)
            }
        }

        if (like) {
            try {
                const response = await fetch(`http://localhost:8080/api/v2/likes/delete/${postId}`, requestOptions)
                if (!response.ok) {
                    throw new Error(response.status)
                }
                const res = await response.json()
                setLike(!like)
                console.log(res)
            } catch (error) {
                throw new Error(` like`, error.message)
            }
        }
    }
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token.toString()}`
        },
    }
    const fetchLikeCount = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/v2/likes/${postId}`, requestOptions)
            if (!response.ok) {
                throw new Error(response.status)
            }
            const res = await response.json()
            setLikeCount(res.likeCount)
            setLike(res.isLiked)
        } catch (error) {
            throw new Error('could not fetch updated count', error)
        }
    }
    useEffect(() => {
        fetchLikeCount()
    }, [like, fetchLikeCount])
    return (
        <div className="flex  items-center space-x-5">
            <button onClick={handleLikes}>{like ? <HandThumbsUpFill /> : <HandThumbsUp />}</button>
            <div>{likeCounts}</div>
        </div>
    )
}
