import style from "./footer.module.css"
import PropTypes from 'prop-types'

import Button from './../button/Button'

function Footer(props) {
    return (
        <>
            <footer>
                <div>
                    <img src={props.logo} className={style.logo} alt="DI-fy: Diário Interativo"/>
                        <p>Copyright © 2024</p>
                </div>
                <a id="contact" className="rodape-item">Contato</a>
                <Button text="About" deactived={true}/>
                <Button text="Faq" deactived={true}/>
            </footer>
        </>
    )
}
Footer.propTypes = {
    logo: PropTypes.string,
}
export default Footer;