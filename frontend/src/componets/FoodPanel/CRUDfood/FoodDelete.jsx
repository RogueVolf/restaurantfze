// FoodDeleteForm.js
import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';

const FoodDelete = () => {
  const { foodid } = useParams();


  const handleDelete = async () => {
    try {
      // Make a DELETE request to /delete_table_data/:table_no
      await axios.delete(`http://localhost:9999/delete_food_data/${foodid}`);
      
      alert('Food item deleted successfully deleted!');
      // Optionally, you can add logic to handle success or navigate to another page
        window.location.href = "/" // Redirect to the table list after deletion
    } catch (error) {
      console.error('Error deleting table:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Delete Food </h1>
      <p>Are you sure you want to delete this food?</p>
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        Delete Food
      </button>
    </div>
  );
};

export default FoodDelete;