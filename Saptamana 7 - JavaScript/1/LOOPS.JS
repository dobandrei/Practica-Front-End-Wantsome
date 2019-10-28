function iteratieWhile(numar) {
    if (typeof (numar) !== "number") {
        return console.log("Dati o valoare corecta ca numar !");
    }
    var i = 0;
    while (i < numar) {
        console.log("Sunt la iteratie nr " + i);
        i++;
    }
}

function iteratieFor(numar) {
    if (typeof (numar) !== "number") {
        return console.log("Dati o valoare corecta ca numar !");
    }
    for (var i = 0; i < numar; i++) {
        console.log("Sunt la iteratie nr " + i);
    }
}

function arrayElementsFor(myArray) {
    if (!Array.isArray(myArray)) {
        return console.log("Ati introdus gresit date, va rugam introduceti un array de elemente !");
    }
    for (var i = 0; i < myArray.length; i++) {
        console.log("Elementul pe pozitia " + i + " este " + myArray[i]);
    }
}

function arrayElementsWhile(myArray) {
    if (!Array.isArray(myArray)) {
        return console.log("Ati introdus gresit date, va rugam introduceti un array de elemente !");
    }
    i = 0;
    while (i <= myArray.length - 1) {
        console.log("Elementul pe pozitia " + i + " este " + myArray[i]);
        i++;
    }
}
function objectElementsWhile (myObject){
    if (typeof(myObject) !== "object"){
      return console.log("Ati introdus gresit datele, va rugam introduceti un obict cu elemente !");
    }
    i=0;
    var KeysObject = Object.keys(myObject);
    console.log(KeysObject);
    var ValuesObject = Object.values(myObject);
    while (i <= KeysObject.length - 1){
      console.log("Obiectul are proprietatea " + KeysObject[i] + " cu valoarea " + ValuesObject[i]);
      i++;
    }
  }

function objectElementsForIn (Object){
    if (!typeof(Object)){
      return console.log("Ati introdus gresit datele, va rugam introduceti un obict cu elemente !");
    }
    for (var key in Object){
      console.log("Obiectul are keya " + key + " cu valoarea " + Object[key]);
    }
  }
  var myObject = {
    name : "John",
    age : 35,
  }
function dinamic00 (number){
    for (var i = 0; i <= number; i++){
        console.log(i * 100 );
    }
  }
  function dinamic2 (numberMax){
    for (var i = 1; i <= numberMax; i+=i){
      console.log(i);
    }
  }
  function even(number){
    for (var i = 0; i <= number; i++){
      if (i % 2 == 0) {
      console.log(i);
      }
    }
  }
  function ThirdNo (number){
    for (var i = 1; i <= number; i++){
      console.log(i * 3);
    }
  }
  function descending(number){
    for (var i = number; i >= 0; i--){
      console.log(i);
    }
  }
  function threeTimes (numberMax){
    for (var i = 1; i <= numberMax; i++){
      console.log(i + " " + i + " " + i);
    }
  }