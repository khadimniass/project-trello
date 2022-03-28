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
const body = document.querySelector("body");

const addNote = document.querySelector("#add-note");
const addColumn = document.getElementById("add-column");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const main = document.querySelector("main");
const addUs = document.getElementById("add-us");
const textarea = document.querySelector("textarea");

const startTime = document.getElementById("timed");
const endTime = document.getElementById("timef");

/* fond d'ecrant aleatoire */
const FondEcrans = [
  "images/background.jpeg",
  "images/showcase.jpg",
  "images/Nataalbi-Pigeon-perce.jpg",
  "images/Nataalbi-Pigeon-trotteur.jpg",
  "images/img.jpg",
  "images/neige.jpg",
  "images/Natalbi-Barbecue-viande.jpg",
];
body.style.backgroundImage = `url(${
  FondEcrans[Math.floor(Math.random() * FondEcrans.length)]
})`;

addNote.addEventListener("click", () => {
  modal.className = "modal show-modal";
});

close.addEventListener("click", () => {
  modal.className = "modal";
});

i = 1;
addColumn.addEventListener("click", () => {
  if (i <= 5) {
    addNewColumn();
  } else {
    // alert('nombre de collonee atteint')
  }
});
/* creation de colo */
function addNewColumn() {
  main.innerHTML += `
    <div class="item" style = 'background-color: ${getBackroundColor()};'>
        <div class="i-heaed">
              <h3>colone ${i}</h3>
        </div>
            <div class="i-body">
            </div>
    </div>`;
  i++;
}
function getBackroundColor() {
  return `rgba(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)}, .2)`;
}
//creation des US
addUs.addEventListener("click", () => {
  if (main.childNodes == 0) {
    alert("veillez creer d'abord une colonne");
    return;
  }
  const divFullNote = document.createElement("div");
  divFullNote.className = "full-note";
  divFullNote.draggable = "true";
  const divNoteImg = document.createElement("div");
  divNoteImg.className = "i-img";
  /* img note */
  const imgNote = document.createElement("img");
  imgNote.src = "images/showcase.jpg";
  divNoteImg.appendChild(imgNote);
  /* img note */

  const bodyItem = document.querySelector(".i-body");
  const divNote = document.createElement("div");
  divNote.className = "note";
  // divNote.draggable = "true"
  const btnLeft = document.createElement("button");
  btnLeft.className = "move-left";
  btnLeft.innerHTML = "<";
  const p = document.createElement("p");
  const btnRight = document.createElement("button");
  btnRight.className = "move-right";
  btnRight.innerHTML = ">";

  const spanstartime = document.createElement("span");
  spanstartime.id = "start-time";

  const spanendtime = document.createElement("span");
  spanendtime.id = "end-time";

  p.innerHTML = textarea.value;
  spanstartime.innerHTML = startTime.value;
  spanendtime.innerHTML = endTime.value;

  // console.log(`heure de depart ${spanstartime.innerHTML}`);
  // console.log(`heure de fin ${spanendtime.innerHTML}`);

  if (
    p.innerHTML != "" ||
    spanstartime.innerHTML != null ||
    spanendtime.innerHTML != null
  ) {
    divNote.appendChild(btnLeft);
    divNote.appendChild(p);
    divNote.appendChild(btnRight);
    divFullNote.appendChild(divNoteImg);
    divFullNote.appendChild(divNote);

    const ptime = document.createElement("p");

    ptime.innerHTML = `de ${spanstartime.innerHTML} à ${spanendtime.innerHTML}`;
    divFullNote.appendChild(ptime);
    bodyItem.appendChild(divFullNote);
    textarea.value = "";
    modal.className = "modal";
  } else {
    alert("ecris quelques choses");
  }
});

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
  });
});
//drop and drag

// const items =document.querySelectorAll('.full-note');
// console.log(items);
window.addEventListener("click", (e) => {
  const items = e.target.closest(".i-body"); //recepteur
  if (!items) return;
  const us = e.target.closest(".full-note"); //élément à deplacer
  if (!us) return;
  console.log(us);

  us.addEventListener("dragstart", dragStart);
  us.addEventListener("dragend", dragEnd);

  function dragStart() {
    this.className = "full-note tenu";
    setTimeout(() => {
      this.className = "disparaitre";
    }, 0);
  }
  function dragEnd() {
    this.className = "full-note";
  }
  for (const item of items) {
    
   item.addEventListener("dragover", dragOver);

  item.addEventListener("dragenter", dragEnter);

  item.addEventListener("dragleave", dragLeave);

  item.addEventListener("drop", dragDrop);
}
  function dragOver(e) {
    e.preventDefault();
    console.log("dragover");
  }

  function dragEnter(e) {
    e.preventDefault();
    this.className += 'hovered';
  }

  function dragLeave() {
    this.className = "full-note";
  }

  function dragDrop() {
    this.className = "full-note";
    this.append(us);
  }
});
