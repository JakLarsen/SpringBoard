

if (localStorage.getItem(friends)){
    const ul = document.body.appendChild('ul');
    const li = ul.appendChild('li');
    li.innerText = "New Friend";
}


















// const checkbox = document.querySelector('#darkModeCheckbox');

// if (localStorage.getItem('darkModeEnabled')){
//     document.body.className = 'dark';
//     checkbox.checked = true;
// }

// checkbox.addEventListener('click', function(e){
//     const { checked } = checkbox;
//     if (checked) {
//         localStorage.setItem('darkModeEnabled', true);
//     } else{
//         localStorage.removeItem('darkModeEnabled');
//     }
//     document.body.className = checked ? 'dark' : '';
// })






// const checkbox = document.querySelector('#darkModeCheckbox');

// checkbox.addEventListener('click', function(){
//     // console.log(checkbox.checked);
//     const { checked } = checkbox;
//     document.body.className = checked ? 'dark': ''
//     localStorage.setItem('darkModeEnabled', checked);
// })



// const preferences = {
//     fontSize: '19px',
//     favColor: 'purple'
// }


// localStorage.setItem('preferences', JSON.stringify(preferences));
// //JSON.parse(localStorage.getItem('preferences'))
// const { favColor } = JSON.parse(localStorage.preferences);
// document.body.style.backgroundColor = favColor;

// localStorage.setItem("person", "Jake");
// localStorage.setItem("personCount", "5");

// localStorage.getItem("person");
// const count = parseInt(localStorage.getItem("personCount"));
// let newCount = count + 1;
// localStorage.setItem("personCount", newCount);

// localStorage.removeItem("person");








// const form = document.querySelector('#monkeyform');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newH1 = document.createElement("h1");
//     const formText = document.querySelector('#monkeytype').value;
//     const formTextColor = document.querySelector('#monkeycolor').value;
//     newH1.innerText = formText;
//     newH1.style.color = formTextColor;

//     document.body.append(newH1);
// })





// const p = document.querySelector('p');

// p.addEventListener('click', function(e){
//     console.log(e.type);
// } )

// p.addEventListener('mousedown', function(e){
//     console.log(e.type);
// } )

// p.addEventListener('mouseup', function(event){
//     console.log(event);
// } )


// const tealbtn = document.querySelector('#teal');

// tealbtn.addEventListener('click', function(e){
//     document.body.style.backgroundColor = 'teal';
// })

// document.addEventListener('mousemove', function(e){
//     console.log(e.pageX, e.pageY);
//     const r = Math.round(e.pageX * 255/window.innerWidth);
//     const b = Math.round(e.pageY * 255/window.innerHeight);
//     console.log(r, b);
//     const color = `rgb(${r}, 0, ${b})`;
//     console.log(color);
//     document.body.style.backgroundColor = color;
// });



// function makeBody(color){
//     document.body.style.backgroundColor = color;
// }

// const tealbtn = document.querySelector('#teal');
// tealbtn.onclick = function() {
//     makeBody('teal');
// }

