import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import List from '../components/List';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

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
            {loaded && <List authors={authors} removeFromDom={removeFromDom}/>}
            <Link to="/authors/new">Add an Author!</Link>
        </>
    )
}