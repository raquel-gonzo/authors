import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const Update = (props) => {
    const {id} = props;
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data)
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            firstName,
            lastName
        })
            .then(res => console.log(res));
    }

    return (
        <div>
            <h3>Update an Author</h3>
                <p>
                    <label>First Name</label><br />
                    <input type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" 
                    name="lastName"
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <button onSubmit={updateAuthor}>Update</button>
            < Link to='/'>Back</Link>   
        </div>
    )

}

export default Update;