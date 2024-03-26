
import './App.css'
import Card from './components/Card'
import img01 from "./assets/imgs/foto1.jpg"
import img02 from "./assets/imgs/foto2.jpg"
import img03 from "./assets/imgs/foto3.jpg"

function App() {

  return (
    <>
      <Card 
        title="Paisagem 01"
        image={img01}
        text1="descricao da paisagem 01"
        text2="Curitiba/PR"
        />
      <Card 
        title="Paisagem 02"
        image={img02}
        text1="descricao da paisagem 02"
        text2="Guaratuba/PR"
        />
      <Card 
        title="Paisagem 03"
        image={img03}
        text1="descricao da paisagem 03"
        text2="Colombo/PR"
        />
      </>
      
  )
}

export default App
