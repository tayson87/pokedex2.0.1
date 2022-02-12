import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PokemonDetail = () => {

            const { name} = useParams();
            const navigate = useNavigate();
            const [ pokemon, setPokemon]= useState({});
  

    useEffect (() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                  .then(res =>{        
                   setPokemon(res.data)
        });
    }, [ name])  


           const back = () => navigate(`/Pokemones`); 
  
    
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
        

}} 
                          
    className='poke-container'>
           


              <h2 className='pokename'>
                     {pokemon.name?.toUpperCase()}
              </h2>
                    <h3 className='pokehei'>
                            Height: {pokemon.height}
                    </h3>
                            <h3 className='pokewei'>
                                   weight: {pokemon.weight}
                          </h3>
                                  <h3 className='pokeid'>
                                         N° {pokemon.id}
                                   </h3>
                                          <h3 className='poketype'>
                                                Type  <button className='btn-type'> {pokemon.types?.[0].type.name}</button>
                                            </h3>               
                                                    <h3 className='pokestan'>
                                                          Base Stat  {pokemon.stats?.map(stat=><div key={stat.stat.name}>
                                                          <button className='btn-stat'><div className='poke-base'>
                                                              {stat.stat.name} :
                                                               {stat.base_stat}
                                                               </div>
                                                         </button>
                                                            </div>)}
                                                      </h3> 

               <b><p className='title-abi'>
                 Abilities
               </p></b>
                         <b><p className='title-mov'>
                                     Movements</p></b>

                <select className='selectpokemon' >   
               {
                              pokemon.moves?.map(move => (
                                 <option key={move.move.name} value={move.name} >
                                        {move.move.name}
                                  </option>
                      ))
                }                   
                 </select>  

                 <select className='selectAbilities' >   
               {
                             pokemon.abilities?.map(ability => (
                       <option key={ability.ability.name} value={ability.name}>         {ability.ability.name}
                      </option>
                      ))
                }                   
                 </select>  


        <img className='img-pokes'
                  src ={pokemon.sprites?.other.home.front_default} alt="" /> 

                         
         <i className='btn-back'
              class="fas fa-hand-point-left" 
              onClick={back} >
        </i> 
                         
          <p className='back-page'> 
                 <b>Back</b>
          </p>                      
                         
        </div>
    );
};

export default PokemonDetail;