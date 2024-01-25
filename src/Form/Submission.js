import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

function Submission() {
  const [t, i18n] = useTranslation('global');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once

  const fetchData = async (e) => {
    try {
      const response = await fetch('http://localhost:5000/submission');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        console.log("fetch success")
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  function handleClose(){
    window.location.href="/";
  }

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
    maxWidth: '600px',
    width: '400px',
    margin: 'auto',
    marginTop: '50px', 
  };
  const Body={padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '250px',
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
    <div style={Container}>
  <div style={closeBtn} onClick={handleClose}>
    X
  </div>
          <h1>{t("Submission.submitteddata")}</h1>

  <table style={Body}>
    <tbody>
      {data.map((item) => (
        <>
          <tr key={`${item._id}-tableNumber`}>
            <td>{t("Submission.tablenumber")}</td>&nbsp;
            <td>{item.tableNumber}</td>
          </tr>
          <tr key={`${item._id}-name`}>
            <td>{t("Submission.name")}</td>&nbsp;
            <td>{item.name}</td>
          </tr>
          <tr key={`${item._id}-phoneNumber`}>
            <td>{t("Submission.phonenumber")}</td>&nbsp;
            <td>{item.phoneNumber}</td>
          </tr>
        </>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default Submission;
