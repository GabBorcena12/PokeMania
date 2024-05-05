import React from 'react';
import Button from './Button'; 
import pokeTrailer from '../assets/videos/pokemon-trailer.mp4'
import '../css/poke-section.css'
import '../css/style.css'
 
function PokeSection() {
  return (
    <div className='modal'>
      <div className='hero-container'>
      <video src={pokeTrailer} autoPlay loop muted />
            <h1>POKEMON DETECTIVE</h1>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                BOOK YOUR TICKETS NOW
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>             
        </div>
    </div>
  )
}

export default PokeSection;