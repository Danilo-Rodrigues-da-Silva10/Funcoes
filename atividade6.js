var x,y,quadrante;
x=parseInt(prompt("Digite a coordenada do x: "));
y=parseInt(prompt("Digite a coordenada do y: "));

function verificaquadrante (x,y)
{
    if(x>0,y>0){
        quadrante=1;
    }
    else if(x>0,y<0)
    {
        quadrante=4;

    }
    else if(x<0,y<0)
    {
        quadrante=3;

    }
    else if(x<0,y>0)
    {
        quadrante=2;
    }
    return quadrante;
}
res=verificaquadrante (x,y)
alert("seu quadrante é " + res);