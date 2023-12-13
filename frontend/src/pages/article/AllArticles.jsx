import { useEffect, useState } from "react"
import { Card } from "../../components"
import { useFetch } from "../../hooks/useFetch"




export const AllArticle = () => {
    const { data: articles, commentCount } = useFetch('')


    const handleLikes = (e) => {
        e.preventDefault()


    }


    return (
        <main className="max-w-7xl mx-auto p-5">
            <div className="text-center mx-auto pb-10">
                <h3 className="text-royalBlue text-3xl">Articles</h3>
            </div>
            <div className="flex flex-col  space-y-20 pb-10 ">

                {articles ?
                    articles.map((article) => {
                        return <Card key={article.id} id={article.id} content={article.content} description={article.description} handleLikes={handleLikes} title={article.title} owner={article.user.username} userId={article.user_id} likes={article.likes} dislikes={article.dislikes} commentCount={commentCount} />
                    }) : 'no article  yet'}


            </div>
        </main>
    )
}
