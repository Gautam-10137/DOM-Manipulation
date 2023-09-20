// 1. Objects:

// window object --> represent browser level object  -->  represent tab/window
// contain all global level objects , variables
console.log(window);

// Document object  --> represent window level object   
// --> created when we load html page
//  --> contain all inf. about current html page
// --> each html document has their document object
console.log(document);

//2. accessing the elements of document object model from its root node-> document
// we can have access to particular node's properties,attributes,content,etc.
console.log(document.getElementById('heading'));

// storing it in variable so that we can manipulate that element.
let heading=document.getElementsByTagName('h1');

let listItem=document.querySelector('li');

let listItems=document.querySelectorAll('li');

let container=document.getElementsByClassName('container');

//3. Now manipulating the dom elements

console.log(heading[0].style); // --> tagName selector returns an array of elements 
listItem.style.color='green';
let h=document.getElementById('heading');
h.style.color='red';

// 4.accessing content inside element  --> all 3 are different
console.log(listItem.textContent)
console.log(listItem.innerHTML);
console.log(listItem.innerText);

// 5.accessing list of items

// listItems.style.fontSize='2rem';   --> can't access all list of items collectively

for(let i=0;i<listItems.length;i++){
    listItems[i].style.fontSize='2rem';     // --> in js we use camel casing for properties instead of using dragon casing as in css
}

// creating element
let ul=document.querySelector('ul');
let li=document.createElement('li');

ul.append(li);



