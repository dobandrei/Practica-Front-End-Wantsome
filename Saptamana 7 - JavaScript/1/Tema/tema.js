function parImpar(number) { // declar functia de tip named function cu numele 'parImpar' cu 1 parametru, ca numar maxim de iteratii
    if (typeof (number) !== "number") { // verific daca parametrul este diferit de tipul de data numeric
        return console.log("Dati o valoare corecta ca numar !"); // daca este diferit, rog utilizatorul sa introduca un parametru corect
    }
    for (var i = 0; i <= number; i++) { // declar statementul for cu variabila i care incepe de la 0, i sa creasca apoi pana la maxim parametrul dat
        if (i % 2 == 0) { // verific cu If clause daca numarul la rand este par
            console.log("Numarul " + i + " este numar par"); // scriu textul prin comanda console.log "ca numarul este par"
        } else { // cu else clause indic functiei sa-mi selecteze numerele care nu sunt pare, implicit impare
            console.log("Numarul " + i + " este numar impar"); // scriu textul prin comanda console.log "ca numarul este impar"
        }
    }
}

function parImparWhile(number) {// declar functia de tip named function cu numele 'parImparWhile' cu 1 parametru, ca numar maxim de iteratii
    if (typeof (number) !== "number") { // verific daca parametrul este diferit de tipul de data numeric
        return console.log("Dati o valoare corecta ca numar !"); // daca este diferit, rog utilizatorul sa introduca un parametru corect
    }
    var i = 0; // declar de la inceput variabila i ca fiind 0, punct de start
    while (i <= number) { // declar statementul while cu conditia ca variabia i sa fie parcursa pana la maxim parametrul dat
        if (i % 2 == 0) { // verific cu If clause daca numarul la rand este par
            console.log("Numarul " + i + " este numar par"); // scriu textul prin comanda console.log "ca numarul este par"
        } else { // cu else clause indic functiei sa-mi selecteze numerele care nu sunt pare, implicit impare
            console.log("Numarul " + i + " este numar impar"); // scriu textul prin comanda console.log "ca numarul este impar"
        }
        i++; // ma asigur ca variabila este incrementata cu +1
    }
}

function oriTrei(number) {// declar functia de tip named function cu numele 'oriTrei' cu 1 parametru, ca numar maxim de iteratii
    if (typeof (number) !== "number") { // verific daca parametrul este diferit de tipul de data numeric
        return console.log("Dati o valoare corecta ca numar !"); // daca este diferit, rog utilizatorul sa introduca un parametru corect
    }
    var i = 0; // declar de la inceput variabila i ca fiind 0, punct de start
    while (i <= number) { // declar statementul while cu conditia ca variabia i sa fie parcursa pana la maxim parametrul dat
        console.log(i + " * 3 = " + i * 3); // scriu textul prin comanda console.log 
        i++; // ma asigur ca variabila este incrementata cu +1
    }
}

function oriTreiFor(number) { // declar functia de tip named function cu numele 'oriTreiFor' cu 1 parametru, ca numar maxim de iteratii
    if (typeof (number) !== "number") { // verific daca parametrul este diferit de tipul de data numeric
        return console.log("Dati o valoare corecta ca numar !"); // daca este diferit, rog utilizatorul sa introduca un parametru corect
    }
    for (var i = 0; i <= number; i++) { // declar statementul for cu variabila i care incepe de la 0, i sa creasca apoi pana la maxim parametrul dat
        console.log(i + " * 3 = " + i * 3); // scriu textul prin comanda console.log conform cerintei
    }
}

function multiplyMyNumber(number){ // solutie data de Ovidiu
    for (var i= 0; i <= number; i++){
       for (var j = 0; j <= 10; j++){
            var res = i * j;
            console.log(i + "*" + j + "=" + res);
       }
    }
}

function tablaInmultirii(number) { // declar functia de tip named function cu numele 'tablaInmultirii' cu 1 parametru, ca numar maxim de iteratii
    if (typeof (number) !== "number") { // verific daca parametrul este diferit de tipul de data numeric
        return console.log("Dati o valoare corecta ca numar !"); // daca este diferit, rog utilizatorul sa introduca un parametru corect
    }
    for (var i = 1; i <= number; i++) { // declar statementul for cu variabila i care incepe de la 1, i sa creasca apoi pana la maxim parametrul dat
        console.log(i + " * 0 = " + i * 0 + "\n" + // aplic "\n" ca despartior al stringului
            i + " * 1 = " + i * 1 + "\n" + // prima data am scris gresit "/n"
            i + " * 2 = " + i * 2 + "\n" + // a 2-a oara am realizat ca nu am pus + inaintea lui "\n"
            i + " * 3 = " + i * 3 + "\n" + // a 3-a oara am realizat ca nu am pus + dupa "\n"
            i + " * 4 = " + i * 4 + "\n" + // dar i-am dat de capat
            i + " * 5 = " + i * 5 + "\n" +
            i + " * 6 = " + i * 6 + "\n" +
            i + " * 7 = " + i * 7 + "\n" +
            i + " * 8 = " + i * 8 + "\n" +
            i + " * 9 = " + i * 9 + "\n" +
            i + " * 10 = " + i * 10); // scriu textul prin comanda console.log conform cerintei
    }
}

function verificarePunctaj(number) { // declar functia de tip named function cu numele 'verificarePunctaj' cu 1 parametru, ca numar maxim de iteratii
    if (typeof (number) !== "number") { // verific daca parametrul este diferit de tipul de data numeric
        return console.log("Dati o valoare corecta ca numar !"); // daca este diferit, rog utilizatorul sa introduca un parametru corect
    }
    var calificativFor = function (punctaj) { //Declar functia de tip function expresion si un parametrul, astfel incat sa intelegem ce face si ce parametru preia
        switch (true) { // Apoi am inceput sa punem conditiile
            case punctaj >= 1 && punctaj <= 3: // am lasat comparatia simpla, in cazul in care se introduce un numar ca string, sa-l poata citi
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
            default: // in cazul in care se introduce alt numar decat cele dintre 1-10, sau alt tip de data, va aplica regula default
                return "Va rugam reintroduceti un punctaj de la 1 la 10!";
        }
    }
    for (var i = 1; i <= number; i++) {
        console.log(calificativFor(i)); // in console.log folosim functia calificativul intr-o iteratie a variabilei i de la 1 la numar maxim dat 
    }
}