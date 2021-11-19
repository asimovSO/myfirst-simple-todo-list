let inputCreate = document.getElementById('create')


inputCreate.addEventListener('keydown', (event) => {
    if(event.key == "Enter")
      addItem();
  });
{/* <span class="min">— </span> */}
function addItem(){
    let item = `
        <div class="item-list" style='text-decoration: none'>
            ${inputCreate.value}
        </div>`;
    document.querySelector('.list').innerHTML += item;
    let it = document.querySelectorAll('.item-list')
    
    for(let i = 0; i < it.length; i++){
        it[i].addEventListener('click', ()=>{
            if(it[i].style.textDecoration === "none"){
                it[i].style.textDecoration = 'line-through'
            }
            else{
                it[i].style.textDecoration = 'none'
            }
        })
    }

    inputCreate.value = ''
}

