module.exports={
    ok,
    info,
    error,
    aviso,
    mensajeBienvenida
};

//aqui definimos nuestras funcionar

function ok(mensaje){
    const estilo= 'background-color:green;color:white;font-size:30px;display:block; text-align:center;text-decoration:underline';
    mostrarLog(mensaje,estilo);
}

function aviso(mensaje){
    const estilo= 'background-color: #ffad33;color:white;font-size:30px;display:block; text-align:center;text-decoration:underline';
    mostrarLog(mensaje,estilo);
}

function error(mensaje){
    const estilo= 'background-color:red;color:white;font-size:30px;display:block; text-align:center;text-decoration:underline';
    mostrarLog(mensaje,estilo);
}

function info(mensaje){
    const estilo= 'background-color:#4dd2ff;color:white;font-size:30px;display:block; text-align:center;text-decoration:underline';
    mostrarLog(mensaje,estilo);
}

function mostrarLog(mensaje,estilo){
    console.log('%c %s',estilo,mensaje); 
    //'%c --> concatena el estilo con el mensaje este argumento solo funciona en el navegador
    //%s' --> mensaje
    //en la consola sería console.log('%c %s' , 'background-color:green; color:white','hola')
}

function mensajeBienvenida(){
    return 'Hola!!!!';
}