import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import '../css/pokemon-list.css';
import '../css/pagination.css';
import PokemonView from './PokemonView';

const PokemonList = ({ pokemon }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPokemon, setSelectedPokemon] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = pokemon.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleViewClick = (poke, val) => {
        setSelectedPokemon(poke);
        setIsOpen(val);
    };

     // Function to map Pokemon types to CSS class names
     const getTypeClass = (type) => {
        switch (type) {
            case 'fire':
                return 'fire-type';
            case 'water':
                return 'water-type';
            case 'grass':
                return 'grass-type';
            case 'bug':
                return 'bug-type';
            // Add more cases for other types as needed
            default:
                return 'normal-type';
        }
    };
    
    const renderPokemonRows = () => {
        return currentItems.map((poke, i) => (
            <tr key={i} className={getTypeClass(poke.types[0].type.name)} onClick={() => handleViewClick(poke, true)}>
                <td style={{ textTransform: 'capitalize', fontSize: 'large' }}>{poke.name}</td>
                <td>
                    <img className='pokeImage' src={poke.sprites.front_default} alt={poke.name} />
                </td>
                <td style={{ textTransform: 'capitalize' }}>
                    {poke.types.map((type, i) => (
                        <span key={i}>
                            {i > 0 && ', '}
                            {type.type.name}
                        </span>
                    ))}
                </td>

            </tr>
        ));
    };

    const renderPaginationItems = () => {
        const pageNumbers = Math.ceil(pokemon.length / itemsPerPage);
        const paginationItems = [];

        for (let number = 1; number <= pageNumbers; number++) {
            paginationItems.push(
                <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={() => paginate(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }

        return paginationItems;
    };

    return (
        <>        
            <div className='pokemon-container'>
                <table className='poke-table'>
                    <thead>
                        <tr>
                            <td>
                                <h1 className='pokemon-list-header'>Pokémon List</h1>
                            </td>
                        </tr>
                    </thead>
                    <tbody>{renderPokemonRows()}</tbody>
                </table>

                <div>
                    <Pagination>{renderPaginationItems()}</Pagination>
                    <br />
                </div>
            </div>
            {isOpen && <PokemonView poke={selectedPokemon} isOpen={isOpen} setIsOpen={setIsOpen} />}

        </>
        
    );
};

export default PokemonList;
