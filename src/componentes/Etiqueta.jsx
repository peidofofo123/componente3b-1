const Etiqueta = (props) => {
    var textoLocal = "Texto Padrão"
    return (
        <>
            <p>{
                props.texto != null 
                ? props.texto 
                : textoLocal
            }</p>
        </>
    )
}

export default Etiqueta
