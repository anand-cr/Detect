//! Traversing the dom

//*Parent node

var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'black';


//*ParentElement 
//* Child node -> not recommended (includes line breaks as text)

// console.log(itemList.childNodes);

//* Children

// console.log(itemList.children)
// console.log(itemList.children[0])

//* first child -> NR
//* last child -> NR

//  console.log(itemList.firstChild);

//* firstelementchild
//* lastelementchild
//* nextSiblling, nextElementSibling,previousSibling,previousElementSibling

// console.log(itemList.firstElementChild);
//itemList.lastElementChild.textContent="changed"


//!Creating DOM elements

//* create a div
// var newDiv = document.createElement('div')
// newDiv.className ='class1'
// newDiv.id ='id1'
// newDiv.setAttribute('title','Hello Div')

// var newDivText = document.createTextNode('Hello world')
// newDiv.appendChild(newDivText)
// console.log(newDiv);

//* PUT THE DIV IN DOM

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')
// container.insertBefore(newDiv,h1);

//! EVENTS AND EVENT LISTENER

var button = document.getElementById('button').addEventListener('click',buttonClick);

function buttonClick(){
    document.getElementById('header-title').textContent= "changed";
}