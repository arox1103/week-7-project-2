// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h3>Contact Us</h3>
        <p>Email: contact@travelexplorer.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="footer__social">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
