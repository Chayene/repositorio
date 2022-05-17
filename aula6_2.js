class Pessoa{
    constructor(nome, idade,cpf){
        this.nome= nome
        this.idade= idade
        this.cpf= cpf
    }
    cumprimentar(){
        console.log(`Olá, meu nome é: ${this.nome}, tenho ${this.idade} anos!!`)
    }
    static cumprimentar2(){
        console.log("ola")
    }
}

//f(x)=ax+b recebe o valor f(9)=a9+b
let p= new Pessoa("Marcos", 20, "345.674.677-55")
let p2= new Pessoa("Carlos", 24, "445.874.007-45")
let p3= new Pessoa("Amanda", 22, "555.874.007-45")


const pessoas=[p,p2,p3]

for (let pessoa of pessoas){

    console.log(pessoa.nome)
}

