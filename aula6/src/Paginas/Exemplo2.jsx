import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exemplo2()
{
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    
    setResultado(
      <div>
        A soma é {Number(num1) + Number(num2)} <br />
        A subtração é {Number(num1) - Number(num2)} <br />
        A multiplicação é {Number(num1) * Number(num2)} <br />
        A divisão é { Number(num1) / Number(num2) } <br />
        A exponenciação é {Number(num1) ** Number(num2)} <br />
        O resto da divisão é { Number(num1) % Number(num2) }
      </div>
    );
  }



  return (
    <div>
      <h1>Exemplo 2</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o número 1: <br />
            <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
          </p>
          <p>
            Digite o número 2: <br />
            <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
          </p>
          
          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>
        </form>
        <p>
          Resultado: {resultado}
        </p>
        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}