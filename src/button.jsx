import PropTypes from "prop-types";

export const Button = ({text, name}) =>{
    console.log(text)
    return <button onClick={ function () {
        alert('Hola soy yo')
    }}>
        {text} - {name}
    </button>

    
}


Button.propTypes = {
    // text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name : 'user',
    text: 'go it'
}