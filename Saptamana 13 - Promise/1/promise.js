const exercise1 = number => {
    let promise = new Promise(function(resolve,reject) {
        if (number<10) {
            resolve("Numarul este mai mic ca 10!");
        } else {
            reject("Numarul este mai mare ca 9!");
            } 
    })
 return promise;
}
exercise1(5)
  .then(result => console.log(result))
  .catch (error => console.log(error));



  const exercise2 = string => {
      let promise = new Promise(function(resolve,reject){
          let array = string.split(" ");
          let newArray = array.filter(s => s === "promise");
          if (newArray.length > 0) {
              resolve("DA contine cuvantul 'promise'!");
          } else {
              reject("Nu contine!");
          }
      })
      return promise;
  }
  exercise2("Acest lucru contine promise")
  .then(result => console.log(result))
  .catch (error => console.log(error));



  const exercise3 = param => {
      let promise = new Promise(function(resolve,reject){
          if (typeof param === "string") {
              setTimeout(resolve(param.toUpperCase()),500);
          } else {
            setTimeout(reject(param.toString()),500);
          }
      })
      return promise;
    }
exercise3("dwadwadw")
.then(result => console.log(result))
.catch (error => console.log(error));



const capitalizeWords = array => {
    let promise = new Promise(function(resolve,reject){
    let newArray = array.filter(s => typeof s !== "string");    
        if (newArray.length === 0) {
            resolve(array.map(s => s.toUpperCase()));
        } else {
          reject("Array-ul NU contine doar string-uri!!!");
        }
    })
    return promise;
  }
const sortWords = array => {
    let promise = new Promise(function(resolve,reject){
        resolve(array.sort());
    })
    return promise;
}
capitalizeWords(["ala",1,"portocala","in","copac"])
.then(result => sortWords(result))
.then(result => console.log(result))
.catch (error => console.log(error));




.then(result => console.log(JSON.parse(result)))