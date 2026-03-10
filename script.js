const descricao = document.getElementById("descricao")
const nivel = document.getElementById("nivel")
const executar = document.getElementById("executar")
const resultado = document.getElementById("resultado")
const consoleBox = document.getElementById("console")
const ranking = document.getElementById("ranking")
const timer = document.getElementById("timer")

let desafioAtual = 0
let pontuacao = 0
let resolvidos = 0
let tempo = 60

const editor = CodeMirror(document.getElementById("editor"),{

mode:"javascript",
theme:"default",
lineNumbers:true

})

function carregarDesafio(){

let d = desafios[desafioAtual]

nivel.textContent = "Nível: "+d.nivel
descricao.textContent = d.descricao

editor.setValue(d.codigo)

consoleBox.textContent=""
resultado.textContent=""

tempo = 60

}

executar.addEventListener("click",function(){

try{

let codigo = editor.getValue()

eval(codigo)

let nomeFuncao = codigo.match(/function\s+(\w+)/)[1]

let passou = true

for(let teste of desafios[desafioAtual].testes){

let r = window[nomeFuncao](...teste.entrada)

consoleBox.textContent += `entrada ${teste.entrada} → ${r}\n`

if(r !== teste.saida){

passou = false

}

}

if(passou){

resultado.textContent="✅ Correto"

pontuacao += 10
resolvidos++

desafioAtual++

setTimeout(proximo,1000)

}else{

resultado.textContent="❌ Falhou"

}

}catch{

resultado.textContent="⚠️ erro no código"

}

})

function proximo(){

if(desafioAtual >= desafios.length){

finalizar()

}else{

carregarDesafio()

}

}

function iniciarTimer(){

setInterval(()=>{

tempo--

timer.textContent = tempo+"s"

if(tempo <=0){

resultado.textContent="⏱ tempo esgotado"

}

},1000)

}

function finalizar(){

let nome = prompt("Digite seu nome")

let dados = JSON.parse(localStorage.getItem("ranking")) || []

dados.push({

nome,
pontos:pontuacao

})

localStorage.setItem("ranking",JSON.stringify(dados))

mostrarRanking()

}

function mostrarRanking(){

ranking.innerHTML=""

let dados = JSON.parse(localStorage.getItem("ranking")) || []

dados.sort((a,b)=>b.pontos-a.pontos)

for(let p of dados){

let li = document.createElement("li")

li.textContent = `${p.nome} - ${p.pontos}`

ranking.appendChild(li)

}

}

carregarDesafio()

mostrarRanking()

iniciarTimer()