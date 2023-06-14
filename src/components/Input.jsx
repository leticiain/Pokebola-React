function Input({legenda, tipo}) {

    function imprimirInput(e) {
        console.log(e.target.value)
    }        

    return (  
        <input type={tipo} placeholder={legenda} onChange={imprimirInput}/>
    );
}

export default Input;