import axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonInfo = ({ url }) => {

    const [ pokemon, setPokemon]= useState ({});
             useEffect (() => {
                  axios.get(url)
                     .then(res  => setPokemon(res.data));
     }, [ url ])

    //  console.log(pokemon.types?.[0].type.name)

    return (


        <div style={{background: pokemon.types?.[0].type.name ===  'fire' ? '#FF9671' : 
                                                    pokemon.types?.[0].type.name === 'grass' ? 'green' : 
                                                    pokemon.types?.[0].type.name === 'electric' ? 'yellow' : 
                                                    pokemon.types?.[0].type.name === 'normal' ? '#B0A8B9' : 
                                                    pokemon.types?.[0].type.name === 'fighting' ? '#C34A36' :
                                                    pokemon.types?.[0].type.name === 'flying' ? '#D9F2FD' : 
                                                    pokemon.types?.[0].type.name === 'poison' ? '#845EC2' :
                                                    pokemon.types?.[0].type.name === 'ground' ? '#B15B00' :
                                                    pokemon.types?.[0].type.name === 'rock' ? '#D5CABD' :
                                                    pokemon.types?.[0].type.name === 'bug' ? '#4FFBDF' : 
                                                    pokemon.types?.[0].type.name === 'ghost' ? '#4B4453' : 
                                                    pokemon.types?.[0].type.name === 'steel' ? '#00C9A7' : 
                                                    pokemon.types?.[0].type.name === 'water' ? '#009EFA' : 
                                                    pokemon.types?.[0].type.name === 'psychic' ? '#FF6F91' : 
                                                    pokemon.types?.[0].type.name === 'ice' ? '#C4FCEF' :
                                                    pokemon.types?.[0].type.name === 'dragon' ? '#4D8076' : 
                                                    pokemon.types?.[0].type.name === 'dark' ? '#252527' : 
                                                    pokemon.types?.[0].type.name === 'fairy' ? '#C25E8E' : 'white'
                                                    

        }}   className='pokeinfo'>           

            <Link  
                   to ={`/Pokemones/${pokemon.name}`}
                           className='card'>
             <img className='img-pokemon'
                      src={pokemon.sprites?.other.home.front_default}
                           alt="">
            </img>
                     <div className='name-pokemon'>
                             <h2>{pokemon.name?.toUpperCase()}
                             </h2>
                    </div>                    
                          <h3 className='hei'>
                                   Height:{pokemon.height} 
                          </h3>
                              <h3 className='id'>
                                        #{pokemon.id} 
                              </h3>
                 <h3 className='wei'>
                          Weight:{pokemon.weight}
                 </h3>
      </Link>            
 </div>
    );
};

export default PokemonInfo;