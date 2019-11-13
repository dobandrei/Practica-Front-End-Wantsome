const head = document.getElementById('test');
head.style.backgroundColor = 'red';
const second = document.getElementsByClassName('test');
second[0].style.backgroundColor = 'yellow';
second[1].style.backgroundColor = 'blue';
const sections = document.getElementsByTagName('section');
sections[0].style.backgroundColor = 'grey';
sections[1].style.backgroundColor = 'pink';
const query = document.querySelector('#test-query');
query.style.backgroundColor = 'red';
const queryAll = document.querySelectorAll(".test-query-all");
queryAll[0].style.backgroundColor = 'yellow';
queryAll[1].style.backgroundColor = 'blue';



const ul = document.getElementsByTagName('ul')[0];
const lii = ul.children;
lii[1].style.backgroundColor = "yellow";
lii[1].nextElementSibling.style.backgroundColor = "blue";
lii[1].previousElementSibling.style.backgroundColor = "red";