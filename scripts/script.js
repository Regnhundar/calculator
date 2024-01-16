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

calculate(5, 10, '+'); // Anropar funktionen calculate och skickar med 3 värden.
calculate(5, 10, '-');
calculate(5, 10, '/');
calculate(5, 10, '*');
calculate('hej', 10);
calculate(10, 'Hej');
calculate(5, 10, '^');

function calculate(firstNumber, secondNumber, operation) { // Tar emot värden i den ordningen de skickas. Första värdet sparas i parametern firstNumber osv.
    let operatorer = [`+`, `-`, `*`, `/`]; // Skapar en array med operatörer. Den här används sedan för att se att tecknet är godkänt.
    if (isNaN(firstNumber)) { // Gör en kontroll på parametern firstNumber. isNan står för "is Not a Number". Så om parametern firstNumber inte är ett nummer så uppfylls kravet på if satsen.
        console.log(`${firstNumber} är inte en siffra.`)
    }
    else if (isNaN(secondNumber)) { // samma som ovan.
        console.log(`${secondNumber} är inte en siffra.`)
    }
    else if (!operatorer.includes(operation)) { // Här kollas ifall parametern operation INTE finns i variabeln operatorer.
        console.log(`${operation} är inte en godkänd operatör.`)
    }
    else { // Om alla parametrar är godkända hamnar vi i denna else.
        if (operation === `+`) { // Här kollar vi om den tredje parametern som skickades in är ett +.
            console.log(add(firstNumber, secondNumber)); // Om så är fallet så skriver vi ut resultatet av funktionen add(). Vi skickar med våra parametrar firstNumber och secondNumber
        }
        else if (operation === `-`) { // Se ovan fast med -.
            console.log(subtract(firstNumber, secondNumber));
        }
        else if (operation === `/`) { // Se ovan fast med /.
            console.log(divide(firstNumber, secondNumber));
        }
        else { // Då det endast är ett möjligt tecken kvar att kolla kan vi göra det med en else sats istället för att se vilket tecken det var.
            console.log(multiply(firstNumber, secondNumber));
        }
    }
}

function add(firstNumber, secondNumber) { // Funktionen som anropas ifall if-satsen på rad 40 är true.
    return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber) { // Funktionen som anropas ifall if-satsen på rad 43 är true.
    return firstNumber - secondNumber
}

function divide(firstNumber, secondNumber) { // Funktionen som anropas ifall if-satsen på rad 46 är true.
    return firstNumber / secondNumber
}

function multiply(firstNumber, secondNumber) { // Funktionen som anropas på rad 49 via en else sats. Om det är varken `+`, `-` eller `/` så är det bara `*` kvar.
    return firstNumber * secondNumber
}


