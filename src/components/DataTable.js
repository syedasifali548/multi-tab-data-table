import React, { useState } from 'react';

const DataTable = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const [selectedStudent,setStudent]= React.useState({})
    const [Tabs, setTabs] = React.useState([
      {
        title: "table",
        index: 0,
      },
    ]);
  
    const data = [
      {
        id: 1,
        firstName: "Abu Bakar",
        lastName: "Siddiq",
        country: "Pakistan",
      },
      {
        id: 2,
        firstName: "Ammar",
        lastName: "Rehman",
        country: "Pakistan",
      },
      {
        id: 3,
        firstName: "Mushtaq",
        lastName: "Ahmed",
        country: "Pakistan.",
      },
      {
        id: 4,
        firstName: "Saeed",
        lastName: "Ahmed",
        country: "Pakistan.",
      },
    ];
    
    // find the selected student data 
    // adding new tab
    const addNewTab = (student) => {
      // check whether student is already added or not 
      const tabsExist =Tabs.find((item)=>item.title==student.firstName)
      if(tabsExist){
        return;
      }
      setTabs((prev) => [...prev, {title:student.firstName,index:Tabs.length}]);
      //  selectecting the student 
    };
    const removeTab=(tabindex)=>{
      setTabs(Tabs.filter((tab)=>tab.index!==tabindex))
    }

  return (
    <div>
      <div className="tabs_top">
        {Tabs.map((tab) => (
          <div className="single_tab">
          <span
            onClick={() => {
              setActiveTab(tab.index)
              setStudent(data.find((item)=>item.id===tab.index))
            }}>
            {tab.title}
          </span>
          { 
            tab.index>0 &&
              <span onClick={()=>removeTab(tab.index)} style={{marginLeft:"20px",cursor:"pointer"}} >X</span>
          }
          </div>
        ))}
      </div>

{
  activeTab === 0 ? (
    <div>
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
          {data?.map((student) => (
            <tr 
            onClick={() => addNewTab(student)}
            style={{cursor:"pointer"}}
            key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ):(
    // here display details of the row
    <div>
  <h4>First Name: {selectedStudent.firstName}</h4>
  <h4>Last Name: {selectedStudent.lastName}</h4>
  <h4>Country: {selectedStudent.country}</h4>
    </div>
  )
}
  

    </div>
  );
};

export default DataTable;
