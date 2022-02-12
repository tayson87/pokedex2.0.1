import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NameForm = () => {    

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ name, setName ]= useState("");

    const submit = e => {
           e.preventDefault();
             dispatch({ type: "SET_NAME", payload: name});
                 navigate("/Pokemones");
    }
    return (
  <section className='gif' >

                <h1 className='title'>
                        Hi Pokemon Trainer !
                </h1>
            
         <form onSubmit={submit}>
             <label>
                  <div className='enter'>
                          Enter Your Name To Enter
                  </div>

              <input 
                   className='input-title' 
                   type="text" 
                    value ={name} 
                    onChange={ e => setName(e.target.value) }>
             </input>
                        </label>
                               <button className='principal'>
                               </button>
                
         </form>
</section>
    );
};

export default NameForm;