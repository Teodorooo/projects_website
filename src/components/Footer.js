import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            
            <div class='footer-links'>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
        <Link to='/'>
          <div class='footer-logo'>
            Back2front &nbsp;<i className="fas fa-bolt"></i>
          </div>
        </Link>
          <a class='website-rights' href="https://adrienesquerre.com/" target="_blank">
          Teodoro Esquerre © 2021
          <br></br>
          Website:
          <br></br>
          teodoroesquerre.com</a>
        </div>
      </section>
        </div>
    )
}

export default Footer
