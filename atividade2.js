var x,y;

x=parseInt(prompt("Digite um número: "));
y=parseInt(prompt("Digite um número: "));

function diferenca (a,b) {
if (a>b){
    return a-b;
}
else
{
    return b-a;
    }
}

res=diferenca(x,y)
alert('o resultado é de: '+ res)