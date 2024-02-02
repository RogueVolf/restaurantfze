import React, { useState } from 'react';
import axios from 'axios';

const AddWaiter = () => {

    const [waiterData, setWaiterData] = useState({
        waiterName: '',
        waiterNumber: '',
        address: '',
        dateOfJoining: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setWaiterData({
          ...waiterData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            console.log(waiterData.dateOfJoining);
          const res = await axios.post('http://localhost:9999/add_waiter_details', waiterData);
          if(res.data){
            alert('Waiter added successfully!');
          }
          
          setWaiterData({
            waiterName: '',
            waiterNumber: '',
            address: '',
            dateOfJoining: ''
          });
        } catch (error) {
          console.error('Error adding waiter:', error);
          alert('Error adding waiter. Please try again.');
        }
      };

    return (
        <div>
         <h2>Add Waiter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Waiter Name:
          <input type="text" name="waiterName" value={waiterData.waiterName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Waiter PhoneNumber:
          <input type="text" name="waiterNumber" value={waiterData.waiterNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={waiterData.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Joining:
          <input type="date" name="dateOfJoining" value={waiterData.dateOfJoining} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Waiter</button>
      </form>
    </div>
  );
};

export default AddWaiter;