import React from 'react';

const DataTable = ({ data }) => {
  const handleRowClick = (id) => {
    window.open(`https://example.com/details/${id}`, '_blank');
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row) => (
          <tr key={row.id}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
            <td>
              <button onClick={() => handleRowClick(row.id)}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
