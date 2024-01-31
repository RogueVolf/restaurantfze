import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePanel = () => {
    return (
        <div>
            <h1>Home Panel</h1>
            <div>
                <NavLink to='/edit-home'>Edit Home</NavLink>
                <br></br>
                <NavLink to='/delete-home'>Delete Home</NavLink>
                <br></br>
                
             
            </div>
        </div>
    );
}

export default HomePanel;