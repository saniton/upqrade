import React, { useState } from 'react';
import RegisterForm from '../Form/RegisterForm';
import { Link } from 'react-router-dom';

const Scanbtn2 = () => {
  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <div>
      <a className="btn btn-primary" id="Scanbtn" href="/registrations">
        Click here Buy 2 Get 1 Free
      </a>
      {/*showModal && <RegisterForm handleClose={closeModal} />} {/* Render RegisterForm conditionally */}
    </div>
  );
};

export default Scanbtn2;
