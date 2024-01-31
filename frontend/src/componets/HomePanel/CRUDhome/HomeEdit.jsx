import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const HomeEdit = () => {
    const { homeno } = useParams();
    const fr = {
        home_name:'',
        home_id:'',
        home_color:'',
        home_url:'',
        home_icon:'',
    }

    const [formData, setFormData] = useState(fr);

    useEffect(() => {
        const fetchTableData = async () => {
            try {
                const response = await axios.get(`http://localhost:9999/single_home_page/${homeno}`);
                console.log("from server hitback",response.data[0]);
                setFormData(response.data[0]);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        };

        // Fetch table data when the component mounts
        fetchTableData();
    }, [homeno]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            // Make a PUT request to /update_table_data/:table_no
            await axios.put(`http://localhost:9999/update_home_page_data/${homeno}`, formData);
            alert('Home item updated successfully deleted!');

            window.location.href = "/"
        } catch (error) {
            console.error('Error updating table data:', error.message);
        }
    };

    return (
        <div>
            <h1>Edit table for {homeno}</h1>
            <form onSubmit={handleSubmit}>
                
                {/* Other input fields */}
                
                <div className="mb-3">
                    <label htmlFor="tableCapacity" className="form-label">Home Name:</label>
                    <input type="text" className="form-control" id="table_capacity" name="home_name" value={formData.home_name} onChange={handleChange} />
                </div>
   
                <button type="submit" className="btn btn-primary">Update Table</button>
            </form>
        </div>
    );
}

export default HomeEdit;