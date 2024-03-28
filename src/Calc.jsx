import Menu from "./components/Menu"
import style from './Calc.module.css'
import { useState, useEffect } from "react"

export const Calc = () => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMulti, setRespMulti] = useState()
    const [respDiv, setRespDiv] = useState()

    // useEffect(()=> {
    //     if(numero1 !== undefined && numero2 !== undefined){
    //         setRespSoma(parseFloat(numero1) + parseFloat(numero2))
    //         setRespSub(parseFloat(numero1) - parseFloat(numero2))
    //         setRespMulti(parseFloat(numero1) * parseFloat(numero2))
    //         setRespDiv(parseFloat(numero1) / parseFloat(numero2))
    //     }
    // }, [numero1, numero2])

    const handleSoma = (a,b) => setRespSoma(parseFloat(a) + parseFloat(b))
    const handleSub = () => setRespSub(parseFloat(numero1) - parseFloat(numero2))
    const handleMult = () => setRespMulti(parseFloat(numero1) * parseFloat(numero2))
    const handleDiv = () => setRespDiv(parseFloat(numero1) / parseFloat(numero2))

    const handleAll = (a,b) => {
        setRespSoma(parseFloat(a) + parseFloat(b))
        setRespSub(parseFloat(a) - parseFloat(b))
        setRespMulti(parseFloat(a) * parseFloat(b))
        setRespDiv(parseFloat(a) / parseFloat(b))
    }

    const msgErro = "Digite um número válido"

    return(
        <>
            <Menu/>
                <div className={style.sectionCalc}>
                    <h1>Cálculos</h1>
                    <div>
                        <label htmlFor="n1">Número um:</label>
                        <input type="text" id="n1" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="n2">Número dois:</label>
                        <input type="text" id="n2" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
                    </div>
                    <button onClick={() => handleAll(numero1, numero2)}>Calcular todos</button>
                    <div>
                        <div>
                            <h1>Soma</h1>
                            {!isNaN(respSoma) ? respSoma : msgErro}
                            <button onClick={() => handleSoma(numero1, numero2)}>SOMAR</button>
                        </div>
                        <div>
                            <h1>Sub</h1>
                            {!isNaN(respSub) ? respSub : msgErro}
                            <button onClick={handleSub}>SUB</button>

                        </div>
                        <div>
                            <h1>Multi</h1>
                            {!isNaN(respMulti) ? respMulti : msgErro}
                            <button onClick={handleMult}>MULTI</button>

                        </div>
                        <div>
                            <h1>Div</h1>
                            {!isNaN(respDiv) ? respDiv.toFixed(2) : msgErro}
                            <button onClick={handleDiv}>DIV</button>

                        </div>
                    </div>
                </div>
        </>
    )
}