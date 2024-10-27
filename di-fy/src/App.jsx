import './App.css'
import Logo from "./assets/di-fy-icon.png"

import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header logo={Logo}/>
      <Footer logo={Logo}/>
    </>
  )
}

export default App
