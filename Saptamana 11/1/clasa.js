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


const moveLetters = function(string){
    let stringArray = string.split("");
    return stringArray.map((str,index) => String.fromCharCode(str.charCodeAt(stringArray[index])+1));
    };




