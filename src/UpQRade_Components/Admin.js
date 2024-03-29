//Admin.js
import React, { useState, useEffect } from 'react';
import { CardHeader } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Admin = () => {
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date
  const [data, setData] = useState([]);
  const [presentToken, setPresentToken] = useState(localStorage.getItem('token') || '');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Fetch data based on the selected date
    fetchData(date);
  };

  const verifyToken = async () =>{
    try {
      const response = await fetch('https://mog-asu-server.onrender.com/api/tokenVerify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ presentToken }),
      });

      const data = await response.json();

      if (response.ok) {// Store the token in local storage
        // window.location.href="./admin";
        return
        console.log(response.message);
        // setLoginError(false);
      } else {
        // Login failed
        // setPresentToken('');
        localStorage.setItem('token', '')
        window.location.href="./admin";
        console.log(response.message);
        setLoginError(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      // setLoginError(true);
    }
  }

  const fetchData = async (selectedDate) => {
    try {
      const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
      const response = await fetch(`https://mog-asu-server.onrender.com/admin?date=${formattedDate}`);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        console.log('Fetch success');
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      fetchData(selectedDate);
    } else {
      fetchData(new Date());
    }
  }, [selectedDate]);

  useEffect(() => {
    // Check if the user has a valid token

    if (!presentToken && presentToken.length < 10) {
      // Redirect to login if no token is present
      window.location.href = '/adminLogin';
    }
    
    verifyToken();

  }, []);



  const handleDownload = async () => {
    try {
      // Check if a date is selected
      if (!selectedDate) {
        alert('Please select a date before downloading.');
        return;
      }

      const formattedDate = selectedDate.toISOString().split('T')[0];
      const response = await fetch(`https://mog-asu-server.onrender.com/admin/download?date=${formattedDate}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${presentToken}`, // Include token for authentication
        },
      });

      if (response.ok) {
        // Assuming the server responds with a downloadable file
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = `data_${formattedDate}.csv`; // You may need to adjust the filename and format
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Error downloading data:', response.statusText);
        // Handle the error accordingly
      }
    } catch (error) {
      console.error('Error downloading data:', error);
    }
  };
    

  const handleClose = () => {
    window.location.href = "#";
  };



  const Container={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'rgba(207, 207, 232, 0.9)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '1000px',
    margin: 'auto',
    marginTop: '50px', 
  };
  const Body={padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '500px',
  fontSize: '16px',
  marginBottom: '10px',
  textAlign: 'left',
};
const closeBtn = {
    cursor: 'pointer',
    alignSelf: 'flex-end',
    marginRight: '10px',
  };



  return (
    <div>
      <h1 style={{color: '#fff'}}>ADMIN DASHBOARD</h1>
      <div style={Container}>
        <div onClick={handleClose} style={closeBtn}>
          X
        </div>
        <h1>Data from Database</h1>

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a date"
        />
        
        <table style={Body}>
          <thead>
            <tr>
              <th>Table Number</th>
              <th>Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.tableNumber}</td>
                <td>{item.name}</td>
                <td>{item.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default Admin;

