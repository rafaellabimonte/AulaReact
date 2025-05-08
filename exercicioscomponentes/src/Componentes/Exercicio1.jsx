export default function Exercicio1({Fah})
{
    let celsius = (Number(Fah) - 32 * 5 /9); 

    return (
        <div>
            A temperatura {Fah} convertida em Celsius é {celsius} {Number}
        </div>
    );
}