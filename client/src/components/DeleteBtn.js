import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                props.removeFromDom(authorId)
            })
    }
    return (
        <button onClick={() => deleteAuthor(props.id)}>
            Delete
        </button>
    )
}

export default DeleteButton;