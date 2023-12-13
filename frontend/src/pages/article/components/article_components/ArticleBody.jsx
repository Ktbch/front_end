
export const ArticleBody = (props) => {
    const { article } = props
    return (
        <>
            <div className="flex flex-wrap justify-between items-start border-b p-3">
                <h1 className="text-lg">{article.title}</h1>
                <h1>by: {article.user ? article.user.username : 'owner'}</h1>
            </div>
            <div className="pt-3 pb-10 border-b">
                <p>
                    {article.description}
                </p>
            </div>
            <div className="pt-3 pb-10 border-b">
                <p>
                    {article.content}
                </p>
            </div>
        </>
    )
}
