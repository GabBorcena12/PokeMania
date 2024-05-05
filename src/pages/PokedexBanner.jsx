import banner from '../assets/images/pokedex.jpg'
import '../css/poke-banner.css'

const PokedexBanner = () => {
    return (
        <div className='banner-white-background'><div className="banner-container">
            <div className="banner-background-image" style={{ backgroundImage: `url(${banner})` }}>
                <div className="banner-overlay"></div>
                    <div className='Pokedex-Container'>
                        <h1>Did you know?</h1>
                        <p>Pikachu is the only pokemon that can devolve after it has evolve.</p>
                        <button className='btnReadMore'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        
      );
}
export default PokedexBanner;