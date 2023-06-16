import React, { useEffect, useState } from 'react';
import Button from './Button';

function Counter({isLoading}) {

    const [counter, setCounter] = useState(0)

    //Incrementa o contador
    const updateCounter = num => {
        setCounter(counter + num)
    }

    //Zera o contador
    const eraseCounter = num => {
        setCounter(num)
    }

    if(isLoading){
        return <p>Carregando...</p>
    }

    return (  
        <div className="contador border border-dark p-3 text-center">
            <h2>Você clicou {counter} vezes</h2>

            <Button texto="Contador" numero="2" contador={updateCounter}/>
            <Button texto="Limpar" numero="3" contador={eraseCounter}/>
        </div>
    );
}

export default Counter;