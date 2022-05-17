/* Propriedade e Atributos
Métodos e funções */

let pessoa ={
    nome:'João',  //propriedade
    idade:28,
    cpf: '123.456.789-21',
endereco: {
    cep:'04189-130',
    estado: 'São Paulo',
    cidade: 'São Paulo',
},
cumprimentar:function(){

    console.log(`Olá pessoinha`)
}
}
console.log(`olá meu nome é ${pessoa.nome} e moro em: ${pessoa.endereco.cidade}`)

pessoa.idade=29
pessoa.cumprimentar()

console.log(pessoa["idade"]) // console.log(pessoa["idade"]) ==pessoa.idade

pessoa['cumprimentar']()