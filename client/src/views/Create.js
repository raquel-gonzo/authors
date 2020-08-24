import React from 'react'
import { Link } from '@reach/router';
import Form from '../components/Form';

const Create = () => {
    return (
        <>  
            <h3>Add an Author:</h3>
            <Form /> 
            < Link to='/'>Back</Link>
        </>
    )
}

export default Create;