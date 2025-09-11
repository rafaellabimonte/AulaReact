import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio6()
{

  const [qtde, setQtde] = useState(0);
  const [preco, setPreco] = useState(0);
  const [subtotal] = useState(0);
  const [resultado, setResultado] = useState('');

  function calcular() {

    setResultado(
      <div>
        Subtotal: {Number(qtde) * Number(preco)}<br />
        Desconto de 10%: {Number(subtotal) - 10/100}<br />
        Valor final: {Number}
      </div>
    );
  }

  return (

    <div>
      <h1>Exercício 6</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite a quantidade do produto: <br />
            <input type="text" value={qtde} onChange={e => setQtde(e.target.value)} />
          </p>

          <p>
            Digite o preço do produto: <br />
            <input type="text" value={preco} onChange={e => setPreco(e.target.value)} />
          </p>
          
          <p>
            <input type="button" value="Exercício 6" onClick={calcular} />
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