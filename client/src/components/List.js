import React from 'react';
import './tableStyles.css';
import {navigate, Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteBtn';

const List = (props) => {
    const btnUpdate = (id) => {
        navigate('/author/update/' + id)
    }

    const { removeFromDom } = props;

    const renderTable = () => {
        return (props.authors.map((author, idx) => {
            const { firstName, lastName } = author
                return (
                    <tr key={idx}>
                        <td>{firstName} {lastName}</td>
                        <td>
                            <button onClick={() => btnUpdate(author._id)} id="edit-btn">Edit</button>
                            <DeleteButton removeFromDom={removeFromDom} id={author._id}/> 
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
