// EVENT HANDLERS
// input
const handleChange = (event) =>
{ // onchange - onkeypress - onkeydown - onkeyup
  console.log({ event: event.target.value });
}

// html element
const handleMouse = (event) =>
{ // onmouseenter - onmouseleave - onmousedown - onmouseup - onmouseover - onmousewheel
  console.log({ event: event.target.value });
}

// button && html element
const handleClick = (event) =>
{
  // onclick
  console.log({ event: event.target.value });
}


// form
const handleSubmit = (event) =>
{
  event.preventDefault();
  const values = event.target.elements;
  Object.keys(values).map(key =>
  {
    if (isNaN(key)) {
      console.log({ [key]: values[key].value });

    }
  })
}
// handle file with BLOB image
const handleFile = (event) =>
{
  const file = event.target.files[0];
  const imageHolder = document.getElementById('image')
  const url = window.URL.createObjectURL(file)
  imageHolder.src = url
}

//handleFile with FileReader
const handleFile = (event) =>
{
  const imageHolder = document.getElementById('image')
  const file = event.target.files[0];
  var reader = new FileReader();
  reader.onloadend = () => imageHolder.src = reader.result;
  if (file) {
    reader.readAsDataURL(file);
  } else {
    imageHolder.src = "";
  }
}

const handleOfline = () =>
{
  console.log("offline");
}

const handleOnline = () =>
{
  console.log("online");
}

// other way to add event to elements
document.addEventListener('event', () =>
{
  if (nom)
    document.querySelector('h1').innerText = `Hello ${ nom }`;
});



