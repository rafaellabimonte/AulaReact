import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio2()
{
  const [temp, setTemp] = useState(0);
  const [resultado, setResultado] = useState('');

  function calcular() {

    
    setResultado(
      <div>
        A temperatura em graus Celsius é: {Number((temp) * 32) * 5 / 9} <br/>
      </div>
    );
  }

  return (

    <div>
      <h1>Exercício 2</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite a temperatura em Fahrenheit: <br />
            <input type="text" value={temp} onChange={e => setTemp(e.target.value)} />
          </p>
          
          <p>
            <input type="button" value="Exercício 2" onClick={calcular} />
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