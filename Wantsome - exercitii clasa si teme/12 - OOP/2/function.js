//1. Creati o clasa Person care sa aiba firstName si lastName in constructor
//2.aduagati o metoda displayPersonName care sa returneze numele complet
//3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva

class Person {
    constructor(firstName,lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }
    displayPersonName() {
      return console.log(this.firstName + " " + this.lastName);
    } 
  }
  const newPerson = new Person("Dob","Andrei"); 
  newPerson.displayPersonName();

  //1. Creati o clasa Animal care sa aiba in constructor name si weight
class Animal{
    constructor(name,weight) {
      this.name = name;
      this.weight = weight;
    }
    //2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
    eatFood(){console.log(`${this.name} is eating.`)}
    sleep() {console.log(`${this.name} is sleeping.`)}
    weakingUp(){console.log(`${this.name} is weaking up.`)}
  }
  //3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
  class Dog extends Animal {
    constructor(name,weight){
    super(name,weight);
      }
    //4. Adaugati 4 metode noi:
    //   walking - $name is walking
    //   rage - $name is rageing 
    //   showBehaviour - returnati metodele eatFood si rage
    //   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep
    walking() {console.log(`${this.name} is walking.`)}
    rage() {console.log(`${this.name} is rageing.`)}
    showBehavior() {
      super.eatFood();
      this.rage();
    }
    dailyRoutine() {
      super.weakingUp()
      this.rage();
      super.eatFood();
      super.sleep();
    }
  }
 //5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
const dog1 = new Dog("Tomi",50);
//6. Accesati toate cele 4 metode de pe noul animal. 
dog1.dailyRoutine();
dog1.showBehavior();
dog1.walking();
dog1.rage();


//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa iba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu

class Account {
  constructor(location, name) {
      this.location = location;
      this.name = name;
  };
};

class Transaction {
  constructor(sender, bank, amount, reference) {
      this.sender = sender;
      this.bank = bank;
      this.amount = amount;
      this.reference = reference;
  };
  get finalSum() {
      return this.amount - 10;
  };
};

class Table {
  transactions = [];
  addTransaction(...arr) {
      this.transactions.push(...arr);
  };
};

let bankAccount = new Account('iasi', 'Bogdan');
let transaction1 = new Transaction('Trump', 'ING', 3500, '09988766');
let transaction2 = new Transaction('Dragnea', 'BT', 12000, '09912766');
let transaction3 = new Transaction('Mama', 'Raiffeisen', 500, '45688766');

let table = new Table();
table.addTransaction(transaction1, transaction2, transaction3);


console.log(transaction1);
// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...)
// console.log(table)