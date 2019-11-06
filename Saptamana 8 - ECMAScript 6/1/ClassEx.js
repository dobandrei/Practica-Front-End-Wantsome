//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
function sumOrMultiply(number1, number2) {
    let result;
    if (number1 === number2) {
        result = number1 * number2;
    } else {
        result = number1 + number2;
    }
    return result;
}
//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
function true30(number1, number2) {
    let result = false;
    if (number1 === number2 && number1 === 30) {
        result = true;
    } else if (number1 + number2 == 30) {
        result = true;
    }
    return result;
}
//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu, incepe sa-l adauge
function jsString(myString) {
    let myArray = myString.split("");
    if (myArray[0] === "J" && myArray[1] === "S") {
        return myString;
    } else {
        return "JS" + myString;
    }
}

//Ex4m
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function doublesString(myString) {
    let myArray = myString.split("");
    for (let i = 0; i < myArray.length - 1; i++) {
        for (let f = i + 1; f < myArray.length; f++) {
            if (myArray[i] === myArray[f]) {
                myArray.splice(f, 1);
                f--;
            }
        }
    }
    return myArray.join("");
}

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
function findLongestString(myString) {
    let myArray = myString.split(" ");
    let result = myArray[0];
    for (let i = 1; i < myArray.length - 1; i++) {
        if (result.length < myArray[i].length) {
            result = myArray[i];
        }
    }
    return result;
}

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
function printStars(number) {
    let result = "*"
    console.log(result);
    for (let i = 1; i < number; i++) {
        result = result.concat(" *");
        console.log(result);
    }
}
function printStarsArray(number) {
    let result = [];
    console.log(result.join());
    for (let i = 0; i < number; i++) {
        result.push("*");
        console.log(result.join(" "));
    }
}

//ex7
// append any negative numbers found in the numbers array 
// into the negativeNumbers array constant variable above
const negativeNumbers = [];
function extractNegativeNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }
    return negativeNumbers;
}
extractNegativeNumbers([1, 2, -5, 4, -6])

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function calculate(number1, number2, operator) {
    switch (operator) {
        case "substract":
            return number1 - number2;
            break;
        case "add":
            return number1 + number2;
            break;
        case "multiply":
            return number1 * number2;
            break;
        case "divide":
            return number1 / number2;
            break;
        default:
            return "Operatorul nu exista, va rugam sa alegeti din lista de operatori: add, substract, multiply, divide !";
    }
}

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul 
//sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7
function isDiv(number) {
    switch (true) {
        case Number.isInteger(number / 3) && Number.isInteger(number / 5):
            return "BOTH"
            break;
        case Number.isInteger(number / 3):
            return "THREE";
            break;
        case Number.isInteger(number / 5):
            return "FIVE";
            break;
        default:
            return number;
    }
}

//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38
function whatIsToday() {
    let day = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];
    let o = new Date();
    return "Azi este : " + day[o.getDay()] + "\n" + "Ora este : " + o.getHours() + " : " + o.getMinutes() + " : " + o.getSeconds();
}

const whatIsToday = () => {
    let day = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];
    let o = new Date();
    return `Azi este : ${day[o.getDay()]} 
Ora este : ${o.getHours()} : ${o.getMinutes()} : ${o.getSeconds()}`;
}

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e 
// corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false
function corectPin(stringNumber) {
    console.log(stringNumber.length);
    if (typeof stringNumber !== "string" || stringNumber.length !== 6 && stringNumber.length !== 4) {
        return false;
    } else {
        for (let i = 0; i < stringNumber.length; i++) {
            if (stringNumber.charCodeAt(i) < 48 || stringNumber.charCodeAt(i) > 57) {
                return false;
            }
        }
        return true;
    }
}

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"
const vowelsInString = string => {
    let temporaryString = "";
    for (let i = 0; i < string.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].indexOf(string.charAt(i).toLowerCase()) === -1) {
            temporaryString += string.charAt(i);
        }
    }
    return temporaryString;
}

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false
const squareNumber = number => (Number.isInteger(Math.sqrt(number))) ? true : false;

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string 
// se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true
const isAnagram = (myString1,myString2) => (myString1.toLowerCase().split("").sort().join("").trim() === myString2.toLowerCase().split("").sort().join("").trim()) ? true : false;