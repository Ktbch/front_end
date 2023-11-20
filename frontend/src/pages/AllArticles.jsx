import { useState } from "react"
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"




export const AllArticle = () => {
    const { data: articles } = useFetch('')
    const [likes, setLikes] = useState()
    const [dislikes, setDislikes] = useState()

    const handleLikes = (e) => {
        e.preventDefault()
    }
    return (
        <main>
            <div className="max-w-7xl m-auto p-10 space-y-10">
                {articles ?
                    articles.map((article) => {
                        return <Card key={article.id} id={article.id} content={article.content} description={article.description} handleLikes={handleLikes} title={article.title} owner={article.user.username} userId={article.user_id} likes={article.likes} dislikes={article.dislikes} />
                    }) : 'no article  yet'}

            </div>
        </main>
    )
}
