import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <p className="footer-content">
        Created with
        <span className="hearts">&hearts;</span>
        and
        <span className="coffee">&#x2615;</span>
        in Morocco,
        <br />
        This App under GPL-3 License.
      </p>
    </div>
  );
}

export default Footer;
