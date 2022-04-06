function comparaNumeros (numero1, numero2){
    const primeiraFrase = criaPrimeiraFrase (numero1,numero2);
    const segundaFrase = criaSegundaFrase (numero1,numero2);
    alert(`${primeiraFrase}  ${segundaFrase}`);
}

function criaPrimeiraFrase(numero1, numero2){
    let saoIguais = '';
    if (numero1 != numero2){
        saoIguais = 'não';
    }
    return `Os números ${numero1} e ${numero2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase (numero1,numero2){
    let soma = numero1 + numero2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    let soma10 = soma > 10;
    let soma20 = soma > 20;

    if (soma10){
        resultado10 = 'maior';
    } 
    if (soma20){
        resultado20 = 'maior';
    }
    return `A soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

let num1 = Number(prompt('Digite um primeiro número:'));
let num2 = Number(prompt('Digite o segundo número: '));
comparaNumeros(num1, num2);


