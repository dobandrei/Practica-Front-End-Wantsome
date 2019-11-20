<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <title>Our superheroes</title>

   <link href="https://fonts.googleapis.com/css?family=Faster+One|Press+Start+2P|Stalinist+One" rel="stylesheet">
 
  </head>

  <body>

      <header>

      </header>

      <section>

      </section>
  </body>
  <script>
    
    let requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var superHeroes = request.response;
  const bodyHeader = document.querySelector("header");
  const titleH1 = document.createElement("h1");
    bodyHeader.appendChild(titleH1);
    titleH1.textContent = superHeroes.squadName;
  const body = document.querySelector("body");
  const titleP1 = document.createElement("p");
    bodyHeader.appendChild(titleP1);
    titleP1.textContent = "Hometown: " +            superHeroes.homeTown + " // Formed: " + superHeroes.formed;
const section = document.querySelector("section");
for (let i=0;i<superHeroes.members.length;i++) {
let article = document.createElement("article");
section.appendChild(article);
const articleH2 = document.createElement("h2");
article.appendChild(articleH2);  
articleH2.textContent = superHeroes.members[i].name;
const paragr1 = document.createElement("p");
    article.appendChild(paragr1);
    paragr1.textContent = "Age: " + superHeroes.members[i].age;
  const paragr2 = document.createElement("p");
    article.appendChild(paragr2);
    paragr2.textContent = "Secret Identity: " + superHeroes.members[i].secretIdentity;
  const paragr3 = document.createElement("p");
    article.appendChild(paragr3);
    paragr3.textContent = "Superpowers: ";
const ul = document.createElement("ul");
  paragr3.appendChild(ul);
for (let j=0;j<superHeroes.members[i].powers.length;j++) {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = superHeroes.members[i].powers[j];
} 
}    
    }
  </script>
</html>
