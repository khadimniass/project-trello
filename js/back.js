const APIURL = "http://127.0.0.1:5500/data/db.json";
const URLSAVE = "http://localhost/backend-trello/public/?controller=etat&action=sauvegarder";

fetch(APIURL)
  .then((data) => data.json())
  .then((tab) => {
    // console.log(tab.etat)
    afficherEtat(tab.etat);
  });
function afficherEtat(object) {
  object.forEach((element, i) => {
    const divEtat = document.createElement("div");
    divEtat.setAttribute("class", "etat");
    const h2 = document.createElement("h2");
    h2.innerText = `Etat N°${i + 1}`;
    const span = document.createElement("span");
    span.innerHTML = "enregistre le : " + element.date_enregistrement;
    const btn = document.createElement("button");
    // btn.id = i+1;
    btn.innerText = "restorer l'etat";
    divEtat.appendChild(btn);
    divEtat.appendChild(h2);
    divEtat.appendChild(span);
    listerEtat.appendChild(divEtat);
  });
}
/* save status */
/* evenement d'enregistrement */
document.querySelector(".fa-file").addEventListener("click", () => {
  const DateEreristrement = new Date();
  let colonnes = [({ date_enregistrement: DateEreristrement })];
  // let corbeilles = [];
  document.querySelectorAll(".item").forEach((element) => { //colone = item
    if (element.querySelector(".i-body").childElementCount != 0) {
      const tacheInColone = document.querySelectorAll(".in-colonne");
      let tache = [];
      tacheInColone.forEach((t) => {
        tache.push({
          text: t.querySelector("p").innerHTML,
          date: t.querySelector(".spandate").innerHTML,
          "heure de debut": t.querySelector(".spanhdb").innerHTML,
          "heure de fin": t.querySelector(".spanhfin").innerHTML,
        });
      });
      colonnes.push({
        title: element.querySelector("h3").innerHTML,
        tache: tache,
      });
    }
  });
  //a ajouter en debut du tableau
  //  colonnes.push({
  //   "colonnes":{
  // "title" : tacheInColone.parentElement.parentElement.querySelector('h3').innerHTML,
  // "title" : "colone 2",
  // "tache" : tache
  //  }})

  // colonnes.unshift({ date_enregistrement: DateEreristrement });
  fetch(URLSAVE, {
    method: "POST",
    body: JSON.stringify({ colonnes }),
  });
  shownotification("etat ajouté avec success...");
});
