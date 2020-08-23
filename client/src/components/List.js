import React from 'react';
import './tableStyles.css';

const List = (props) => {
    const renderTable = () => {
        return (props.authors.map((author, idx) => {
            const { firstName, lastName } = author
                return (
                    <tr key={idx}>
                        <td>{firstName} {lastName}</td>
                        <td>
                            <button>Update</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                )
        }))
    }
    return (
        <div>
            <h4 id="title">My list of favorite Authors: </h4> 
            <table id="authors">
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
        </div>
    )
}

export default List;


// {props.authors.map((author, idx) => {
//     return <p key={idx}>{author.lastName}, {author.firstName}</p>
// })}