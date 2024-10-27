import './button.module.css'
import PropTypes from 'prop-types';

function Button(props) {
    function linkActive() {
        const links = document.querySelectorAll('#active-link');
        links.forEach(link => {
            if (props.text === link.innerText) {
                link.style.textDecoration = 'underline'; // Aplica o destaque no item ativo
                link.style.color = 'green'; 
            } else {
                link.style.textDecoration = 'none';
                link.style.color = 'black'; // Cor neutra para os outros links
            }
        });
    }
    // Define dynamic event handler attributes
    const eventHandler = props.event ? { [props.event]: props.funct } : {};

    return (
        <button id={props.id} {...eventHandler} onLoad={() => linkActive()}>
            <span id="active-link">{props.text}</span>
        </button>
    );
}

Button.propTypes = {
    id: PropTypes.string, // Assuming text is a single string
    text: PropTypes.string, // Assuming text is a single string
    event: PropTypes.string, // The type of event handler (e.g., 'onClick')
    class: PropTypes.string, // Class style of the button
    funct: PropTypes.func,   // The event handler function
};

export default Button;
