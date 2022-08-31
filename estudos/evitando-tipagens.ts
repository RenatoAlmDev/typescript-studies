// Normalmente tipamos da seguinte forma:

function sendSpaceship(spaceship: { pilot: string; copilot: string }) {
  // ...
}

sendSpaceship({ pilot: "Fulano", copilot: "Ciclano" });

// Porém, dessa maneira, pilot e copilot são obrigatórios, se um faltar:

sendSpaceship({ pilot: "Luke" });

// Para definir que um item é opcional, basta adicionarmos "?" conforme abaixo:

function sendSpaceship2(spaceship: { pilot: string; copilot?: string }) {
  // ...
}

sendSpaceship2({ pilot: "Luke" });

// E quando não queremos definir o tipo? Exemplo:
let exemplo: unknown;

exemplo = "teste";
exemplo = 20;
exemplo = true;
exemplo = [];

// mas ao fazer isso, não podemos alterá-lo:

let text: string;

text = exemplo;

// Ou seja, ainda que seja desconhecido, há um verificação sendo feita.
// Para que não ocorra nenhuma verificação, devemos utilizar o tipo "any"

let exemplinho: any;

exemplinho = "teste";
exemplinho = 20;
exemplinho = true;
exemplinho = [];

let text2: string;

text2 = exemplinho;

// alteramos sem exibir nenhum erro
