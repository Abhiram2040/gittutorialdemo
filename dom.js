//EXAMINE THE DOCUMENT OBJECT//
//console.dir(document);
//console.log(document.domian);
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='Hello';


//GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>';
headerTitle.style.borderBottom='solid 3px #000'

//GETELEMENTSBYCLASSNAME//
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textcontent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'green';

