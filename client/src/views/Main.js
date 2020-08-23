import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Form from '../components/Form';
import List from '../components/List';
import { set } from 'mongoose';

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
            {loaded && <List authors={authors}/>}
            <Link to="/authors/new">Add an Author!</Link>
        </>
    )
}