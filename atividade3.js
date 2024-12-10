function triangulo (a,b,c)
{
var triangulo
if (a<b+c&&b<a+c&&c<a+b)
    {
        if (a==b&&b==c)
    {
        triangulo="é equilátero"
    }
        else if(a==b||a==c||b==c)
    {
        triangulo="é isóceles"
    }
        else
    {
        triangulo="é escaleno"
    }
    }
        else
    {  
    triangulo="não existe, pois seus lados não caracterizam um triângulo"
    }
    }
var val
val1=parseInt(prompt("digite um dos lados do triângulo: "))
val2=parseInt(prompt("digite um dos lados do triângulo: "))
val3=parseInt(prompt("digite um dos lados do triângulo: "))
alert("este triângulo"+triangulo(val1,val2,val3))