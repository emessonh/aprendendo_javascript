// escopo global

    // variável declarada no topo do código ou fora de funções

    let a = "hello world";

    function ola(){
        a = "Olá mundo"; // altera a varivel global

    }
    ola();
    console.log(a);

    // obs: Caso a variavel nao seja declara automaticamente se torna variavel global 
    // caso seja usado 'user strict' essa sintaxe lançará um erro

    function printB(){
        b = 1
    }

    printB();
    console.log(b)

// escopo local

    // uma variavel sendo declarada dentro de uma função será usada apenas naquele bloco de código

    // let (blocked scope)

        // ao usar let em uma variável ela só poderá ser acessada naquele bloco de código

        
