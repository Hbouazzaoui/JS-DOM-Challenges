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
    },2000);

});
//Challenge 6:
 const btnn = document.getElementById('.toggleButton');
 const toggleDiv = document.getElementById('toggleDiv');

 toggleButton.addEventListener('click' ,()=> {
    if(toggleDiv === 'none'){
        toggleDiv.style.display = 'block'; 
    }
    else{
        toggleDiv.style.display = 'none'
    }
 });

 //Challenge 7:
 const time =document.getElementById('time');

function updateTime() {
    const now = new Date();
    const timm = now.toLocaleString();
    time.innerHTML = timm;

}
setInterval(updateTime, 1000);
updateTime();

//Challenge 8:
const rimo = document.getElementById('removable');
const rimovbtn = document.getElementById('removeButton');

rimovbtn.addEventListener('click' ,()=> {
    rimo.remove();
});

//Challenge 9:
 const Imagep = document.getElementById('image');
const changeimagebtn = document.getElementById('changeImageButton');
changeimagebtn.addEventListener('click' ,()=> {
    Imagep.src = "/immm.png";
});

//Challenge 10:
const counterButton = document.getElementById('counterButton');
const clickCount = document.getElementById('clickCount');

let count = 0;
counterButton.addEventListener('click', () => {
    count++;
    clickCount.textContent = `Clicks: ${count}`;
})

//Challenge 11: Add a CSS Class 
const hoverDiv = document.getElementById('hoverDiv');
hoverDiv.addEventListener('mouseenter', () => {
    hoverDiv.classList.add('hoverdd');
});
hoverDiv.addEventListener('mouseleave', ()=> {
    hoverDiv.classList.remove('hoverdd');
});
