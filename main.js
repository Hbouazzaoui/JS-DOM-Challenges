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
btn.addEventListener('click', ()=> {
    btn.style.backgroundColor = 'blue';
    btn.style.color = "white";
})

//Challenge 4:
const buttons = document.querySelectorAll('.alertButton');
buttons.forEach(button => {
    button.addEventListener('click', ()=>  {
        alert(button.textContent);
    });
});

//Challenge 5:
const form = document.getElementById('form');
const inputField = document.getElementById('inputField');
const error = document.getElementById('error');
const valid = document.getElementById('valid');

form.addEventListener('submit' ,function (event){

    if(inputField.value.trim() === ''){
        event.preventDefault();
        error.style.display ='block';
        valid.style.display ='none'
    }
    else{
        event.preventDefault();
        valid.style.display = 'block';
        error.style.display ='none';
    }
      setTimeout(function() {
      valid.style.display = 'none'; 
    }, 2000);
});
