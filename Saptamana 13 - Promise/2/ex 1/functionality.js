// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
const url = "https://jsonplaceholder.typicode.com/users"

const users = fetch(url).then(rest => rest.json());
users.then(response => {
  const usersIdBiggerThen5 = response.filter( s => s.id > 5);
  const newObj = usersIdBiggerThen5.map( a => {
    return {
      username: a.name,
      city : a.address.city
    };
  })
  console.log(newObj)
});