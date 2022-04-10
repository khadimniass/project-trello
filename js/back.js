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
function saveStatus(backgroundcolor,nom_de_la_colonne,pInfo,dateTach,heure_debut,heure_fin) {
  const DateEreristrement = new Date();
  fetch(URLSAVE, {
    method: "POST",
    /* etat tableau ou objet à revoir  */
    body: JSON.stringify({
      date_enregistrement: DateEreristrement,
      colonnes: {
        couleur: backgroundcolor,
        title: nom_de_la_colonne,
        tache: [
          {
            text: pInfo,
            dateTach: dateTach,
            heure_debut: heure_debut,
            heure_fin: heure_fin,
          },
        ],
      },
      corbeille: [
        {
          text: Corb_pInfo,
          dateTach: Corb_dateTach,
          heure_debut: Corb_heure_debut,
          heure_fin: Corb_heure_fin,
        },
      ]
    }),
  });
}
/* save status */

/* save status */
/* evenement d'enregistrement */
document.querySelector(".fa-file").addEventListener("click", () => {
  let colonnes = [];
  let tache = [];
  document.querySelectorAll('.item').forEach(element => {
    // colonnes['couleur'] = element.style[0];
    colonnes.push(element.querySelector('h3').innerHTML);
      
    document.querySelectorAll(".in-colonne").forEach((t)=>{
        tache.push({
          'text' : t.querySelector('p').innerHTML,
          'date' : t.querySelector('.spandate').innerHTML,
          'heure de debut' : t.querySelector('.spanhdb').innerHTML,
          'heure de fin' : t.querySelector('.spanhfin').innerHTML
        });
      });
    });
    colonnes.push({
      'tache' : tache
    })
    fetch(URLSAVE,{
      method : 'POST',
      body : JSON.stringify(colonnes)
    });
  shownotification("etat ajouté avec success...");
});