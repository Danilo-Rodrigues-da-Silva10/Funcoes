function homens (a)
{
    var peso
    peso=(72.7*a)-58
    return (peso)
}
function mulheres (a)
{
    var peso
    peso=(62.1*a)-44.7
    return (peso)
}
var calcularPesoIdeal, altMulher, altHomem

calcularPesoIdeal=parseInt(prompt("Qual o seu sexo?\n1-homen\n2-mulher"))
switch (calcularPesoIdeal)
{
    case 1:
    altHomem=parseFloat(prompt("Digite sua altura:"))
    pesoHom=homens(altHomem)
    alert("Seu peso ideal é "+pesoHom)
    break;

    case 2:
    altMulher=parseFloat(prompt("Digite sua altura:"))
    pesoMul=mulheres(altMulher)
    alert("Seu peso ideal é "+pesoMul)
    break;
}