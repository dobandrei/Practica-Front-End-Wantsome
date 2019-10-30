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

function xTimeString(myString, noTimes) {
    var bigString = myString;
    if (noTimes == 0) {
        return console.log(" Dati o valoare de cel putin 1 pentru concatenare");
    }
    for (var i = 1; i < noTimes; i++) {
        bigString = bigString + myString;
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

function palindrom (myString) {
    var myArray = myString.split("");
    var reverseArray = myString.split("").reverse();
    var stringReverse = reverseArray.join("");
      console.log (myArray + "      " + reverseArray + "    " + stringReverse);
        if (stringReverse == myString) {
            return console.log("ESTE PALINDROM");
        } else {
            return console.log("NU ESTE PALINDROM");
        }
    }
