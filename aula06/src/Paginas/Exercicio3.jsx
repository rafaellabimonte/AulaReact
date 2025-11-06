import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio3()
{
  const [valor, setValor] = useState(0);
  const [taxa, setTaxa] =useState(0);
  const [tempo, setTempo] = useState(0);
  const [resultado, setResultado] = useState('');

  function calcular() {

    let valorparcela = valor + (valor * (taxa * taxa / 100) * tempo);

    setResultado(
      <div>
        O valor da parcela atualizado: {valorparcela}<br />
      </div>
    );
  }

  return (

    <div>
      <h1>Exercício 3</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o valor da prestação <br />
            <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
          </p>

          <p>
            Digite a taxa de juros: <br />
            <input type="text" value={taxa} onChange={e => setTaxa(e.target.value)} />
          </p>

          <p>
            Digite o tempo (em dias) de atraso: <br />
            <input type="text" value={tempo} onChange={e => setTempo(e.target.value)} />
          </p>
          
          <p>
            <input type="button" value="Exercício 3" onClick={calcular} />
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