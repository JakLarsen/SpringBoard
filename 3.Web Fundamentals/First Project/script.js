




//create the element and elements within
//append the inner elements inner to outer
//append the element to the parent element you want it in
//give them the proper class in their classList
const newTodo = document.createElement('li');
const boldText = document.createElement('b');
const ul = document.querySelector('ul');
boldText.textContent = "Don't forget to do the things and stuff!"
newTodo.classList = 'todo';
newTodo.append(boldText);
ul.append(newTodo);


//note - .append doesnt work in IE at the time of this video, have to use
//.appendChild, which only takes one parameter at a time and it has to be a node?, not multiple
const body = document.querySelector('body');
const anotherTodo = document.createElement('ul');
const firstItemAnotherTodo = document.createElement('li');
const secondItemAnotherTodo = document.createElement('li');
const emText = document.createElement('em');
const secondItemAnotherTodoText = "Hello, I'm not emphasized";
emText.textContent = "This is EMPHASIZED";
firstItemAnotherTodo.classList = 'todo';
secondItemAnotherTodo.classList = 'todo';
firstItemAnotherTodo.append(emText);
secondItemAnotherTodo.append(secondItemAnotherTodoText);
anotherTodo.append(firstItemAnotherTodo);
anotherTodo.append(secondItemAnotherTodo);
body.append(anotherTodo);

const ol = document.querySelector('ol');
const removeMe = document.querySelector('#remove-me');
ol.removeChild(removeMe);
//removeMe.remove(); works but not in

// const allLabels = document.querySelectorAll('label');

// for(let i = 0; i < allLabels.length; i++){
//   console.log(allLabels[i].getAttribute('for'));
//   allLabels[i].setAttribute('for', 'bname');
//   console.log(allLabels[i].getAttribute('for'));
// }

// for(let label of allLabels){
//   console.log(label.getAttribute('for'));
//   label.setAttribute('for', 'cname');
//   console.log(label.getAttribute('for'));
// }

// const span = document.querySelector('.span');

// span.setAttribute('class', 'dolor');

// const allLis = document.querySelectorAll('li');
// for(let li of allLis){
//   li.style.color = 'pink';
//   li.style.fontSize = '4rem';
// }

// for(let i = 0; i < allLis.length; i++){
//   allLis[i].style.color = 'red';
//   allLis[i].style.fontSize = '7rem';
// }


// const ache = document.querySelector('h1')
// ache.style.color = "green"
// ache.style.backgroundColor = "orange"

// const allLis = document.querySelectorAll('li');
// for(let i = 0; i < allLis.length; i++){
//   allLis[i].style.color = 'pink';
//   allLis[i].style.fontSize = '4rem';
// }

// const allH2s = document.getElementsByTagName('h2');
// for(let i = 0; i < allH2s.length; i++){
//   allH2s[i].style.color = 'red';
//   allH2s[i].style.fontSize = '4rem';
// }

// const paragraph1 = document.querySelector('p')
// const ol = document.querySelector('ol')
// paragraph1.innerHTML =  ol.innerHTML

  // const p1 = document.querySelector('#p1');
  // p1.innerText = "WEVE CHANGED THE WORLD!" 

  // const span = document.querySelector(".span");
  // span.innerText = "SPAN"

  // const dolor = document.querySelector(".dolor");
  // dolor.innerText = "DOLOR"

  // const ol0 = document.getElementsByTagName("ol")[0];
  // ol0.innerText = "HI"
  // ol0.innerText = "BYE"

  // const i = document.querySelector('i');
  // const caps = i.innerText.toUpperCase()

  // i.innerText = caps




