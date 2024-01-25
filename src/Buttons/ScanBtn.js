import React, { useState } from 'react';
import MyForm from '../Form/MyForm'; // Import your MyForm component

const Scanbtn = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

    
  return (
    <div>
      <button className="btn btn-primary" id="Scanbtn" onClick={openModal}>
      Click here Buy 2 Get 1 Free
      </button>
      {showModal && <MyForm handleClose={closeModal} />} {/* Render MyForm conditionally */}
    </div>

  );
};

export default Scanbtn;
