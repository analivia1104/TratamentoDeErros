    /* trocas as coisas de ingles p/ portugues aqui e no html */
    
    const inputFileButton = document.getElementById("inputfilebutton"); // declaração da ação
    inputFileButton.addEventListener("click", EscolherArquivo);

    const EntradaNumeroBotao = document.getElementById("entradanumerobotao"); // declaração da ação
    EntradaNumeroBotao.addEventListener("click", EscreverNumero);

    function EscolherArquivo(){
        arquivo = document.getElementById("inputfile");
        var fr=new FileReader(); //Leitor de arquivo

    try{ // verifica se o arquivo está la
        
        fr.readAsText(arquivo.files[0]);

        fr.onload=function(){ // abre o arquivo
        info = fr.result;
        document.getElementById('output').textContent=fr.result; // mostra o arquivo na pagina
                            }

        var info = document.getElementById('output').textContent;

        console.log(info);
        
        if (info == null) {
        throw "Há um arquivo vazio!";
        }
        
        }

    catch (erro) { // mensagem de alerta
        console.log(erro);
        alert("Arquivo não localizado");

                 }

    finally { // SEMPRE acontece
        alert("DS melhor turma!!! ");

            }   
                              }
    function EscreverNumero (){

    numero = document.getElementById("entradanumero").value

    try {
        if (numero == '') throw 'Por favor, informe um numero!'
    }

    catch (erro){
        console.log (numero)
        document.getElementById("saidanumero").innerHTML = erro //verificando se está vazio 

    }
                                }