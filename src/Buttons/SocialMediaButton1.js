import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './button.css';
const SocialMediaButton1 = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [t, i18n] = useTranslation("global")
  return (
    <div>
      <Button id="button" variant="primary" onClick={openModal}>
        {t("SocialMediaButton1.body")}
      </Button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{t("SocialMediaButton1.body")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-around align-items-center">
            <a href="https://www.facebook.com/" className="text-decoration-none">
              <FontAwesomeIcon icon={faFacebookSquare} size="3x" style={{ color: '#3b5998' }} />
            </a>
            <a href="https://twitter.com/" className="text-decoration-none">
              <FontAwesomeIcon icon={faTwitterSquare} size="3x" style={{ color: '#1da1f2' }} />
            </a>
            <a href="https://www.instagram.com/" className="text-decoration-none">
              <FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: '#c32aa3' }} />
            </a>
            <a href="https://www.linkedin.com/" className="text-decoration-none">
              <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ color: '#0e76a8' }} />
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
          {t("SocialMediaButton1.close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SocialMediaButton1;
