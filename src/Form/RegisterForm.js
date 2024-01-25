import React from 'react';
import { useTranslation } from 'react-i18next';

function RegisterForm() {
  const [t, i18n] = useTranslation('global');

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const tableNumber = e.target.elements.tableNumber.value;
    const name = e.target.elements.name.value;
    const phoneNumber = e.target.elements.phoneNumber.value;


    // Make an HTTP POST request to the server
    try {
      const response = await fetch('http://localhost:5000/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',          
        },
        body: `tableNumber=${tableNumber}&name=${name}&phoneNumber=${phoneNumber}`,
      });

      if (response.ok) {
        console.log('Registration successful');
        window.location.href = '/Submission';



        // Add any additional logic for successful registration

      } else {
        console.error('Registration failed');
        // Add any error handling logic
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Add any error handling logic
    }

  };
  
  function handleClose(){
    window.history.back();
  }


  // Styles for the component
  const modalContainer = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formStyles = {
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

  const closeBtn = {
    cursor: 'pointer',
    alignSelf: 'flex-end',
    marginRight: '10px',
  };

  const body = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '250px',
    fontSize: '16px',
    marginBottom: '10px',
  };
  


  // JSX structure for the component
  return (
    < div style={modalContainer}>
    <div style={formStyles}>

      <div style={closeBtn} onClick={handleClose}>
        X
      </div>
      <form onSubmit={handleSubmit} method="post">
        <div style={body}>
          <label htmlFor="tableNumber">{t("RegisterForm.tablenumber")}:</label>
          <input type="text" id="tableNumber" name="tableNumber" required />
          <br />
          <label htmlFor="name">{t("RegisterForm.name")}:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="phoneNumber">{t("RegisterForm.phonenumber")}</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-9]{10}"
            placeholder="Enter a 10-digit phone number"
            required
          />
          <br /><br></br>
          <button type="submit" className="btn btn-dark" >Register</button>
          
        </div>
      </form>
    </div>
    </div>
  );
}

// Export the component
export default RegisterForm;
