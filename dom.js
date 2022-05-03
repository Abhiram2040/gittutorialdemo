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
//headerTitle.style.borderBottom='solid 3px #000'

//GETELEMENTSBYCLASSNAME//
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[2].style.backgroundColor = 'green';

//for(var i=0; i<items.length;i++){
//    items[i].style.fontWeight = 'bold';
//}

//GETELEMENTSBYTAGNAME//
//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'Hello 2';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'green';

//for(var i=0; i < li.length;i++){
//    li[i].style.backgroundColor = '#f4f4f4';
//}

// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value='Hello world'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.background = 'green';

var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color = 'transparent';

//QUERYSELECTORALL//
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');


for(var i=0;i < odd.length;i++){
   odd[i].style.backgroundColor = 'green';
}

// var items = document.getElementsByClassName('li-element');
// console.log(items);
// console.log(items[0]);
// items[0].style.backgroundColor = 'green';

// for(var i=0; i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

//GETELEMENTSBYTAGNAME//
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[4]);
// li[4].textContent = 'Hello 2';
// li[4].style.fontWeight = 'bold';
// li[4].style.backgroundColor = 'green';

// for(var i=0; i < li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }
