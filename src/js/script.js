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

// CRIANDO O APP

const produtos =[
    {nome:"Teclado Mecânico",preco:300,emPromocao:true},
    {nome:"Mouse Gamer",preco:150,emPromocao:false},
    {nome:"Monitor Gamer",preco:1300,emPromocao:true},
    {nome:"Pad Mouse XL",preco:400,emPromocao:false},
];

const container =document.getElementById("listar-produtos");
const mostrarTotal = document.getElementById("resultado-total")

//Map; TRANSFORMA O ARRAY DE OBJETOS EM UM ARRAY DE STRINGS HTML E CSS
//() => {}
function todosProdutos(lista){
    mostrarTotal.innerText="";
    const htmlProdutos = lista.map(item =>`
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço: R$ ${item.preco}</p>
            ${item.emPromocao ? '<span class="tag">Promoção</span>':''}
        </div>
        `).join(''); //Transforma o array em uma unica string

        container.innerHTML=htmlProdutos;
}

//FILTER: Cria uma nova lista com apenas o que selecionou

function filtrarPromocoes(){
    const promocionais = produtos.filter(item => item.emPromocao);
    todosProdutos(promocionais);
}

//REDUCE: Reduz o array a um unico valor (soma dos preços)

function calcularTotal(){
    const total = produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0);
    mostrarTotal.innerText= `Valor Total R$ ${total}`;
}