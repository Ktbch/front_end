import { ChatDots } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'

export const ArticleCommentBtn = (props) => {
    const { id, commentCount } = props

    return (
        <div className="flex  items-center space-x-3">
            <button className=""><Link to={`/myBlog/article/${id}`}><ChatDots /> </Link></button>
            <div>{commentCount}</div>
        </div>
    )
}
