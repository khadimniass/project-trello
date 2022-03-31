/* 
50-12
50-9
50-2
trello : Documents/trello/100-Projects-HTML-CSS-JavaScript/10 - Create Todo App (Drag & Drop)
100-13
anime text : > 100 - 27
/home/bamba/Documents/trello/kards
/home/bamba/Documents/trello/task-manager : full Trello/
/home/bamba/Documents/trello/Trello/
*/

// console.log(FondEcrans);
main.style.backgroundImage = `url(${
  // FondEcrans[Math.floor(Math.random() * FondEcrans.length)]
  FondEcrans[21]
})`;

addNote.addEventListener("click", () => {
  if (main.childElementCount == 0) {
    alert("veillez creer d'abord une colonne");
  } else modal.className = "modal show-modal";
});

close.addEventListener("click", () => {
  modal.className = "modal";
});

let cpt = 1;
addColumn.addEventListener("click", () => {
  if (main.childElementCount < 5) {
    addNewColumn();
    renomerItem();
  }
});
//drop and drag

// const items =document.querySelectorAll('.full-note');
// console.log(items);
window.addEventListener("click", (e) => {
  const item = e.target.closest(".i-body"); //recepteur
  if (!item) return;
  const us = e.target.closest(".full-note"); //élément à deplacer
  if (!us) return;
  // console.log(us);

  us.addEventListener("dragstart", () => {
    this.className = "full-note tenu";
    setTimeout(() => {
      this.className = "disparaitre";
    }, 0);
  });

  us.addEventListener("dragend", () => {
    this.className = "full-note";
  });

  // for (const item of items) {
  item.addEventListener("dragover", (e) => {
    e.preventDefault();
    // console.log("dragover");
  });

  item.addEventListener("dragenter", (e) => {
    e.preventDefault();
    this.className += "hovered";
  });

  item.addEventListener("dragleave", () => {
    this.className = "full-note";
  });

  item.addEventListener("drop", () => {
    this.className = "full-note";
    this.append(us);
  });
  // }
});

//creation des US TACHE
addUs.addEventListener("click", () => {
  addTach();
});

corbeille.addEventListener("click", () => {
  containerCorbeil.classList.toggle("show-corbeille");
});
//renommer collone
window.addEventListener("click", (e) => {
  const title = e.target.closest("h3");
  if (!title) return;
  /*  */
  title.addEventListener("dblclick", (e) => {
    let input = document.createElement("input");
    input.value = title.innerHTML;
    input.className = "edit";
    title.replaceWith(input);
    /*  */
    input.addEventListener("blur", function () {
      title.innerHTML = input.value;
      if (title.innerHTML == "") {
        alert("donnez une valeur");
      } else {
        input.replaceWith(title);
      }
    });
    isColomnemodify = true;
  });

});

upDown.addEventListener('click', () =>{
  upDown.classList.toggle('tourner');
  listerEtat.classList.toggle('show-etat')
})