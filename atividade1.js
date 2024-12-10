var numero, fatorial, res;

numero=parseInt(prompt("Digite um número: "));

function Fatorial(numero){
    fatorial=1
for(var i=1; i<=numero; i++){
fatorial=fatorial*i
}
return fatorial;
}

res= Fatorial(numero);
alert("A fatoração de "+numero+" é igual a: "+res);