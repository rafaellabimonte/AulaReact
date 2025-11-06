import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio1()
{
  const [num, setNum] = useState(0);
  const [resultado, setResultado] = useState('');

  function calcular() {
    
    setResultado(
      <div> 
        O quadrado do número digitado é: {Number(num) * Number(num)} <br/>
        O cubo do número digitado é: {Number(num) * Number(num) * Number(num)}
      </div>
    );
  }

  return (
   <div>
      <h1>Exercício 1</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite um número qaulquer: <br />
            <input type="text" value={num} onChange={e => setNum(e.target.value)} />
          </p>
          
          <p>
            <input type="button" value="Exercicio1" onClick={calcular} />
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