    //Variaveis

    const nome = prompt("Olá Qual é o seu nome?")
    const linguagem = prompt("Qual Linguangem você está estudando?")
    const idade = prompt("Legal " + nome + ", e quantos anos você tem?")
    const gostando = prompt("Está gostando de Estudar" + linguagem + "?" + " ( Responda com 1 para Sim ou 2 para Não)")

    //Funções

    function pulaLinha () {
        document.write("<br>")
    }

    function diferençaIdade () {
        
        if (idade <= 18) {

            document.write("Uau sempre bom começar cedo " + nome + ", Além disso " + linguagem + 
            " é uma otima linguagem para começar." )

        }

        if (idade > 18) {

            document.write("Nunca é tarde para aprender " + nome + ", Além disso " + linguagem + 
            " é uma otima linguagem para começar.")

        }
    }
    function estaGostando () {
        
        if (gostando == 1) {
            document.write ("Que bom!!, continue estudando que você vai longe")
        }

        if (gostando == 2) {
            document.write ("Uma pena... mas não desanime existem inumeras outras linguagens.")
        }
    }

    diferençaIdade();
    pulaLinha();
    estaGostando();
