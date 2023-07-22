const input = document.querySelector('input');
const btn = document.querySelector('.AddTask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) =>{
    (e.keyCode === 13 ? addList(e) : null);
})

function addList(e){
    const notcompleted = document.querySelector('.notcompleted');
    const completed = document.querySelector('.completed');

    const newLi = document.createElement('li');
    const checkbtn = document.createElement('button');
    const delbtn = document.createElement('button');

    checkbtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    delbtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    if(input.value !==''){
        newLi.textContent = input.value;
        input.value ='';
        notcompleted.appendChild(newLi);
        newLi.appendChild(checkbtn);
        newLi.appendChild(delbtn);
    }

    checkbtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkbtn.style.display = 'none';
    });

    delbtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
       
    });

}
