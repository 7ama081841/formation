/* ************************************************************************************************** */
// High Order functions (.map , .filter , .reduce , .some , .find , .sort , .new Set() )
/* ************************************************************************************************** */

// ----------------------------------------------------------- //
// .map
const array2 = ['a', 'b', 'c', 'd'];
array2.map((element, index, wholeArray) => {
  console.log({ element, index, wholeArray });
});
const newMappedArray2 = array2.map(
  (element, index, wholeArray) => {
    return element + '+';
  }
);
console.log(newMappedArray2); // ["+a","+b","+c","+d"]
// modern
console.log(array2.map((e) => e + '+')); // ["+a","+b","+c","+d"]
// ----------------------------------------------------------- //
// .filter
const newFiltredArray2 = array2.filter(
  (element, index, wholeArray) => {
    if (element === 'a') {
      return true;
    } else {
      return false;
    }
  }
);
console.log(newFiltredArray2); // ["a"]
// modern
const newFiltredArray22 = array2.filter(
  (element) => element === 'a'
);
console.log(newFiltredArray2); // ["a"]

// ----------------------------------------------------------- //
// .reduce
const arrayofNumbers = [2, 1, 4, 5, 2, 6];
// old
const counter = 0;
for (let i = 0; i < arrayofNumbers.length; i++) {
  counter = counter + arrayofNumbers[i];
}
console.log({ counter }); // { counter : 20 }
// classic
const counter = 0;
for (let item of arrayofNumbers) {
  counter = counter + arrayofNumbers[i];
}
console.log({ counter }); // { counter : 20 }

// modern
const total = arrayofNumbers.reduce(
  (previous, currentValue) => {
    return previous + currentValue;
  },
  0
);
console.log(total); // 20
// more modern
console.log(
  arrayofNumbers.reduce((v, e) => v + e),
  0
); // 20
// ----------------------------------------------------------- //
// .find
const names = [
  { name: 'GADDOUR' },
  { name: '7SOUNA' },
  { name: 'MOURAD' },
  { name: 'GADDOUR' },
];
names.find((element, index) => element.name === 'GADDOUR');
names.findIndex(
  (element, index) => element.name === 'GADDOUR'
);
// ----------------------------------------------------------- //
// .sort
const sortedArray = arrayofNumbers.sort((a, b) => a - b); // croissant
const sortedArray = arrayofNumbers.sort((a, b) => b - a); // decroissant
// new Set
const NoDuplicatedArray = new Set(arrayofNumbers);
console.log(NoDuplicatedArray);
console.log([...NoDuplicatedArray]);

const a = [
  { name: 'moez', value: 3 },
  { name: 'mo3ez', value: 5 },
  { name: 'moe343z', value: 6 },
  { name: 'moe466z', value: 22 },
  { name: 'mo56ez', value: 1 },
  { name: 'moe544z', value: 3 },
];
