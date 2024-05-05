import React from 'react';
import '../css/cards-text.css';
import scarlet from '../assets/images/pokemon-scarlet.png'
import horizon from '../assets/images/pokemon-horizon.png'
import anime from '../assets/images/pokemon-anime.png'
import games from '../assets/images/pokemon-games.png'
import enjoy from '../assets/images/pokemon-enjoy.jpg'

const CardsText = () => {      
  return (
    <>
        <div className='main-container'>            
            <div id="divViewMore"> 
                <section className="header">
                </section>
            </div>
            <div id="flex"> 
                <section className="flex-box-container">
                    <div className="col pokemon-guide-single-column">
                        <img className='card-img' src={scarlet} alt='Pokemon Scarlet'/>
                        <h3>Pokémon Scarlet and Pokémon Violet</h3> 
                        <p>Are you ready to explore Blueberry Academy and venture into the deepest depths of Area Zero?</p>
                        <button className='btnReadMore'>Read More</button>
                    </div>
                    <div className="col pokemon-guide-single-column">
                        <img  className='card-img'  src={horizon} alt='Pokemon Horizon'/>
                        <h3>Pokémon Horizons: The Series (season)</h3>
                        <p>Explore the newest season, Pokemon Horizons: The Series!</p>
                        <button className='btnReadMore'>Read More</button>
                    </div>                                                   
                            <div className="col pokemon-guide-double-column" 
                                style={{backgroundImage:`url(${anime})`
                                , backgroundPosition:'center'}}> 
                            <div>                            
                                <h2>Anime</h2> 
                                <p>Join Liko, Roy and the Rising Volt Tacklers on their journey across the world!</p>
                            </div>                      
                    </div>
                    <div className="col pokemon-guide-single-column">
                        <img  className='card-img'  src={games} alt='Pokemon Games' />
                        <h3>Games</h3> 
                        <p>Learn about the popular Pokemon games!</p>
                        <button className='btnReadMore'>Read More</button>
                    </div>                
                    <div className="col pokemon-guide-single-column"> 
                        <img  className='card-img'  src={enjoy} alt='Pokemon' />
                        <h3>Explore, Enjoy and Relax.</h3>
                        <p>Join us and learn more about Pokemon by joining our discord server.</p>
                        <button className='btnReadMore'>Read More</button>
                    </div>
                </section>
            </div>
            <div id="divViewMore"> 
                <section className="header">
                </section>
            </div>
        </div>
    </>
    
  )
}

export default CardsText;