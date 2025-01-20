// Challenge 1: Change the Text Content 
let head = document.getElementById('text');
head.innerHTML ='hello word';

//Challenge 2: Create and Append an Element
const ul = document.getElementById('list');
const newlist = document.createElement('li');
newlist.textContent ='list2'; 
ul.appendChild(newlist);

//Challenge 3:
const btn = document.getElementById('styleButton');
btn.style.backgroundColor = 'blue';
btn.style.color = "white";

//Challenge 4:
const buttons = document.querySelectorAll('.alertButton');
buttons.forEach(button => {
    button.addEventListener('click', ()=>  {
        alert(button.textContent);
    });
});

