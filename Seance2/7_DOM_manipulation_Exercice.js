/* EXEMPLE */
const list = document.getElementById('list');
const list_elemine =
  document.getElementById('list_elemine');

let a = [
  { name: 'ahmed', age: 2, elemine: false },
  { name: 'farou9', age: 3, elemine: false },
  { name: 'fadhila', age: 6, elemine: true },
];

const abbi = () => {
  list.innerHTML = '';
  list_elemine.innerHTML = '';
  a.map((e) => {
    const weld = `<li>esm : ${e.name} <button onclick="supprimer('${e.name}')" >X</button> </li>`;
    if (e.elemine === true) {
      list_elemine.innerHTML += weld;
    } else {
      list.innerHTML += weld;
    }
  });
};

function supprimer(name) {
  a.map((e) => {
    if (e.name === name) {
      e.elemine = true;
    }
  });
  abbi();
}
function add() {
  const esm = document.getElementById('name').value;
  const newCandidate = {
    name: esm,
    elemine: false,
  };
  a.push(newCandidate);
  abbi();
}
