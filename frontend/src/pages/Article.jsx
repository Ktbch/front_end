import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect, useState } from "react"


export const Article = () => {
    const params = useParams()
    // const [article, setArticle] = useState()
    console.log(params.id)
    const { data: article } = useFetch(`/${params.id}`)


    return (

        <main>
            <div className="max-w-7xl m-auto p-5">
                <div className="flex flex-col flex-wrap  space-y-5">
                    <div className="flex flex-wrap justify-between items-start border-b p-3">
                        <h1 className="text-lg">{article.title}</h1>
                        <h1>by: {article.user ? article.user.username : 'owner'}</h1>
                    </div>
                    <div className="pt-3 pb-10 border-b">
                        <p>
                            {article.description}
                        </p>
                    </div>
                    <div className="pt-3 pb-10">
                        <p>
                            {article.content}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
