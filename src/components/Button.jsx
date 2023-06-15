function Button({contador, texto = "Botão", numero = 0, tipo}) {

    function evento(e){
        e.preventDefault()
        console.log('Você apertou o botão ' + numero)
        if(contador){
            if(texto === 'Contador'){
                contador(1)
            }else{
                contador(0)
            }
        }

    }

    return (  
        <button onClick={evento} type={tipo} className="btn btn-light m-1">{texto}</button>
    );
}

export default Button;