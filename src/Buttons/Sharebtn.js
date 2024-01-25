import React from 'react';
import './button.css';


const Sharebtn = () => {
  const openMediaPage = () => {
    const socialLinks = document.getElementById('socialLinks');
    if (socialLinks.style.display === 'none' || socialLinks.style.display === '') {
      socialLinks.style.display = 'block';
    } else {
      socialLinks.style.display = 'none';
    }
  };

  return (
    <div>
      <button className='btn btn-primary' type="submit" id="button" onClick={openMediaPage}>Share</button>
      <div className="socialLinks" id="socialLinks" style={{ display: 'none' }}>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://twitter.com/">Twitter</a>
        <a href="https://www.instagram.com/">Instagram</a>
      </div>
    </div>
  );
};

export default Sharebtn;
