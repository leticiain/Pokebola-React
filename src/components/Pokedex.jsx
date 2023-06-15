import React, { useState } from 'react';

function Pokedex() {

    //Lista de pokemons
    const [pokemons, setPokemons] = useState(["Bulbassauro", "Squirtle", "Caterpie"])
    let pokemon = ''

    //Salva o nome digitado
    function evento(e) {
        pokemon = e.target.value
    }

    //Adicionar pokemon à lista
    function adicionar() {
        if(pokemon){
            setPokemons(pokemons => [...pokemons, pokemon]);
            console.log(pokemons)
    }else{
            alert("Digite o nome de um pokemon")
        }
    }

    return (  
        <div className="pokedex">
           <div className="jumbotron jumbotron-fluid">
               <div className="container">

                    <h4 className="display-1">Coleção de Pokemons</h4>
                    <p className="lead">Seus pokemons são:</p>
                    <ul>
                        { pokemons.map(pokemon => <li key={pokemon}>{ pokemon }</li>) }
                    </ul>   

                    <div className="col">
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder='Nome do Pokemon' onChange={evento}/>
                        </div>
                    </div>

                    <div className="col">
                        <button className="btn btn-light" onClick={adicionar} type='submit'>Adicionar</button>
                    </div>


               </div>
           </div>
       </div>
    );
}

export default Pokedex;