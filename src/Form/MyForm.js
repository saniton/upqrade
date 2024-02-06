import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: lightblue;
  padding: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const MyForm = ({ handleClose }) => {
  const [tableNo, setTableNo] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      // Send the form data to the server
      await axios.post('https://mog-asu-server.onrender.com/submit', {
        tableNo,
        name,
        phoneNumber,
      });

      // Close the modal after successful submission
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error as needed
    }
    handleClose();
  };

  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={handleClose}>X</CloseButton>
        <FormContainer>
          <form onSubmit={handleSubmit} method="post">
            <FormInput
              type="text"
              placeholder="Table No"
              value={tableNo}
              onChange={(e) => setTableNo(e.target.value)}
            /><br></br>
            <FormInput
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><br></br>
            <FormInput
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            /><br></br>
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormContainer>
      </ModalContent>
    </ModalBackground>
  );
};

export default MyForm;


