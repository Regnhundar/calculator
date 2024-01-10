/** Övning 3 */

/**
 * Skriv en funktion som tar tre parametrar. 
 * De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'. 
 * Utför beräkningen och returnera summan och skriv ut. 
 * Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då) 
 * och varje operation ska vara sin egen funktion. 
 * Tips! Här kan typeof vara bra att använda
 * */

/**
 * 1. Ta in två tal och en sträng som säger vad vi ska göra med dessa tal
 * 2. Kolla att de två första talen är siffror
 * 3. Kolla vilken operations som ska göras (addition, subtraktion etc)
 * 4. Gör uträkning och returnera summan
 * 5. Skriv ut summan
 */

calculate(5, 10, '+');
calculate(5, 10, '-');
calculate(5, 10, '/');
calculate(5, 10, '*');
calculate('hej', 10);
calculate(10, 'Hej');
calculate(5, 10, '^');

function calculate(firstNumber, secondNumber, operation) {
    let operatorer = [`+`, `-`, `*`, `/`];
    if (isNaN(firstNumber)) {
        console.log(`${firstNumber} är inte en siffra.`)
    }
    else if (isNaN(secondNumber)) {
        console.log(`${secondNumber} är inte en siffra.`)
    }
    else if (!operatorer.includes(operation)) {
        console.log(`${operation} är inte en godkänd operatör.`)
    }
    else {
        if (operation === `+`) {
            console.log(add(firstNumber, secondNumber));
        }
        else if (operation === `-`) {
            console.log(subtract(firstNumber, secondNumber));
        }
        else if (operation === `/`) {
            console.log(divide(firstNumber, secondNumber));
        }
        else {
            console.log(multiply(firstNumber, secondNumber));
        }
    }
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}





