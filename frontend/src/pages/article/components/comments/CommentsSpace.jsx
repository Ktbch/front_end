
export const CommentsSpace = (props) => {
    const { comment } = props
    return (
        <div className="flex p-5  rounded-sm shadow-sm ">
            <div> {comment.comments}</div>
        </div>
    )
}
