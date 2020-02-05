function closure(number) {
    let a = number;
    return function () {
        a++; // va adauga +1 de fiecare data cand e apelata closure();
        return a;
    }
}

let objClone = { ...obj }; // cloneaza un obiect in js6

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 
pana la valoarea specificata.
*/
var sumNumbersUpToNew = function (limit) {
    var sum = 0;
    for (var i = 1; i <= limit; i++) {
        sum += i;
    }
    return sum;
}

const sumNumbersUpToNew = limit => {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum += i;
    }
};


/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
const findLongestString = myString => {
    const myArray = myString.split(" ");
    let result = myArray[0];
    for (let i = 1; i < myArray.length - 1; i++) {
        if (result.length < myArray[i].length) {
            result = myArray[i];
        }
    }
    return result;
}
//varianta 2
const find2 = myString => myString.split(" ").sort((a, b) => b - a)[0];

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
const reverseString = myString => myString.split("").reverse().join("");

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu 
urmatoarea litera din alfabet
*/
const nextAlphLetterString = myString => {
    for (let i = 0; i < myString.length; i++) {
        let letter = myString.charCodeAt(i) + 1;
        myString.replace(myString.charAt(i), String.fromCharCode(letter));
        console.log(String.fromCharCode(letter));
    }
    return console.log(myString);
}

const nextAlphLetterString = myString => {
    let myTempString = "";
    for (let i = 0; i < myString.length; i++) {
        let letter = myString.charCodeAt(i) + 1;
        myTempString += String.fromCharCode(letter);
    }
    return myTempString;
}

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la 
numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
const convertToTime = number => Math.floor(number / 60) + " : " + (number - 60 * Math.floor(number / 60));

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
const alphabeticString = string => string.split("").sort().join("");

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
const plusString = myString => {
    let plus = "+";
    myArray = myString.split("");
    if (myArray[0] !== plus || myArray[myArray.length - 1] !== plus) {
        return false;
    }
    for (let i = 1; i < myArray.length; i += 2) {
        if (myArray[i] === plus) {
            return false;
        }
    }
    return true;
}
