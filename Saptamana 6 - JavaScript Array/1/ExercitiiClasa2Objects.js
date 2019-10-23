// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name
/*var car = {
  name : "Tesla",
  wheels : 4,
};
car.name = "Mercedes";
console.log(car.name);*/

//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa am rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
/*var car = {
  name : "Dacia",
  wheels : 4,
  doors : 2,
  steeringWheel : "On the left",
};
var keys = Object.keys(car);
var StringKeys = keys.join().toUpperCase();
var valors = Object.values(car);
var StringValors = valors.join().toLowerCase();
var MegaString = StringKeys.concat(" reprezinta ceva super.")
console.log(MegaString);*/

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
/*var user = {
  name : "Ion",
  surname : "Popescu",
  fullName : function() {
              return console.log(this.name + " " + this.surname);
            },
};
user.fullName ();*/

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  }
  
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  
  
  //Ex6
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  }
  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.