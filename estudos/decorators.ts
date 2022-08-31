function Log() {
  return function (target, key, descriptor) {
    const oroginalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log("--------------------------");
      console.log(
        `Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`
      );

      const result = oroginalMethod.apply(this, args);

      console.log(`O método ${key} retornou: ${JSON.stringify(result)}`);
      console.log("--------------------------");

      return result;
    };
  };
}

class Planet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Log() // usamos para alterar o funcionamento de algo na aplicação
  calculate(value: number) {
    console.log(`Calculando ${value} vezes 2`);

    return value * 2;
  }

  @Log()
  invertName() {
    return this.name.split("").reverse().join("");
  }
}

const planet = new Planet("Terra");

const result = planet.calculate(5);

console.log(`Resultado: ${result}`);

planet.invertName();
