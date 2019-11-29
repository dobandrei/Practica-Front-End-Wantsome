//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

//3
// Bonus: faceti sa functioneze si la key press pe langa click
const sqrNum = number => {
    const inputSqr = document.getElementById("square").value;
    console.log(Math.sqrt(inputSqr));
  
  };
  const halfNum = number => number/2;
  const percentNum = (n1,n2) => (n/100)*n2;
  const areaCircle = raza => Math.PI*Math.pow(raza,2);
  
  
  const buttonSqr = document.getElementById("sqr-btn");
  buttonSqr.addEventListener("click",sqrNum);