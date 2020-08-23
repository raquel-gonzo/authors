import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then( res => {
                console.log(res.data.authors);
                setAuthors(res.data.authors);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <h4>Create a list of your favorite Authors: </h4>
            <Form />
        </>
    )
}