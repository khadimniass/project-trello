function getBackroundColor() {
  return `rgba(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)}, .5)`;
}

function addNewColumn() {
  const divItem = document.createElement("div");
  divItem.className = "item";
  divItem.setAttribute("id", `item${cpt}`);
  divItem.style.backgroundColor = getBackroundColor();
  const icone = document.createElement("i");
  icone.className = "fa-solid fa-trash-can animate__bounce";
  // icone.innerHTML = "del"
  divItem.appendChild(icone);
  const divIheader = document.createElement("div");
  divIheader.className = "i-heaed";
  const h3 = document.createElement("h3");
  h3.innerHTML = `colone ${cpt}`;
  divIheader.appendChild(h3);
  const divIbody = document.createElement("div");
  divIbody.className = "i-body";
  divItem.appendChild(divIheader);
  divItem.appendChild(divIbody);
  main.appendChild(divItem);

  icone.addEventListener("click", (e) => {
    if (main.childElementCount == 1) {
      alert("impossible de supprimer la première colonne");
    } else {
      icone.parentNode.remove();
      if (!isColomnemodify) {
        renomerItem();
      }
    }
  });
  cpt++;
  // renomerItem();
}
function addTach() {
  const divFullNote = document.createElement("div");
  divFullNote.className = "full-note";
  divFullNote.draggable = "true";
  const divNoteImg = document.createElement("div");
  divNoteImg.className = "i-img";
  /* img note */
  // const imgNote = document.createElement("img");
  // imgNote.src = "images/showcase.jpg";
  // divNoteImg.appendChild(imgNote);
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
}
function renomerItem() {
  document.querySelectorAll(".item").forEach((elts, j) => {
    elts.querySelector("h3").innerText   = "colone "+(j+1);
  });
}
