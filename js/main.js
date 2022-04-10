/* 
50-12
50-9
50-2
trello : Documents/trello/100-Projects-HTML-CSS-JavaScript/10 - Create Todo App (Drag & Drop)
100-13
anime text : > 100 - 27
/home/bamba/Documents/trello/kards
*/

// console.log(FondEcrans);
main.style.backgroundImage = `url(${
  FondEcrans[Math.floor(Math.random() * FondEcrans.length)]
  // FondEcrans[21];
})`;

addNote.addEventListener("click", () => {
  if (main.childElementCount == 0) {
    shownotification("veillez creer d'abord une colonne");
  } else modal.className = "modal show-modal";
});

close.addEventListener("click", () => {
  modal.className = "modal";
  cleanForm();
});

let cpt = 1;
addColumn.addEventListener("click", () => {
  if (main.childElementCount < 5) {
    addNewColumn();
    renomerItem();
    shownotification('une colonne a ete ajouté')
  }else{
    shownotification('nobre de collonnes atteints')
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
  let compteur = 0;
  isfieldEmpty();
  if (!estDateValide()) {
    //erreur pour la date la date doit etre supérieur ou égal a la date d'aujourd'hui.
    startTime.parentElement.classList.add("show-error");
    startTime.nextElementSibling.innerHTML = "date invalide";
    compteur++;
  }
  if (heureEnMillisecondes(timed) < getHeureActuelle()) {
    timed.parentElement.classList.add("show-error");
    timed.nextElementSibling.innerHTML = "heure de debut invalide ";
    compteur++;
  }
  if (heureEnMillisecondes(timed) > heureEnMillisecondes(endTime)) {
    endTime.parentElement.classList.add("show-error");
    endTime.nextElementSibling.innerHTML = "heure de fin invalide";
    compteur++;
  }
  if (compteur == 0) {
    addTach();

    document.querySelectorAll(".full-note").forEach((tacheEnCours) => {
      const heuredebut = heureEnMillisecondes(timed);
      const heuredefin = heureEnMillisecondes(endTime);

      const begintimer = setInterval(() => {
        if (heuredebut < getHeureActuelle()) {
          // alert('heure de debut');
          //couleur grise && ecri encours
          // tacheEnCours.style.border = "10px solid gray";
          tacheEnCours.classList.add('tache-encours');
          clearInterval(begintimer);
        }
      }, 1000);
      const endtimer = setInterval(() => {
        if (heuredefin < getHeureActuelle()) {
          // tacheEnCours.style.border = "10px solid red";
          tacheEnCours.classList.remove('tache-encours');
          tacheEnCours.classList.add('tache-terminer');
          clearInterval(endtimer);
        }
      },1000);
    });
    modal.classList.remove("show-modal");
    cleanForm();
  }
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

upDown.addEventListener("click", () => {
  upDown.classList.toggle("tourner");
  listerEtat.classList.toggle("show-etat");
});