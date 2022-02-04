/* ************************************************************************************************** */
// STRING METHODS
/* ************************************************************************************************** */

//  concatenation
const firstName = 'Mounir';
const lastname = 'Abdessmad';
const age = 43;
console.log(
  'je suis ' +
    firstName +
    ' ' +
    lastname +
    " j'ai " +
    age +
    ' ans'
);
console.log(
  `je suis ${firstName} ${lastname} j'ai ${age} ans`
);

// .toUpperCase / .toLowerCase
const s = 'ahla bik !';
console.log(s.toUpperCase());
console.log(s.toLowerCase());
// .substring
console.log(s.substring(start, end));
// .split
const a = 'pizza,hamburger,tacos,pasta';
console.log(s.split(''));
// .join()
const a = ['pizza', 'hamburger', 'tacos', 'pasta'];
console.log(a.join('-'));
// .includes / .some / .every
const anyarray = ['pizza', 'hamburger', 'tacos', 'pasta'];
anyarray.includes('pizza'); // true

const persons = [
  { name: 'ahmed', age: 18 },
  { name: 'eze', age: 8 },
  { name: 'ahmezezed', age: 38 },
];

anyarray.some((element) => element === 'pizza'); // true ;
anyarray.every((element) => element === 'pizza'); // false ;
anyarray.every((element) => element.length >= 1); // true ;
const jam3eya = 'jit m3a aziz w badis w skander w leyla';
jam3eya.includes('aziz'); // true
jam3eya.includes('faycel'); // false
// .replace
const jomla = 'Javascriptt is the besxt';
jomla.replace('x', '');
jomla.replace('Javascriptt', 'Javascript');
