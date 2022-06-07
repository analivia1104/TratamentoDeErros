    const EntradaArquivoBotao = document.getElementById("entradaarquivobotao"); // declaração da ação
    EntradaArquivoBotao.addEventListener("click", EscolherArquivo);

    const EntradaNumeroBotao = document.getElementById("entradanumerobotao"); // declaração da ação
    EntradaNumeroBotao.addEventListener("click", EscreverNumero);

    function EscolherArquivo(){
        arquivo = document.getElementById("inputfile");
        var fr=new FileReader(); //Leitor de arquivo

    try{ // verifica se o arquivo está la
        
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){ // abre o arquivo

        info = fr.result;
        document.getElementById('saidaarquivo').textContent=fr.result; // mostra o arquivo na pagina
                            }
        var info = document.getElementById('saidaarquivo').textContent;
        if (info == "") throw "Há um arquivo vazio!";
        }

    catch (erro) { // mensagem de alerta
        alert("Arquivo não localizado");
                 }

    finally { // SEMPRE acontece
        alert("Obrigada pela visita!");
            }   
                              }

    function EscreverNumero (){
        numero = document.getElementById("entradanumero").value

    try {
        if (numero == '') throw 'Por favor, informe um numero!'
        }

    catch (erro){
        document.getElementById("saidanumero").innerHTML = erro //verificando se está vazio 
        console.log ("Erro" +erro)
                }


    try{
        if ( numero <= 5 || numero >= 10 ) // verifica se o numero está entre 5 e 10
        throw ' Por favor, informe um numero entre 5 a 10!'

        }

    catch (erro){
        document.getElementById("saidanumero").innerHTML = erro
        console.log ("Erro" +erro)
                }

    finally{
        alert("O numero inserido foi: " + numero)

            }

                                }