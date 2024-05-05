import React, { useState } from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';
import pokeball from '../assets/images/pokeball.png'
import australia from '../assets/images/flags/australia.png'
import china from '../assets/images/flags/china.png'
import japan from '../assets/images/flags/japan.png'
import russia from '../assets/images/flags/russia.png'
import taiwan from '../assets/images/flags/taiwan.png'
import Modal from './Modal'

const whitetext ={
  color:"white",
  textAlign:"center"
}

const Footer = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [showModal, setShowModal] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test handleSubmit');
    setEmailAddress('');
    setShowModal(true); 
  }

  const closeModal = () => {
    setShowModal(false); // Function to close the modal
  }

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join us on discord and get the latest updates 
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form onSubmit={handleSubmit}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <button type='submit' className='btn--outline' onClick={() => handleSubmit}>Subscribe</button>
          </form>
        </div>
      </section>
      <div className='footer-links'> 
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'  style={{alignItems:'flex-end'}}>
            <h2>POKE MANIA</h2> 
            <Link to='/'>PokeDex</Link>
            <Link to='/'>Poke Wiki</Link>
            <Link to='/'>Fandom</Link>
            <Link to='/'>Otakufest PH 2023</Link>
            <Link to='/'>Otaku World</Link>
            <Link to='/'>Otaku Culture Anime</Link>
            <Link to='/'>Otaku Store</Link>
            <Link to='/'>OtakuHobbiToys PH </Link>
          </div> 
          <div className='footer-link-items'>
            <h2>FOREIGN OFFICES</h2>
            <Link to='/'><img src={australia} alt='australia' />&nbsp;&nbsp;<span className='img-flag-txt'>Australia</span></Link>
            <Link to='/'><img src={china} alt='china' />&nbsp;&nbsp;<span className='img-flag-txt'>China</span></Link>
            <Link to='/'><img src={japan} alt='japan' />&nbsp;&nbsp;<span className='img-flag-txt'>Japan</span></Link>
            <Link to='/'><img src={russia} alt='russia' />&nbsp;&nbsp;<span className='img-flag-txt'>Russia</span></Link>
            <Link to='/'><img src={taiwan} alt='taiwan' />&nbsp;&nbsp;<span className='img-flag-txt'>Taiwan</span></Link>
          </div> 
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap' style={{justifyContent:'center'}}>
          <div className='footer-logo' style={{justifyContent:'center',display:'flex', alignContent:'center'}}>
            <img src={pokeball} alt='logo' style={{height:'2rem', padding:'1rem'}}/>
              <h4 style={whitetext}>Copyright © 2024</h4>
            </div> 
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>

      {/* Render the Modal component */}
      <Modal 
          show={showModal} 
          onClose={closeModal} 
          header="Pokemon Email Subscription" 
          content="Email has been sent. Thank you for subscribing!" /> 
    </div>
  );
}

export default Footer;
