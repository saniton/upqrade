import React, { useState } from 'react';
import './button.css';
import { useTranslation } from 'react-i18next';


const NavButton = () => {
    const [feedbackVisible, setFeedbackVisible] = useState(false);
  
    const handleFeedbackClick = () => {
      // Toggle the visibility state
      setFeedbackVisible(!feedbackVisible);
    };
  
    const handleSubmitFeedback = () => {
      // Handle feedback submission logic here
      // For example, log feedback to the console
      const feedbackText = document.getElementById('feedbackText').value;
      console.log('Submitted feedback:', feedbackText);
      // Reset visibility after submitting feedback
      setFeedbackVisible(false);
    };

    const [t, i18n] = useTranslation('global');
  return (
    <div>
      <button className="btn btn-primary" id='button' onClick={() => window.location.href ='https://legacy.reactjs.org/docs/create-a-new-react-app.html'}>{t('NavButton.body')}</button>
    </div>
  );
};

export default NavButton;
