import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/authProviders';

const header = () => {
    const {user, logOut} = useContext(authContext);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            console.log('signOut successfully')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Authintification</a>
                <Link className="btn btn-ghost normal-case text-xl"  to="/">Home</Link>
                {
                    user && <Link className="btn btn-ghost normal-case text-xl"  to="/profile">Profile</Link>
                }
                <Link className="btn btn-ghost normal-case text-xl"  to="/orders">Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                user ? <> <span>{user.email}</span> 
                <button onClick={handleLogOut} className="btn btn-xs ms-3">Signout</button></> :
                <Link to="/login">Please Login</Link>
                }
            </div>
        </div>
    );
};

export default header;