const body = document.querySelector("body");
const containerCorbeil =document.querySelector('.containt-corbeille');
const addNote = document.querySelector("#add-note");
const addColumn = document.getElementById("add-column");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const main = document.querySelector("main");
const addUs = document.getElementById("add-us");
const textarea = document.querySelector("textarea");

const startTime = document.getElementById("date");
const timed = document.getElementById('timed');
const endTime = document.getElementById("timef");
const corbeille = document.querySelector('.fa-trash');

const elementSupprimer = document.querySelector('.element-supprimer');

const upDown = document.querySelector('.fa-angle-up');

const listerEtat = document.querySelector('.liste-etats');
let isColomnemodify = false;

/* fond d'ecrant aleatoire */
const FondEcrans = [
  "images/Nataalbi-Pigeon-perce.jpg",
  "images/architecture-g7.jpg",
  "images/Nataalbi-Pigeon-trotteur.jpg",
  "images/img.jpg",
  "images/neige.jpg",
  "images/Natalbi-Barbecue-viande.jpg",
  "images/abstract.jpg",
  "images/antelope-ca.jpg",
  "images/apples.jpg",
  "images/bicycle.jpg",
  "images/vaulted-cellar.jpg",
  "images/tree-decoration.jpg",
  "images/christmas.jpg",
  "images/city-ge.jpg",
  "images/coffee.jpg",
  "images/cubes.jpg",
  "images/desert.jpg",
  "images/flower-g1.jpg",
  "images/horse-g8.jpg",
  "images/background-glace.jpg",
  "images/horseshoe-bend.jpg",
  "images/texture-gb6.jpg",
  "images/sunflowe.jpg",
  "images/rue-negee.jpg",
  "images/painting.jpg",
  "images/love-g40.jpg",
  "images/feilles-mouillee.jpg",
  "images/macaroons-gf9c.jpg",
  "images/thunderstorm.jpg",
  "images/swan-g38.jpg",
  "images/sunset-g.jpg",
  "images/stones-gff85.jpg",
  "images/stone-wall-g.jpg",
  "images/spiral-gbd.jpg",
  "images/white-bed.jpg",
  "images/mountain-g1.jpg",
  "images/hot-air-balloons.jpg"
];