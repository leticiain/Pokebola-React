function Button({texto = "Botão", numero = 0, tipo}) {

    function evento(e){
        e.preventDefault()
        console.log('Você apertou o botão ' + numero)
    }

    return (  
        <button onClick={evento} type={tipo} className="btn btn-light m-1">{texto}</button>
    );
}


export default Button;