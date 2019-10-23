function greatestNrBetween (no1,no2){
    if (no1>no2){
      return "Numarul mai mare dintre " + no1 + " si " + no2 + " este " + no1;
    } else if (no1 === no2){
      return "Numerele sunt egale";
    } else {
      return "Numarul mai mare dintre " + no1 + " si " + no2 + " este " + no2;
    }
  }
  var helloWorldInLang = function (language){
    switch (language){
    case "en": 
        return "Hello World !"
      break;
    case "es": 
        return "Hola Mundo !"
      break;
    case "de": 
        return "Hallo Welt !"
      break;
    default : 
        return "Hello World !"
    }
  }
  function pluralizeWord(string,no){
    if (no <= 0 ){
      return "Numar invalid, adaugati alt numar";
    } else if (no === 1){
      return no + " " + string;
    } else {
      return no + " " + string + "s";
    }
  }
  function salaryTax (salary){
    if (typeof(salary) !== "number"){
      return "Reintroduceti suma in cifre !";
    } else if (salary<0){
      return "Reintroduceti o suma valida, pozitiva !";
    }
    if (salary < 30000){
      return "Pentru un venit anual de " + salary + ", aveti de platit taxe in valoare de 0 $";
    } else if (salary > 30000 && salary < 99999){
      return "Pentru un venit anual de " + salary + ", aveti de platit taxe in valoare de " + salary*0,35 + " $.";
    }else if (salary > 100000){
      return "Pentru un venit anual de " + salary + ", aveti de platit taxe in valoare de " + salary*40/100 + " $.";
    }
  }
  function bigPoints (points){
    if (typeof(points) !== "number"){
        return "Reintroduceti suma in cifre !";
        } else if (points >= 90){
          return "AA"
        } else if (points<90 && points>=80){
          return "AB"
        } else if (points<80 && points>=70){
          return "BB";
        } else if (points<70 && points>=60){
          return "BC";
        } else if (points<60 && points>=50){
          return "CC";
        } else if (points<50 && points>=40){
          return "CD";
        } else if (points<40 && points>=30){
          return "DD";
        } else if (points<= 30){
          return "FF";
        }
  }
  function bigPointsSwitch(points){
  switch(true){
    case points >= 90 :
      return "AA";
    break;
    case points > 80 :
      return "AB";
    break;
    case points > 70 :
      return "BB";
    break;
    case points > 60 :
      return "BC";
    break;
    case points > 50 :
      return "CC";
    break;
    case points > 40 :
      return "CD";
    break;
    case points > 30 :
      return "DD";
    break;
    case points <= 30 :
      return "FF";
    break;
    default :
      return " Valoare nu este acceptata !";
    }
  }
