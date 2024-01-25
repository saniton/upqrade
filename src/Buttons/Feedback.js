import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';
import './button.css'; // Ensure this CSS file includes necessary styles

const Feedback = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const handleCloseFeedback = () => setShowFeedback(false);
  const handleShowFeedback = () => setShowFeedback(true);

  const handleSubmitFeedback = () => {
    // Handle feedback submission logic here
    console.log('Submitted feedback:', feedbackText);
    setFeedbackText(''); // Reset feedback text
    handleCloseFeedback(); // Close the modal after submission
  };
  

  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <Button className="btn btn-primary" id="button" onClick={handleShowFeedback}>
        {t("Feedback.body")}
      </Button><br></br>

      <Modal show={showFeedback} onHide={handleCloseFeedback}>
        <Modal.Header closeButton>
          <Modal.Title>{t("Feedback.body")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="form-control bg-success text-white" // Apply Bootstrap form-control class for styling
            id="feedbackText"
            rows="4"
            placeholder={t("Feedback.placeholder")}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFeedback}>
          {t("Feedback.close")}
          </Button>
          <Button variant="primary" onClick={handleSubmitFeedback}>
          {t("Feedback.submit")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Feedback;
