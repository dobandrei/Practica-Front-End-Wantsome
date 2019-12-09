const capitalizeNames = arr => arr.map(string => string[0].toUpperCase() + string.substr(1).toLowerCase());


const doubleEachNumber = arr => arr.map(number => (typeof number === "number") ? number * 2 : number);


const getPersonsNames = arr => arr.map(key => `${key.name} ${key.surname}`);


const computeExamPass = arr => arr.map(key => (key.grade >= 5) ? `${key.name} ${key.surname} has passed the exam` : `${key.name} ${key.surname} has not passed the exam`);
const computeExamPass = arr => arr.map(key => key.name + " " + key.surname + " " + ((key.grade >= 5) ? "has " : "has not ") + "passed the exam");


const getPersonsDomElements = arr => arr.map(key => "<h1>" + key.name + " " + key.surname + "</h1>" + "<h2>" + key.age + "</h2> ");


let activeMembers = myData.map((obj, index) => (!obj.active) ? myData.splice(index, 1) : obj);


distances.map(obj => obj.distance = obj.distance * 0.621371);
distances.filter(obj => obj.distance < 10000);
distances.reduce((accumulator, obj) => accumulator + obj.distance, 0);


releases.map(obj => {
    delete obj.boxart;
    delete obj.uri;
    delete obj.rating;
    delete obj.bookmark;
});


newReleases.filter(obj => obj.rating === 5).map(obj => obj.id);


movieLists.map(obj => obj.videos.map(obj => obj.id));


movieLists.map(obj => obj.videos.map(obj => obj.id + " " + obj.title + " " + obj.boxarts.filter(obj => (obj.width === 150 && obj.height === 200)).map(obj => obj.url)));


const moveLetters = string => string.split("").map((str,index) => String.fromCharCode(str.charCodeAt(stringArray[index])+1));
 

const changeWordCase = string =>  string.split(" ").map((str,index) => (Number.isInteger(index/2)) ? str.toUpperCase() : str);  


let allCats = arr.filter(obj => obj.species === "cat").map(obj => obj.name);  
let allHumans = arr.filter(obj => obj.species === "human").map(obj => obj.name); 
let allFemales = arr.filter(obj => obj.sex === "f").map(obj => obj.name); 
let totalOfAllAges = arr.reduce((accumulator,obj) => accumulator + obj.age,0);
let averageAgeOfCats =  arr.filter(obj => obj.species === "cat").reduce((accumulator,obj) => accumulator + obj.age,0) / allCats.length;
let averageAgeOfHumans = arr.filter(obj => obj.species === "human").reduce((accumulator,obj) => accumulator + obj.age,0) / allHumans.length;
let avgLengthOfNames = allCats.concat(allHumans).map(obj => obj.split("")).reduce((acc,obj) => acc + obj.length,0) / arr.map(obj => obj.name).length;


const square = value => Math.pow(value,2);
const double = value => value * 2;
const composedValue = (f1,f2,value) => f1(f2(value));


const myFunction = value => compose(square(double(value)));


const find = (array,f) => array.filter(n => f(n)).map(n=>n);