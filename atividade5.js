var menu,x,y

    menu = parseFloat(prompt("Menu Principal \n 1-Soma \n 2-Subtração \n 3-Divisão \n 4-Multiplicação \n 5-Resto da divisão \n 6-dobro \n 7-Quadrado \n 8-Cubo \n 9-Raiz quadrada \n 0-Sair"))
    switch (menu)
    {
        case 1:
        
        x=parseInt(prompt("Digite um número: "));
        y=parseInt(prompt("Digite um número: "));
        function soma (a,b)
        {
            res=a+b 
            return res;
        }
        res= soma(x,y);
        alert("o resultado é de: " + res) 
        break;
    
    }
    switch (menu)
    {
        case 2:
        
        x=parseInt(prompt("Digite um número: "));
        y=parseInt(prompt("Digite um número: "));
        function subtracao (a,b)
        {
            res=a-b 
            return res;
        }
        res= subtracao(x,y);
        alert("o resultado é de: " + res) 
        break;
    }
    switch (menu)
    {
        case 3:
        
        x=parseInt(prompt("Digite um número: "));
        y=parseInt(prompt("Digite um número: "));
        function divisao (a,b)
        {
            res=a/b 
            return res;
        }
        res= divisao(x,y);
        alert("o resultado é de: " + res) 
        break;
    }
    switch (menu)
    {
        case 4:
        
        x=parseInt(prompt("Digite um número: "));
        y=parseInt(prompt("Digite um número: "));
        function multiplicacao (a,b)
        {
            res=a*b 
            return res;
        }
        res= multiplicacao(x,y);
        alert("o resultado é de: " + res) 
        break;
    }
    switch (menu)
    {
        case 5:
        
        x=parseInt(prompt("Digite um número: "));
        y=parseInt(prompt("Digite um número: "));
        function resto (a,b)
        {
            res=a%b 
            return res;
        }
        res= resto(x,y);
        alert("o resultado é de: " + res) 
        break;
    }
    switch (menu)
    {
        case 6:
        
        x=parseInt(prompt("Digite um número: "));
        function dobro (a,b)
        {
            res=a*2 
            return res;
        }
        res= dobro(x);
        alert("o resultado é de: " + res) 
        break;
    }
    switch (menu)
    {
        case 7:
        
        x=parseInt(prompt("Digite um número: "));
        y=parseInt(prompt("Digite um número: "));
        function quadrado (a,b)
        {
            res=a*a 
            return res;
        }
        res= quadrado(x,y);
        alert("o resultado é de: " + res) 
        break;
    }
    switch (menu)
    {
        case 8:
        
        x=parseInt(prompt("Digite um número: "));
        function cubo (a,b)
        {
            res=a*a*a 
            return res;
        }
        res= cubo(x,y);
        alert("o resultado é de: " + res) 
        break;
    }
    switch (menu)
    {
        case 9:
        
        x=parseInt(prompt("Digite um número: "));
        function raizquadrada (a,b)
        {
            res=Math.sqrt(a); 
            return res;
        }
        res= raizquadrada(x,y);
        alert("o resultado é de: " + res) 
        break;
    }
    switch (menu)
    {
        case 0:
            alert ("S aindo da calculadora...")
            break;
    }
