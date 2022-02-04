/* let list = [
  { id: "1", name: "ahmed", status: "vacc" },
  { id: "2", name: "ahmed2", status: "enreg" },
  { id: "3", name: "ahmed3", status: "enreg" },
];
const list_vacc = document.getElementById("list_vacc");
const list_saved = document.getElementById("list_saved");
const abbi = () =>
{
  list_saved.innerHTML = '';
  list_vacc.innerHTML = '';
  list.forEach(({ name, status, id, image }) =>
  {
    if (status === "enreg") {
      const li = ` <li>
      <div style='display:flex' >
      <p>${ name }</p>
      <img src="${ image }" width="100" height="100" />
      <button onclick="vaccinPerson('${ id }')" >vaccine</button>
      <button onclick="update('${ id }')" >update</button>

      </div></li> `
      list_saved.innerHTML += li;

    } else {
      const li = ` <li>
      <div style='display:flex' >
      <p>${ name }</p>
      <button onclick="supprime('${ id }')" >supprimer</button>
      </div></li> `
      list_vacc.innerHTML += li;

    }
  })
}

const formatFile = (file, callback) =>
{
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return reader.onloadend = () =>
  {
    callback(reader.result)
  }
}

const ajout = async () =>
{
  formatFile(fileHolder.files[0], (url) =>
  {
    const personName = valueText.value;
    const generatedID = Date.now();
    const newPersonn = {
      name: personName,
      id: generatedID,
      image: url,
      status: 'enreg'
    }
    list.push(newPersonn);
    abbi()
  })
  // console.log({ newPersonn });
};

const valueText = document.getElementById('text');
const fileHolder = document.getElementById('fiile');
const button = document.getElementById('buttonn');
const update = (idd) =>
{
  const ontoupdate = list.find(e => e.id == idd).name;
  valueText.value = ontoupdate;
  button.innerHTML = "update";
  button.onclick = () =>
  {
    list = list.map(e =>
    {
      if (e.id == idd) {
        e.name = valueText.value
      }
      return e
    })
    console.log(list)
    button.innerHTML = "Ajouter";
    valueText.value = "";
    button.onclick = ajout

    abbi()
  }


}




const vaccinPerson = (idPerson) =>
{
  console.log({ idPerson });
  list.forEach(element =>
  {
    if (element.id == idPerson) {
      element.status = "vacc"
    }
  })
  abbi()
};

const supprime = (idd) =>
{
  list = list.filter(({ id }) => !(id == idd));
  abbi()
}
 */

const esmi2second = (name, callback) =>
{
  setTimeout(() =>
  {
    console.log(name);
    callback(name + "_B")
  }, 2000)
}
const esmiBa3Dfunction = () =>
{
  esmi2second("AHMED1", (howabidou) =>
  {
    console.log(howabidou);
  }); // AHMED1 // bch tetlabeb 2 second 

};


const formatFileToURL = (file, callback) =>
{
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () =>
  {
    callback(reader.result)
  }
}
const fileminInput = document.getElementById('file').files[0];
formatFileToURL(fileminInput, (url) =>
{
  const personName = valueText.value;
  const generatedID = Date.now();
  const newPersonn = {
    name: personName,
    id: generatedID,
    image: url,
    status: 'enreg'
  }
  ajout7aja({})
})





