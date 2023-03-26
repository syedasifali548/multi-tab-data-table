import React, { useState } from 'react';

const DataTable = () => {
  const [activeTab, setActiveTab] = useState(null);
  const data = [
    {
        id: 1,
        firstName: 'Abu Bakar',
        lastName: 'Siddiq',
        country: 'Pakistan'
    },
    {
        id: 2,
        firstName: 'Ammar',
        lastName: 'Rehman',
        country: 'Pakistan'
    },
    {
        id: 3,
        firstName: 'Mushtaq',
        lastName: 'Ahmed',
        country: 'Pakistan.'
    },
    {
        id: 4,
        firstName: 'Saeed',
        lastName: 'Ahmed',
        country: 'Pakistan.'
    }
];
  const handleRowClick = (id) => {
    setActiveTab(id);
  };

  const handleCloseTab = () => {
    setActiveTab(null);
  };

  return (
    <div>
         {activeTab && (
        <div className="tab">
          <button className="close" onClick={handleCloseTab}>X</button>
          <div className="content">
            <p>First Name: {data.find((row) => row.id === activeTab).firstName}</p>
            <p>Last Name: {data.find((row) => row.id === activeTab).lastName}</p>
            <p>Country: {data.find((row) => row.id === activeTab).country}</p>
          </div>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr 
            onClick={() => handleRowClick(row.id)}
            style={{cursor:"pointer"}}
            key={row.id}>
              <td>{row.id}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
};

export default DataTable;
