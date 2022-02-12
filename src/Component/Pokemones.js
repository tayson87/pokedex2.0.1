import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';

const Pokemones = () => {
    // Declaracion de estados 
    const name= useSelector(state => state.name);
    const [ pokemones, setPokemones]= useState([]);
    const [ types, setTypes] = useState ([]);
    const [ pokemonSearch, setPokemonSearch] = useState ("");
    const [ page, setPage] = useState (1);
    const navigate = useNavigate();
    const [ theme, setTheme] = useState ();
    // Estados para llamdos de api
    useEffect (() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
           .then(res => setPokemones (res.data.results));
    }, []);

     useEffect(() => {
         axios.get(` https://pokeapi.co/api/v2/type/`)
           .then(res => setTypes(res.data.results));
     }, []);
    
     const filterPokemons = name => {
      const type = types.find(type => type.name === name);
                 
                 
        axios.get(type.url)
            .then(res => setPokemones(res.data.pokemon.map(pokemon => pokemon.pokemon)))
                 setPage(1);          
     }

    //  Constante para navegar hacia la pagina de pokemones     
     const search = () => navigate(`/Pokemones/${pokemonSearch}/`); 
     
    //  Paginacion constantes  y ciclo       
    const pokemonesperPage= 16;
    const lastPokemonIndex= page * pokemonesperPage ;
    const firstPokemonIndex= lastPokemonIndex - pokemonesperPage ;
    const pokemonPaginated = pokemones.slice(firstPokemonIndex, lastPokemonIndex);
    const totalPages= Math.ceil( pokemones.length / pokemonesperPage);

         let pagesNumber =[];
              for ( let i= 1 ; i <= totalPages; i++){
                   pagesNumber.push(i)
     } 

    //  constante  y condicional para el modo  oscuro
     const handleTheme = (e) => {         
         if( e.target.value==='light'){
                        setTheme( 'light');
         }else {
                          setTheme('dark');
         }
     };   
    
    document.body.style = `background: ${theme === 'dark' ? 'black' : 'white'}`

    return (

    <div className={theme ===    'dark'? 'dark-mode' : 'light-mode'} >

         <div className='poke-banner'>
               <h1 className='title-pokemon'>
               </h1> 
                   <p className='welcome' >
                          <b>Welcome Trainer {name}!</b>
                    </p>
                          <p className='select-type'>
                                 <b>Select Type Pokemon!</b>
                            </p>


        <select className='select-poke'  
                         onChange={e => filterPokemons (e.target.value)}>
                {
                           types?.map(type => (
                             <option key={type.name}
                                  value={type.name} >
                                    {type.name}</option>
                      ))
                }                

            </select>
                  <input className='search'
                    type="text"
                    placeholder='Insert Name Pokemon' 
                    value={pokemonSearch}
                    onChange={e =>setPokemonSearch(e.target.value)}
                 />

            <button className='btn-search'
                         onClick={search}>
            </button>       
             
         </div>

                <div className='pokemonList'>
                {
                       pokemonPaginated.map(pokemon => (
             <li key={pokemon.name}
                              className='pokemon-column'>
                <PokemonInfo  url={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`}
                />
            </li>
                    ))
                }

            </div>

            <div className='pages'>
            {
                          page !== 1 &&                
            <button className='previouspage'
                          onClick={() =>setPage( page - 1)}>
                              Previous
            </button>
            }
            {
                pagesNumber.map
                     (number =>
                          <button className='btn-number'
                                 key={number} 
                                     onClick={() => 
                                          setPage(number)}>{number}
                         </button>)
            }

            <div  className='page'>
                {page} / {totalPages}
           </div>
            {
                page !== totalPages && (
                 <button className='nextpage'
                              onClick={() =>setPage( page + 1)}>
                                  Next
                  </button>
                )
            }
            </div>

            <section className='mode-dark'>
                  
                  <input className='light-btn'  type= 'radio'
                              name='theme'
                              id='light'
                             onClick={handleTheme}
                             value='light' />  

            <label className='light-label' htmlFor='light'>
                       Light
             </label>

                  <input type= 'radio'
                             name='theme'
                             id='dark'
                             onClick={handleTheme}
                             value='dark' 
                    />

                  <label htmlFor='dark'>
                             Dark
                  </label>

                  <p className='title-dark'>
                      <b>Mode Dark</b>
                 </p>

            </section>            
    </div>
    );
};

export default Pokemones;