// Definimos que é uma array de strings
let exemplo1: string[]

exemplo1.push("Renato", 20)
// por óbvio ele só vai aceitar strings

// podemos definir também que é uma array com determinado número de strings:
let exemplo2: [string, string, string]

exemplo2[0] = "Renato"
exemplo2[1] = "César"
exemplo2[2] = "Almeida"
exemplo2[3] = "Teste"

// aqui ele não aceitou um 4º item na array

// Onde utilizamos? Em situações onde temos valor previsível, mas queremos múltiplos valores:
// Exemplo: Pontos cartesianos são apenas x e y:

let cartesianos: [number, number]

cartesianos = [1, 5]

cartesianos = [23, 33, 1]

// Sendo assim, podemos fazer com que as API's retornem Tuplas com a DESESTRUTURAÇÃO:

let [x, y] = cartesianos

//obs.: Existe no JS por padrão