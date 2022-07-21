    
let tam = document.getElementById("vol");
let frase = document.getElementById("frase");
let senha = document.getElementById("senha");
let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@";

frase.innerHTML = "Sua Senha gerada foi:";

senha.style.backgroundColor = "#70706d";

function gerarSenha(){
    let senha1 = "";
    for(let i = 0, n = charset.length; i < tam.value; i++)
    {
        senha1+=charset.charAt(Math.floor(Math.random() * n));
    }
    senha.innerHTML = senha1;
    senhaCopiada =  senha1;
 }

 function copiarSenha(){
    alert("Senha copiada");
    navigator.clipboard.writeText(senhaCopiada);
 }

 function tamanho(){
    let tamanho = document.getElementById("vol");
    let tamFrase = document.getElementById("tam");
    console.log(tamanho);
    tamFrase.innerHTML = "Tamanho: " + tamanho.value;
 }