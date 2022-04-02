function getBackroundColor() {
  return `rgba(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)}, .5)`;
}

function addNewColumn() {
  const divItem = document.createElement("div");
  divItem.className = "item";
  divItem.setAttribute("id", `${cpt}`);
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
      shownotification("impossible de supprimer la première colonne");
    } else {
      showAlertConfirmation(
        "est tu vraiment sur de vouloir supprimer la colonne ?"
      );
      bntOui.addEventListener("click", (e) => {
        containerPopup.classList.remove("visible");
        icone.parentNode.remove();
        shownotification("colonne supprimée avec success...");
        renomerItem();
      });
      bntNon.addEventListener("click", (e) => {
        containerPopup.classList.remove("visible");
      });
    }
  });
  cpt++;
}
function addTach() {
  const bodyItem = document.querySelector(".i-body");

  const divFullNote = document.createElement("div");
  divFullNote.className = "full-note";
  divFullNote.draggable = "true";
  const iconeDeleteTach = document.createElement("i");
  iconeDeleteTach.className = "fa-solid fa-circle-minus";
  // iconeDeleteTach.innerHTML = "d"
  const divNoteImg = document.createElement("div");
  divNoteImg.className = "i-img";
  /* img note */
  const imgNote = document.createElement("img");
  imgNote.src = "https://source.unsplash.com/random/150x80";
  divNoteImg.appendChild(imgNote);
  /* img note */

  const divNote = document.createElement("div");
  divNote.className = "note";
  // divNote.draggable = "true"
  const btnLeft = document.createElement("button");
  btnLeft.className = "move-left";
  btnLeft.innerHTML = "&laquo;"; /* < */
  const btnRight = document.createElement("button");
  btnRight.className = "move-right";
  btnRight.innerHTML = "&raquo;"; /* > */
  /* note */
  /* info */
  const divInfo = document.createElement("div");
  divInfo.className = "info";
  const p = document.createElement("p");
  p.innerHTML = textarea.value;
  const containtTime = document.createElement("div");
  containtTime.className = "containt-time";
  const divDateexcec = document.createElement("div");
  divDateexcec.className = "date-execution";
  const spandate = document.createElement("span");
  spandate.innerHTML = startTime.value; /* cheikh moustapha */
  const smalldate = document.createElement("small");
  smalldate.innerHTML = "date";
  divDateexcec.appendChild(spandate);
  divDateexcec.appendChild(smalldate);
  const divHdebut = document.createElement("div");
  divHdebut.className = "hdbut";
  const spanhdb = document.createElement("span");
  spanhdb.innerHTML = timed.value;
  const smallHdb = document.createElement("small");
  smallHdb.innerHTML = "heure debut";
  divHdebut.appendChild(spanhdb);
  divHdebut.appendChild(smallHdb);

  const divHfin = document.createElement("div");
  divHfin.className = " hfin";
  const spanhfin = document.createElement("span");
  spanhfin.innerHTML = endTime.value;
  const smallhfin = document.createElement("small");
  smallhfin.innerHTML = "heure de fin";
  divHfin.appendChild(spanhfin);
  divHfin.appendChild(smallhfin);

  containtTime.appendChild(divDateexcec);
  containtTime.appendChild(divHdebut);
  containtTime.appendChild(divHfin);
  divInfo.appendChild(p);
  divInfo.appendChild(containtTime);

  divNote.appendChild(btnLeft);
  divNote.appendChild(btnRight);
  divFullNote.appendChild(iconeDeleteTach);
  divFullNote.appendChild(divNoteImg);
  divFullNote.appendChild(divNote);
  divFullNote.appendChild(divInfo);

  bodyItem.appendChild(divFullNote);
  // textarea.value = "";
  // modal.className = "modal";

  btnRight.addEventListener("click", (e) => {
    const col =
      e.target.parentElement.parentElement.parentElement.parentElement;
    const tach = e.target.parentElement.parentElement;
    const idColAct = parseInt(col.id);
    const colSuiv = document.getElementById(idColAct + 1);
    colSuiv.lastChild.appendChild(tach);
  });
  btnLeft.addEventListener("click", (e) => {
    const col =
      e.target.parentElement.parentElement.parentElement.parentElement;
    const tach = e.target.parentElement.parentElement;
    const idColAct = parseInt(col.id);
    const colSuiv = document.getElementById(idColAct - 1);
    colSuiv.lastChild.appendChild(tach);
  });
  iconeDeleteTach.addEventListener("click", (e) => {
    showAlertConfirmation(
      "est tu vraiment sur de vouloir supprimer cette tache ?"
    );
    const deltach = e.target.parentElement;
    bntOui.addEventListener("click", () => {
      elementSupprimer.appendChild(deltach);
      shownotification("tache deplacer dans la corbeille.");
      containerPopup.classList.remove("visible");

      /* afficher le nombre d'élément dans la corbeille */

      const spancorb = document.createElement("span");
      corbeille.innerHTML = "";
      spancorb.innerHTML = elementSupprimer.childElementCount;
      spancorb.style.color = "red";
      corbeille.appendChild(spancorb);
    });
    bntNon.addEventListener("click", (e) => {
      containerPopup.classList.remove("visible");
    });
  });
}
function renomerItem() {
  document.querySelectorAll(".item").forEach((elts, j) => {
    elts.querySelector("h3").innerText = `colone ${j + 1}`;
    elts.id = j + 1;
  });
}

function remonterElement(elts, nmb) {
  return elts.parentElement * nmb;
}
function shownotification(message) {
  placemessage.innerHTML = message;
  notification.classList.add("show-totificatinon");
  setTimeout(() => {
    notification.classList.remove("show-totificatinon");
  }, 3000);
}
function cleanForm([inputs]) {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].innerHTML = "";
  }
}

function showAlertConfirmation(message) {
  placeMessageAlert.innerHTML = message;
  containerPopup.classList.add("visible");
  setTimeout(() => {
    // containerPopup.classList.remove("visible");
    // shownotification("delai depassé !!!");
  }, 10000);
}
function valideDate() {
  const DateActuelle = new moment();
}
