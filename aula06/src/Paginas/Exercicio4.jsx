import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio4()
{

  const [base, setBase] = useState(0);
  const [altura, setAltura] =useState(0);
  const [resultado, setResultado] = useState('');

  function calcular() {

    setResultado(
      <div>
        A área do triângulo é: {Number(base * Number(altura) / 2)}<br />
      </div>
    );
  }

  return (

    <div>
      <h1>Exercício 4</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o valor da base <br />
            <input type="text" value={base} onChange={e => setBase(e.target.value)} />
          </p>

          <p>
            Digite o valor da altura: <br />
            <input type="text" value={altura} onChange={e => setAltura(e.target.value)} />
          </p>
          
          <p>
            <input type="button" value="Exercício 4" onClick={calcular} />
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