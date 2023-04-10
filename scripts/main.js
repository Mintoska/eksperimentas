
import Salys from './duom.js';

fetch('http://localhost:3000/salys')
  .then(res => res.json())
  .then(explore => {
    console.log(explore);
    const allCards = document.querySelector('#korteles');
    explore.forEach(explore => {
      const exploreDiv = new Salys(explore);
      allCards.appendChild(exploreDiv);
    });
  });

document.querySelector('#newCard > form').addEventListener('submit', e => {
  e.preventDefault();
  const elementai = e.target.elements;
  console.log(elementai);
  const salis = {
    salis: elementai.salis.value,
    zemynas: elementai.zemynas.value,
    populiacija: elementai.populiacija.valueAsNumber,
    karalyste: elementai.karalyste.checked,
    dImage: elementai.dImage.value,
    religion: elementai.religija.value,
    id: Date.now()
  };
  console.log(salis);
  const kortDiv = new Salys(salis);
  console.log(kortDiv);
  document.querySelector('#korteles').appendChild(kortDiv);
//   fetch('http://localhost:3000/salys', {
//     method: "POST",
//     headers: {
//       "Content-Type":"application/json"
//     },
//     body: JSON.stringify(salis)
//   });
//   e.target.reset();
});

// const duomenys = {
// salys: [
//   {
//     id: 1,
//     salis: "Marokas",
//     zemynas: "Afrika",
//     populiacija: 37,
//     valiuta: "Dirhamas",
//     religion: "musulmonai",
//     karalyste: true,
//     linkas: "google.lt",
//     dImage: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_472502990_122739.jpg"
//   },
//   {
//     id: 2,
//     salis: "Kenija",
//     zemynas: "Afrika",
//     populiacija: 53,
//     valiuta: "Šilingas",
//     religion: "katalikai",
//     karalystė: false,
//     linkas: "google.lt",
//     dImage: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_472502990_122739.jpg"
//   },
//   {
//     id: 3,
//     salis: "Kinija",
//     zemynas: "Azija",
//     populiacija: 1412,
//     valiuta: "Yuanis",
//     religion: "budizmas",
//     karalystė: false,
//     linkas: "google.lt",
//     dImage: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_472502990_122739.jpg"
//   },
//   {
//     id: 4,
//     salis: "Tailandas",
//     zemynas: "Azija",
//     populiacija: 71.6,
//     valiuta: "Bahtai",
//     religion: "budizmas",
//     karalystė: true,
//     linkas: "google.lt",
//     dImage: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_472502990_122739.jpg"
//   },
//   {
//     id: 5,
//     salis: "Graikija",
//     zemynas: "Europa",
//     populiacija: 10.6,
//     valiuta: "Euras",
//     religion: "krikščionys",
//     karalystė: false,
//     linkas: "google.lt",
//     dImage: "https://photos.app.goo.gl/bK6NX43kbjxRBg8g7"
//   },
//   {
//     id: 6,
//     salis: "Švedija",
//     zemynas: "Europa",
//     populiacija: 10.5,
//     valiuta: "Krona",
//     religion: "katalikai",
//     karalystė: true,
//     linkas: "google.lt",
//     dImage: "https://cdn.kimkim.com/files/a/images/a3ec12e87c5ceecbdd334327a4d3a61050ffebc7/original-8d8b0e6c6fa43803eb7d67fe02ae8d82.jpg"
//   },
//   {
//     id: 7,
//     salis: "Jordanija",
//     zemynas: "Artimieji rytai",
//     populiacija: 11,
//     valiuta: "Dinaras",
//     religion: "musulmonai",
//     karalystė: true,
//     linkas: "google.lt",
//     dImage: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_472502990_122739.jpg"
//   }
// ]}
// console.log(JSON.stringify(duomenys));