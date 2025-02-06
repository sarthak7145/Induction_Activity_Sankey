import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState({
    fname : '',
    lname : '',
    address : '',
    mob_no : '',
    email : '',
    age : '',
    gender : '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const executeInputChange = (e) => {
    const { id, value } = e.target;
    setValue((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    for(let data of submittedData)
    {
      if(data.email === value.email)
      {
        alert("Email Already exists!!!");
        return;
      }
    }

    setSubmittedData((prevData) => [...prevData, value]);

    setValue({
        fname : '' ,
        lname : '',
        address : '',
        mob_no : '',
        email : '',
        age : '',
        gender : '',

      });

    
  };
  return (
    <>
      <div className='log_form'>
        <form onSubmit={handleSubmit}>
          <h1>Registration Form</h1>
          <input type="text" id='fname' placeholder='FirstName'  value={value.fname}
            onChange={executeInputChange}/>
          <input type="text" id='lname' placeholder='LastName'  value={value.lname} onChange={executeInputChange}/>
          <input type="text" id='address' placeholder='Address' value={value.address} onChange={executeInputChange}/>
          <input type="tel" id='mob_no' placeholder='Mobile No' value={value.mob_no} onChange={executeInputChange}/>
          <input type="email" id="email" placeholder='Email ID' value={value.email} onChange={executeInputChange}/>
          <input type="number" id='age' placeholder='Age' value={value.age} onChange={executeInputChange}/>
          <select name="Gender" id="gender" value={value.gender} onChange={executeInputChange}>
            <option value="" disabled selected>Gender</option>
            <option value="Male">Male</option>
            <option value="female">Female</option>
            <option value="Others">Others</option>
          </select>
          <input type="Submit" />
        </form>
      </div>

      {submittedData.length > 0 && (
      <div className="submitted-data">
          <h2>Entered Information:</h2>
          {submittedData.map((data , index) => (
            <div>
              <p><>First Name:</> {data.fname}</p>
              <p><>Last Name:</> {data.lname}</p>
              <p><>Address:</> {data.address}</p>
              <p><>Mobile No:</> {data.mob_no}</p>
              <p><>Email:</> {data.email}</p>
              <p><>Age:</> {data.age}</p>
              <p><>Gender:</> {data.gender}</p>
            </div>
          ))}
      </div>
      )}
    </>
    
  );
}

export default App
