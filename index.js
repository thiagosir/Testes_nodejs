const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verificaSe = (valor) => {
    const assercoes = {
        ehExatamenteIgualA(esperado) {
            if (valor !== esperado) {
                throw {}
            }
        },
    };
    return assercoes;
}

const teste = (titulo, funcaoDeTeste) => {
    try {
        funcaoDeTeste();
        console.log(`${titulo} passou!`);
    } catch (error) {
        console.error(`${titulo} não passou!!`);
    }
};

teste('somaHorasExtras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    verificaSe(esperado).ehExatamenteIgualA(retornado);
});

teste('calculaDesconto', () => {
    const esperado = 2200;
    const retornado = calculaDescontos(2500, 100);

    verificaSe(esperado).ehExatamenteIgualA(retornado);
});
