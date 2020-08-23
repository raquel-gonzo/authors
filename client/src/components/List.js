import React from 'react';


const List = (props) => {
    return (
        <div>
            {props.authors.map((author, idx) => {
                return <p key={idx}>{author.lastName}, {author.firstName} </p>
            })}
        </div>
    )
}

export default List;