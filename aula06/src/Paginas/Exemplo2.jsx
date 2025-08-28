import {Link} from 'react-router-dom';
import { useState } from "react";

export default function Exemplo2()
{
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [resultado, setResultado] = useState(null);

    function calcular()
    {
        let dias = Number(idade) * 365;

        setResultado();
    }

    return (
        <div>
            <h1>Exemplo 2</h1>
          <div className="container">
          <form>
              <p>
                  Digite o número 1 <br />
                  <input type="text" value={num1} onChange={(e) => setNum1(e.target.value) }/>
              </p>

              <p>
                  Digite o número 2<br />
                  <input type="text" value={num2} onChange={(e) => setNum2(e.target.value) }/>
              </p>

              <p>
                  <input type="button" value="Calcular" onClick={calcular}/>

                  <p>
                  <b>Resultado:</b><br />
                  A soma é: {soma} <br />
                  A subtração é: {sub} 
                  A multiplicação é: {mult}
                  A divisão é: {div}
                  A exponenciação é {expo}
                  O resto da divisão é: {resto}
                </p>
            </p>
                </form>
        </div>
        </div>
    )
}