import style from "./header.module.css"
import PropTypes from 'prop-types'
import {useState} from 'react'

import Button from './../button/Button'
import Login from './../login/Login'
import Home from './../Home'
import New from './../new/New'
import Historic from './../Historic'

function Header(props) {
    const [activeComponent, setActiveComponent] = useState('Home'); // Exibe Home por padrão
    const user = false;

    function handleButtonClick(component) {
        if (activeComponent !== component) {
            setActiveComponent(component);
        }
    }
    return (
        <>
            <header>
                <img src={props.logo} className={style.logo} alt="Logo DI-FY"/>
                <div id="menu">
                    <Button text="Home" className={style.item} event="onClick" funct={() => handleButtonClick('Home')}/>
                    <Button text="Login" className={style.item} event="onClick" funct={() => handleButtonClick('Login')}/>
                    <Button text="New page" className={style.item} event="onClick" funct={() => handleButtonClick('New')}/>
                    { user &&  <Button text="History pages" className={style.item} event="onClick" funct={() => handleButtonClick('Historic')}/> }
                </div>
            </header>
            {activeComponent === 'Home' && <Home />}
            {activeComponent === 'Login' && <Login />}
            {activeComponent === 'New' && <New />}
            {activeComponent === 'Historic' && <Historic />}
        </>
    )
}
Header.propTypes = {
    logo: PropTypes.string,
}
export default Header;