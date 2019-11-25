const capitalizeNames = arr => arr.map(string => string[0].toUpperCase() + string.substr(1).toLowerCase());

const doubleEachNumber = arr => arr.map(number => (typeof number === "number") ? number*2 : number) ;

const getPersonsNames = arr => arr.reduce((accumulator, x) => accumulator.push(`${x.name} ${x.surname}`));