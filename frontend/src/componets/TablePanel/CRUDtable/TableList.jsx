// src/TableList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TableList = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get('http://localhost:9999/table_data');
        setTables(response.data);
      } catch (error) {
        console.error('Error fetching tables:', error);
      }
    };

    fetchTables();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Select the Table to Edit</h1>
      <h4>Indoor Tables</h4>
      <ul>
        {
            tables.filter(x => x.table_type === 'indoor').map(table => (
                <li key={table.tableNo}>
                  <Link to={`/edit-table/${table.table_no}`}>{`Table ${table.table_no}`}</Link>
                </li>
              ))
        }
      </ul>
      <h4>OutDoor Tables</h4>
      <ul>
        {tables.filter(x => x.table_type === 'outdoor').map(table => (
          <li key={table.tableNo}>
            <Link to={`/edit-table/${table.table_no}`}>{`Table ${table.table_no}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;