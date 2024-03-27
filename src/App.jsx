import { Tilt } from 'react-tilt'

import Card from './components/Card'
import Menu from './components/Menu'
import img01 from "./assets/imgs/foto1.jpg"
import img02 from "./assets/imgs/foto2.jpg"
import img03 from "./assets/imgs/foto3.jpg"

import style from './App.module.css'

function App() {

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  
  return (
    <>
    <Menu/>
    
    <div className={style.section01}>
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
        <Card 
        title="Paisagem 01"
        image={img01}
        text1="descricao da paisagem 01"
        text2="Curitiba/PR"
        />
      </Tilt>

      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card 
        title="Paisagem 02"
        image={img02}
        text1="descricao da paisagem 02"
        text2="Guaratuba/PR"
        />
      </Tilt>
      
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card 
          title="Paisagem 03"
          image={img03}
          text1="descricao da paisagem 03"
          text2="Colombo/PR"
          />
      </Tilt>
  
     
     
      </div>
      </>
      
  )
}

export default App
