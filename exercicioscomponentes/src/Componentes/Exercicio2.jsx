export default function Exercicio2({peso, altura})
{
    let imc = (Number(peso) / Number(altura * altura)); 

    return (
        <div>
            A temperatura {Fah} convertida em Celsius é {celsius} {Number}
        </div>
    );
}