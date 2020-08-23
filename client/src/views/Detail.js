import React, {useEffect, useState} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Detail = (props) => {

    const [author, setAuthor] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + props.id)
            .then( res => {
                setAuthor({...res.data.author});
            })
    }, [props.id])

    return(
        <div>
            <p>First Name: {author.firstName}</p>
            <p>Last Name: {author.lastName}</p>
            <br/>
            < Link to='/'>Back</Link>
        </div>

    )
}

export default Detail;