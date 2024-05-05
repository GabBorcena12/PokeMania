import React from 'react';
import { Button } from 'react-bootstrap';
import pokeColor from './PokeColor';
import '../css/style.css';

const PokemonView = ({ poke, isOpen, setIsOpen }) => {

  const closeModal = (shouldClose) => {
    if (shouldClose) {
      setIsOpen(false); 
    }
  }

  return (             
    <div className='modal-overlay'>
        <div className='poke-overlay' style={{display:'flex'}}>
        <div className='pokeType' style={{ backgroundColor: pokeColor[poke.name] }}>
          <div className='poke-modal-header'>
            <Button variant="danger" onClick={() => closeModal(true)} className="close-button">
              X
            </Button>
          </div>
          <div className='pokeDetails'>
            <div className='pokeName'>{poke.name}</div>
            <div className='pokeOwned'># <span>{poke.order}</span></div>
          </div>                    
          <div className='pokeImageContainer'>                      
            <img className='pokeImage' src={poke.sprites.front_default} alt='pokemon' />
          </div>
          <div className='pokeTypes' style={{ textTransform: 'capitalize', justifyContent:'center' }}>
              <div className='pokeSkill'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonView;
