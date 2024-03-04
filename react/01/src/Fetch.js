import React, { useEffect, useState } from "react";

const Fetch = () => {
    const [users, setUsers] = useEffect([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {
                    users.map(user => {
                        return <li key={user.id}>{user.login}</li>

                    })}
            </ul>
        </div>
    )
}
export default Fetch;