function protectEmail(email) {
    var position = email.search("@");
    return console.log(email.slice(0, 3) + "..." + email.slice(position));
}

function EveryFirstLetterCap(myString) {
    var myArray = myString.split(" ");
    var result = myArray.shift();
    var firstLetter = result.charAt(0).toUpperCase();
    result = result.replace(result.charAt(0), firstLetter);

    for (var i = 0; i = myArray.length;) {
        var nextString = myArray.shift();
        firstLetter = nextString.charAt(0).toUpperCase();
        nextString = nextString.replace(nextString.charAt(0), firstLetter);
        result += " " + nextString;
    }
    console.log(result);
}

function invertUpperToLower(myString) {
    myArray = myString.split("");
    var result = myArray.shift();
    if (result.toUpperCase() !== result) {
        result = result.toUpperCase();
    } else {
        result = result.toLowerCase();
    }
    var i = 0;
    while (i = myArray.length) {
        var nextLetter = myArray.shift();
        if (nextLetter.toUpperCase() !== nextLetter) {
            nextLetter = nextLetter.toUpperCase();
        } else {
            nextLetter = nextLetter.toLowerCase();
        }
        result += nextLetter;
    }
    return console.log(result);
}

function xTimeStringConcat(myString, noTimes) {
    var bigString = myString;
    if (noTimes == 0) {
        return console.log(" Dati o valoare de cel putin 1 pentru concatenare");
    }
    for (var i = 1; i < noTimes; i++) {
        bigString = bigString.concat(myString);
    }
    console.log(bigString);
}

function palindrom(myString) {
    var myArray = myString.split();
    var reverseArray = myArray.reverse();
    if (myArray === reverseArray) {
        return console.log("Este palindrom");
    } else {
        return console.log("NU este palindrom");
    }
}

function palindrom(myString) {
    var myArray = myString.split("");
    var reverseArray = myString.split("").reverse();
    var stringReverse = reverseArray.join("");
    if (stringReverse == myString) {
        return console.log("ESTE PALINDROM");
    } else {
        return console.log("NU ESTE PALINDROM");
    }
}

function bigNoInArrays(myArray) {
    var result = [];
    for (var i = 0; i < myArray.length; i++) {
        myArray[i].sort(function (a, b) { return b - a });
        result.push(myArray[i].shift());
    }
    return console.log(result);
}

function reverseString(myString) {
    var myArray = myString.split("");
    var reverseArray = myString.split("").reverse();
    var stringReverse = reverseArray.join("");
    return stringReverse;
}

function factorNo(myNumber) {
    var result = 1;
    if (myNumber === 0) {
        return console.log(result);
    }
    for (var i = 1; i <= myNumber; i++) {
        result = result * i;
    }
    return console.log(result);
}

function stringInString(string1, string2) {
    if (string1.length < string2.length) {
        return "Va rugam sa tineti cont ca al 2-lea parametru trebuie sa fie mai mic decat primul parametru";
    }
    var reverseArray1 = string1.split("").reverse();
    var reverseArray2 = string2.split("").reverse();
    for (var i = 0; i < string2.length; i++) {
        if (reverseArray1[i] !== reverseArray2[i]) {
            return console.log("Stringul principal nu se termina cu stringul 2, stringul 2 este diferit !");
        }
    }
    return console.log("Stringul 1 se termina cu stringul 2");
}



function isPrime(number) {
    if (number <= 0) {
        return false;
    } else {
        for (var i = 2; i < number; i++) {
            if (Number.isInteger(number / i)) {
                return false;
            }
        }
        return true;
    }
}
function firstPrimeNoInArray(myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++) {
        if (isPrime(myArray[i])) {
            return console.log(myArray[i]);
        }
    }
    return console.log("Nu exista numere prime in Array!");
}
firstPrimeNoInArray([4, 8, 312], isPrime());


function stringLettersCheck(string1, string2) {
    var myArray1 = string1.split("");
    var myArray2 = string2.split("");
    for (var i = 0; i < string2.length; i++) {
        var theSame = false;
        for (var f = 0; f < string1.length; f++) {
            if (myArray2[i] === myArray1[f]) {
                theSame = true;
                break;
            }
        }
        if (theSame === false) {
            return console.log("NU toate literele din string 2 se regasesc si in string 1!");
        }
    }
    return console.log("Toate literele din string 2 se regasesc si in string 1!");
}

function lastNoInArrayListing(myArray, number) {
    var arrayEl = [];
    if (myArray[0] === number) {
        return console.log(arrayEl);
    }
    var i = 0;
    while (myArray[i] !== number && i < myArray.length) {
        arrayEl += myArray[i];
        i++;
    }
    return console.log(arrayEl);
}

function eliminateFalseNull(myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === false ||
            myArray[i] === null ||
            myArray[i] === 0 ||
            myArray[i] === "" ||
            typeof myArray[i] === "undefined" ||
            isNaN(myArray[i])) {
                myArray.splice(i, 1);
                i--;
        }
    }
}

function xTimeString(myString, Times) {
    var bigString = myString;
    if (Times == 0) {
        return console.log(" Dati o valoare de cel putin 1 pentru concatenare");
    }
    for (var i = 1; i < Times; i++) {
        bigString = bigString + myString;
    }
    console.log(bigString);
}
