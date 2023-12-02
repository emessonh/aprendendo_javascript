// Hoisting (elevação)

/**
 * Usar uma variavel ou função que ainda não foi declarada sem que haja erro
 */

    // using test before declaring
    console.log(test);   // undefined
    var test;

        // comportamento

        /**
           var test;
         * console.log(test);   // undefined
         */

    // program to display value
    a = 5;
    console.log(a);
    var a; // 5

        // comportamento

        /**
           var a; // 5
         * a = 5;
           console.log(a);
         */

    // program to display value
    console.log(a); // undefined
    var a = 5;

        // comportamento

        /**
         * var a;
         * console.log(a); // undefined
           a = 5;
         */

    // inicializações não podem ser elevadas

// obs: não possível usar esse recurso ao utilizar let ou const

// Funções

    /**
     * program to display value
        var a = 4;

        function greet() {
            b = 'hello';
            console.log(b); // hello
            var b;
        }

        greet(); // hello
        console.log(b);

        gera um erro na última linha por, ao declarar a variável na função, modificar seu escopo para local
     */
    

    // program to print the text
    greet();

    function greet() {
        console.log('Hi, there.');
    }

    // obs: não pode ser usado em funções anônimas

