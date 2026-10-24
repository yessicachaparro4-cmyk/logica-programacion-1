
function solicitarNumero(mensaje) {
    let entrada;

    do {
        entrada = prompt(mensaje);

        if (entrada === null) {
            return null;
        }

        if (entrada.trim() === "" ||
            !Number.isFinite(Number(entrada))) {
            alert("Ingresa un número válido.");
        } else {
            return Number(entrada);
        }

    } while (true);
}

const numero1 = solicitarNumero("Ingresa el primer número");

if (numero1 !== null) {
    const numero2 = solicitarNumero("Ingresa el segundo número");

    if (numero2 !== null) {
        const numero3 = solicitarNumero("Ingresa el tercer número");

        if (numero3 !== null) {
            const numeros = [numero1, numero2, numero3];

            const mayorAMenor = [...numeros].sort((a, b) => b - a);
            const menorAMayor = [...numeros].sort((a, b) => a - b);

            console.log("Mayor:", mayorAMenor[0]);
            console.log("Centro:", mayorAMenor[1]);
            console.log("Menor:", mayorAMenor[2]);

            console.log("Mayor a menor:", mayorAMenor.join(", "));
            console.log("Menor a mayor:", menorAMayor.join(", "));

            if (numero1 === numero2 && numero2 === numero3) {
                console.log("Los tres números son iguales.");
            }
        }
    }
}
