import React from "react"
import AddComment from "./AddComment"
import CommentList from "./CommentList"


// GET
class CommentArea extends React.Component {
    
    state = {
        commentsArray: []
    }

    fetchComments = async () => {
        const bookId = this.props.bookId
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+ bookId , {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MzAwMTAwODMsImV4cCI6MTYzMTIxOTY4M30.IYE6DU5jYldk8SdSocMrRqffiucDB0xBM0HT5k_OU3w"
                }
                })
            if(response.ok){
                const data = await response.json()
                this.setState({commentsArray: data})
            } else {
                console.log('OOOPSIE DAISY')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidMount() {
        await this.fetchComments()
    }

    
    
    render(){
        return(
            <>
                <CommentList comments={this.state.commentsArray}>
                    {/* {
                        state.comments
                    } */}
                </CommentList>
                <AddComment>

                </AddComment>
            </>
        )

    }

}

export default CommentArea


// CommentArea  fetch and store the comments for the selected book, contains: 
// - CommentList  holds a list of comments about the selected book
// - AddComment  contains a form for adding a text comment and a rating  allow the user to POST