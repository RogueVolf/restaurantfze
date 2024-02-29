import React from 'react';
import { NavLink } from 'react-router-dom';
import './BillPanel.css';

const BillPanel = () => {
    return (
        <div>
            <h1>Bill panel</h1>
            <NavLink to='/admin/bill-edit-panel'>Edit bill Panel</NavLink>
                <br></br>
                <NavLink to={'/admin/recipiet-edit-panel'}>Edit Reciepiet Panel</NavLink>
                <br></br>
        </div>
    );
}

export default BillPanel;
