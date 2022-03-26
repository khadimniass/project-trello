const addNote = document.querySelector('#add-note'); 
const addColumn = document.getElementById("add-column");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const main= document.querySelector('main');

addNote.addEventListener("click", () => {
  modal.className = "modal show-modal";
});

close.addEventListener("click", () => {
  modal.className = "modal";
});

i=1;
addColumn.addEventListener('click',()=>{
    if (i<=5) {
        addNewColumn();
    }else{
        // alert('nombre de collonee atteint')
    }
})
function addNewColumn() {
    main.innerHTML += `
    <div class="item">
                <div class="i-heaed">
                    <span>colone ${i}</span>
                </div>
                <div class="i-body">
                </div>
            </div>
    `
    i++;
}