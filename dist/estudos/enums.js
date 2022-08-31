// Conjunto de constantes que podemos atribuir nomes para agilizar o trabalho os referenciando mais facilmente
var Exemplo1;
(function (Exemplo1) {
    Exemplo1[Exemplo1["ANA"] = 0] = "ANA";
    Exemplo1[Exemplo1["MARIA"] = 1] = "MARIA";
    Exemplo1[Exemplo1["RITA"] = 2] = "RITA";
})(Exemplo1 || (Exemplo1 = {}));
// Vai sempre trazer a posição pra facilitar, mas podemos alterar manualmente:
var Exemplo2;
(function (Exemplo2) {
    Exemplo2[Exemplo2["ANA"] = 1] = "ANA";
    Exemplo2[Exemplo2["MARIA"] = 2] = "MARIA";
    Exemplo2[Exemplo2["RITA"] = 3] = "RITA";
})(Exemplo2 || (Exemplo2 = {}));
var Exemplo3;
(function (Exemplo3) {
    Exemplo3["ANA"] = "Ana";
    Exemplo3["MARIA"] = "Maria";
    Exemplo3["RITA"] = "Rita";
})(Exemplo3 || (Exemplo3 = {}));
// Obs.: Não existe no JS por padrão
