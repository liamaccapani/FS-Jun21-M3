import AddComment from "./AddComment"
import CommentList from "./CommentList"


// GET
const CommentArea = () => {
    return(
        <>
            {/* <CommentList></CommentList> */}
            <AddComment></AddComment>
        </>
    )

}

export default CommentArea


// CommentArea  fetch and store the comments for the selected book, contains: 
// - CommentList  holds a list of comments about the selected book
// - AddComment  contains a form for adding a text comment and a rating  allow the user to POST