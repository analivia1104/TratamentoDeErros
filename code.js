    const inputButton = document.getElementById("inputfilebutton");
    inputButton.addEventListener("click", clickButton);

    function clickButton(){
        arquivo = document.getElementById("inputfile");
        var fr=new FileReader(); //Leitor de arquivo

    try{ // verifica se o arquivo está la
        fr.readAsText(arquivo.files[0]);

        fr.onload=function(){ // abre o arquivo
        info = fr.result;
        document.getElementById('output').textContent=fr.result; // mostra o arquivo na pagina
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