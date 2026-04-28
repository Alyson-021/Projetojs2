// LIMPEZA E VALIDAÇÃO

const email="   email@email.com     ";
//trim- remove os espaços inicio e fim
const emailLimpo= email.trim();
console.log(emailLimpo)

//VALIDAÇÃO
if(emailLimpo.includes("@")){
    console.log("email válido")
}else{
    console.log("email inválido")
}

//TRANFORMAÇÃO DE TEXTO

const tituloArtigo= "Como aprender JAVA RAIZ"
//METODO upper (maisculo) e low (minisculo)
const texto1 = tituloArtigo.toLowerCase();
console.log(texto1)
//split - transforma o texto e, array
const texto2 = tituloArtigo.split(" ");
console.log(texto2)
//join - junto tudo em uma unica string
const texto3 = texto2.join("")
console.log(texto3)
//metodo toFixad

const precoProduto=199.99;
const desconto=0.15; //15%
const precoFinal= precoProduto
console.log(precoFinal)
//`` - templete strings - concatenação
console.log(`R$ ${precoFinal.toFixed(2)}`);



// DOM (DOUMENT OBJECT MODEL)
const Titulo = document.getElementById("titulo")

Titulo.innerText= "O DOM Mudou o Texto";

Titulo.style.color="blue";

