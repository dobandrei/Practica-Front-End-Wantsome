function sexById (numberId){ // Am denumit functia si parametrul, astfel incat sa intelegem ce face si ce parametru preia
    if (typeof(numberId) !== "number"){ // Prima data verific daca parametrul introdus este numar
      return "Va rugam reintroduceti un CNP valabil, format doar din cifre !";
    }
    var stringNumberId = numberId.toString(); // Ca sa pot masura lungimea sa, creez o variabila care ii cloneaza forma ca string
     if (stringNumberId.length != 13){ // A doua verificare este daca CNP-ul are 13 caractere
      return "CNP-ul nu contine toate cifrele, va rugam reintroduceti un CNP valabil !";
    }
    if (stringNumberId.charAt(0) == 1){ // Ultima verificare este pe prima cifra, in cazul nostru prima litera din string
      return "Persoana verificata este de sexul Masculin";
    } else if (stringNumberId.charAt(0) == 2){
      return "Persoana verificata este de sexul Feminin";
    } else {
      return "CNP-ul a fost introdus gresit, va rugam reintroduceti un CNP valabil !";
    }
  }

  var calificativ = function (punctaj){ // Am denumit functia si parametrul, astfel incat sa intelegem ce face si ce parametru preia
    switch(true){ // Apoi am inceput sa punem conditiile
      case punctaj >= 1 && punctaj < 3: // am lasa comparatia simpla, in cazul in care se introduce un numar ca string, sa-l poata citi
        return "Calificatul corespunzator punctajului " + punctaj + " este E";
      break;
      case punctaj >= 3 && punctaj <= 6:
        return "Calificatul corespunzator punctajului " + punctaj + " este D";
      break;
      case punctaj == 7 || punctaj == 8:
        return "Calificatul corespunzator punctajului " + punctaj + " este B";
      break;
      case punctaj == 9:
        return "Calificatul corespunzator punctajului " + punctaj + " este A";
      break;
      case punctaj == 10:
        return "Calificatul corespunzator punctajului " + punctaj + " este A+";
      break;
      default : // in cazul in care se introduce alt numar decat cele dintre 1-10, sau alt tip de data, va aplica regula default
        return "Va rugam reintroduceti un punctaj de la 1 la 10!";
      }
  }

  // VARIANTA 1  - IF CLAUSE
  var typeCar = function (marca) { 
    if (typeof(marca) !== "string"){ // Prima data verific daca parametrul introdus este string
        return "Va rugam reintroduceti o denumire corecta de marca de masina !";
        } // Urmeaza sa folosesc 6 conditii pe 6 parametri, cu default Marca este necunoscuta.
    if (marca.toUpperCase()  === "MERCEDES"){ // Am folosit functia to.UpperCase() ca sa ma asigur ca indiferent cum este introdus paramentrul, voi primi rezultat
      return  "Marca " + marca + " se produce in Germania.";
      } else if (marca.toUpperCase() === "BMW"){
      return  "Marca " + marca + " se produce in Germania.";
      } else if (marca.toUpperCase()  === "AUDI"){
      return  "Marca " + marca + " se produce in Germania.";
      } else if (marca.toUpperCase()  === "FIAT"){
      return  "Marca " + marca + " se produce in Italia." ;
      } else if (marca.toUpperCase()  === "CITROEN"){
      return  "Marca " + marca + " se produce in Franta";
      } else if (marca.toUpperCase()  === "DACIA"){
      return  "Marca " + marca + " se produce in Romania.";
      } else {
      return "Marca este necunoscuta.";
      }
  }
  // VARIANTA 2 - SWITCH CLAUSE
  var typeCar = function (marca) { 
    if (typeof(marca) !== "string"){ // Prima data verific daca parametrul introdus este string
        return "Va rugam reintroduceti o denumire corecta de marca de masina !";
    }
    switch(true){
        case marca.toUpperCase() === "MERCEDES":
            return "Marca " + marca + " se produce in Germania.";
            break;
        case marca.toUpperCase() === "BMW":
            return "Marca " + marca + " se produce in Germania.";
            break;
        case marca.toUpperCase() === "AUDI":
            return "Marca " + marca + " se produce in Germania.";
            break;
        case marca.toUpperCase() === "FIAT":
            return "Marca " + marca + " se produce in Italia.";             
            break;
        case marca.toUpperCase() === "CITROENT":
            return "Marca " + marca + " se produce in Franta.";             
            break;
        case marca.toUpperCase() === "DACIA":
            return "Marca " + marca + " se produce in Romania.";             
             break;   
        default : // in cazul in care se introduce alt tip de date sau alta marca din cele 6, se va aplica regula default
            return "Marca este necunoscuta.";
    }
  }
  // VARIANTA 3 - OBJECT LITERALS
  var typeCar = function (marca) { 
    if (typeof(marca) !== "string"){ 
        return "Va rugam reintroduceti o denumire corecta de marca de masina !";
    } 
    var options = { // declaram un obiect cu toate optiunile noastre de masini
      'DACIA' : 'Romania',
      'CITROEN' : 'Franta',
      'MERCEDES' : 'Germania',
      'FIAT' : 'Italia',
      'AUDI' : 'Germania',
      'BMW' : 'Germania',
      'default' : "Marca este necunoscuta.",
    };
   if (options[marca.toUpperCase()]){ // ne folosim de keys-urile obiectului pentru a intra in condiitii, astfel daca parametrul a fost dat corect, vom avea rezultat
   return "Marca " + marca + " se produce in " + options[marca.toUpperCase()];
   } else {
     return options['default']; // daca parametrul va fi dat gresit ne va da default
   }
  } // din cauza ca avem 2 optiuni, cu 2 texte diferite folosim si If clause
  