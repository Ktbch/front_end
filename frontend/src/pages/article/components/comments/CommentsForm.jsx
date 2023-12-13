
export const CommentsForm = (props) => {
  const { handleInput, handleCommentSubmit } = props
  return (
    <div className="flex items-center space-x-5">
      <input type="text" className="p-3 w-full border outline-none" onKeyUp={handleInput} placeholder="make a comment" />
      <button onClick={handleCommentSubmit} className="bg-blue-500 border rounded-sm p-5">Comment</button>
    </div>
  )
}
