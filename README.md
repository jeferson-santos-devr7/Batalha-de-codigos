CodeBattle — Arena de Programação

CodeBattle é uma plataforma interativa de desafios de programação onde o usuário resolve problemas em JavaScript diretamente no navegador e recebe feedback automático através de testes.

O projeto simula plataformas de prática de programação como LeetCode, HackerRank e CodeWars, permitindo que desenvolvedores pratiquem lógica de programação em um ambiente simples e interativo.



Sobre o projeto

O funcionamento da aplicação segue um fluxo simples:

1. O usuário recebe um desafio
2. Escreve a solução no editor
3. Executa o código
4. O sistema roda testes automáticos
5. O resultado é exibido imediatamente



Interface da aplicação

A aplicação possui:

- editor de código interativo
- timer para cada desafio
- console de execução
- sistema de testes automáticos
- ranking de jogadores
- estatísticas de desempenho



Tecnologias utilizadas

Este projeto foi desenvolvido utilizando:

- HTML5
- CSS3
- JavaScript (ES6)
- CodeMirror (editor de código)
- LocalStorage (armazenamento do ranking)



Estrutura do projeto

```
codebattle
│
├── index.html
├── style.css
├── script.js
├── desafios.js
└── README.md
```



Funcionalidades



Editor de código

Editor interativo que permite ao usuário escrever funções em JavaScript diretamente no navegador.

A aplicação utiliza a biblioteca CodeMirror para oferecer uma experiência semelhante a editores profissionais.



Sistema de desafios

Cada desafio contém:

- descrição
- código inicial
- testes automáticos
- nível de dificuldade

Exemplo:

```javascript
{
nivel:"Fácil",
descricao:"Crie uma função soma(a,b)",
codigo:`function soma(a,b){

}`,
testes:[
{entrada:[2,3],saida:5},
{entrada:[10,5],saida:15}
]
}
```



Testes automáticos

O sistema executa a função criada pelo usuário e compara o resultado com o valor esperado.

Exemplo:

```javascript
let resultado = soma(2,3)

if(resultado === 5){
console.log("Resposta correta")
}
```



Timer por desafio

Cada desafio possui um tempo limite de 60 segundos.

Se o tempo acabar, o desafio é considerado falho.



Ranking

Ao finalizar os desafios, o jogador pode registrar seu nome.

A pontuação é armazenada no navegador utilizando LocalStorage.



Estatísticas

O sistema registra:

- número de desafios resolvidos
- pontuação total
- desempenho do jogador



Níveis de dificuldade

Fácil  
Desafios básicos de funções.

Médio  
Problemas com lógica condicional.

Difícil  
Problemas com algoritmos.



Exemplo de desafio

Crie uma função que retorna o dobro de um número.

```javascript
function dobro(n){
return n * 2
}
```

Testes executados pelo sistema:

entrada: 4 → saída esperada: 8  
entrada: 7 → saída esperada: 14  



Como executar o projeto

1. Clone o repositório

```
git clone https://github.com/jeferson-santos-devr7/codebattle.git
```

2. Entre na pasta

```
cd codebattle
```

3. Abra o arquivo index.html no navegador

ou utilize a extensão Live Server no VS Code.



Objetivo do projeto

Este projeto foi desenvolvido para praticar:

- JavaScript avançado
- manipulação do DOM
- execução dinâmica de código
- construção de interfaces interativas



Possíveis melhorias futuras

- sistema multiplayer
- backend com Node.js
- banco de dados
- login de usuários
- leaderboard online
- novos desafios automáticos
- suporte a múltiplas linguagens



Autor

Jeferson Santos

GitHub  
https://github.com/jeferson-santos-devr7

LinkedIn  
https://www.linkedin.com/in/jeferson-santoss-dev



Contribuição

Contribuições são bem-vindas.

Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests.