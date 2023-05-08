import {describe, it} from 'node:test';
import assert from 'node:assert/strict';


// PRIMERA PARTE: Condicionales en JavaScript

describe("Condicionales en JavaScript", () => {
    it("Completa el valor del resultado de la aserción para que pase el test", () => {
        let name = "Lara";
        let result = "Lara tiene un nombre corto";

        if (name.length >= 6) {
            result = "Lara tiene un nombre largo"
        }

        // Edita el assert (los "???") para que pase el test
        assert.strictEqual(result,"???");
    })


    it("Completa el valor de la aserción", () => {
        let age = 21;
        let name = "Olga";
        let result;

        if (age >= 18) {
            result = `${name} es mayor de edad.`;
        } else {
            result = `${name} es menor de edad.`
        }

        // Edita el assert (los "???") para que pase el test
        assert.strictEqual(result,"???");
    })


    it("Completa el valor de la aserción", () => {
        let a = "piña";
        let b = "pepperoni";
        let number = 14;
        let result;

        if (number % 7 === 0) {
            result = `Pizza con ${b}`
        } else {
            result = `Pizza con ${a}`
        }

        // Edita el assert (los "???") para que pase el test
        assert.strictEqual(result,"???");
    })
})


// describe("Escribe tus propios tests", () => {
//     it("Si la persona es de Reino Unido (UK), le saludamos en inglés, y si no, le saludamos en castellano", () => {
//         let country = "UK";
//         let greeting;

//         // Escribe aquí tu condicional contemplando las 2 casuísticas. En este caso, el saludo debe ser "¡Hola!" o bien "Hello!".


//         assert.strictEqual(greeting).toBe("Hello!");
//     })


//     it("Para saludar a alguien hay que saber la hora. Si es antes de las 12, le decimos 'Buenos días', si es después de las 12 pero antes de las 20, le decimos 'Buenas tardes', y si es después de las 20, le decimos 'Buenas noches'", () => {
//         let hour = 19;
//         let saludo;

//         // Escribe aquí tu condicional contemplando las 3 casuísticas


//         assert.strictEqual(saludo,"Buenas tardes");
//     })

// })