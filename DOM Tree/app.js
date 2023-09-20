// Parent Node  Traversal
let ul=document.querySelector('ul');
console.log(ul.parentNode);
//  or
console.log(ul.parentElement);
// also can find grandparents......
console.log(ul.parentNode.parentNode.parentNode);

// parentNode vs parentElement  --> node can be text,linebreak,comment but element will be html tag.

// html element
const html=document.documentElement;
console.log(html);

// document element
console.log(html.parentNode);
console.log(html.parentElement); //null document is not an element 

// ----------------------------------------------------------------------\

// Child Node Traversal
console.log(ul.childNodes);   // Indentation is also taken as node

// first child & last child
console.log(ul.firstChild);
console.log(ul.lastChild);

// trying style property with list nodes instead of text nodes
ul.childNodes[1].style.backgroundColor='green'

// taking only html elements
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Sibling Node Traversal
let div=document.querySelector('div');
console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

