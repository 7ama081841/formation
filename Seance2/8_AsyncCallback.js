// callback
const promise1 = (operationName, callback) =>
{
  setTimeout(() =>
  {
    callback(operationName);
  }, 3000);
};
const logg = () =>
{
  promise1('GETTING TODOS', (operationName) =>
  {
    console.log(`${ operationName } DONE`);
  });
};
// .then
const promise1 = (operationName) =>
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      resolve(operationName);
    }, 3000);
  });
};
const logg = () =>
{
  promise1('GETTING TODOS').then((operationName) =>
  {
    console.log(`${ operationName } DONE`);
  });
};
// async/Await
const promise1 = (operationName) =>
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      resolve(operationName);
    }, 3000);
  });
};
const logg = async () =>
{
  const operationName = await promise1('GETTING TODOS');
  console.log(`${ operationName } DONE`);
};
/* ****************************************************** */
// EXEMPLE
const list = document.getElementById('list');
const list_elemine =
  document.getElementById('list_elemine');

let candidates = [
  { name: 'ahmed', age: 2, elemine: false },
  { name: 'farou9', age: 3, elemine: false },
  { name: 'fadhila', age: 6, elemine: true },
];

const abbi = () =>
{
  list.innerHTML = '';
  list_elemine.innerHTML = '';
  candidates.map((e) =>
  {
    const weld = `<li>esm : ${ e.name } <button onclick="supprimer('${ e.name }')" >X</button> </li>`;
    if (e.elemine === true) {
      list_elemine.innerHTML += weld;
    } else {
      list.innerHTML += weld;
    }
  });
};

// CALLBACK
const createCondidate = (name, callback) =>
{
  setTimeout(() =>
  {
    const newCandidate = {
      id: Math.floor(Math.random() * 100),
      name: name,
      elemine: false,
    };
    candidates.push(newCandidate);
    callback();
  }, 3000);
};
abbi();
createCondidate('mondher'.toUpperCase(), abbi);

// PROMISE
const createCondidatePromisePromise = (name) =>
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      const newCandidate = {
        id: Math.floor(Math.random() * 100),
        name: name,
        elemine: false,
      };
      a.push(newCandidate);
      if (!name) {
        reject('Error : there is no name');
      } else {
        resolve({ newCandidate });
      }
    }, 3000);
  });
};
abbi();
createCondidatePromisePromise('MONDHER')
  .then(({ newCandidate }) => { })
  .catch((error) =>
  {
    console.log({ error });
  })(
    // ASYNC & AWAIT
    async () =>
    {
      const { newCandidate } = await createCondidatePromise(
        'mondher'
      );
      abbi();
      console.log({ newCandidate });
    }
  )();

// Get Todos
(async () =>
{
  const todos = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((res) => res.json());
  console.log(todos);
})();

async function waymawnjik(params)
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      return [3, 4];
    }, 3000);
  });
}

waymawnjik().then((resultatelliraj3ettouelfunction) =>
{
  console.log('');
  console.log('c bon hanni jit');
});

const value = await waymawnjik();
console.log('dsqdqs');




event.preventDefault()