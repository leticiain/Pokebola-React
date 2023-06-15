import React, { useState } from 'react';
import Button from './Button';

function Counter() {

    const [counter, setCounter] = useState(0)

    const updateCounter = num => {
        setCounter(counter + num)
    }

    const eraseCounter = num => {
        setCounter(num)
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