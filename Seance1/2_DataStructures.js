/* ************************************************************************************************** */
// Data STRUCTURE
/* ************************************************************************************************** */

// ----------------------------------------------------------- //
// OBJECTS
const obj1 = { name: 'Jalel' };
const obj2 = { lastname: 'gdayes', age: 3 };
const arrayOfObjects = [obj1, obj2];
const objectOfObjects = { obj1, obj2 };
// object.assign
const newObject = Object.assign({}, obj1, obj2);
// spread operator
const a = 'Lotfi';
console.log(...a);
const mergedObject = { ...obj1, ...obj2 };
// destructuring
const {
  name: name1 = 'ahmed',
  first,
  ...rest
} = mergedObject;

console.log({ name, first, rest });
// delete
delete mergedObject.lastname;
console.log(mergedObject);
// nestedObject
const nestedObject = {
  name: 'ali',
  lastname: 'ferdaws',
  adresse: {
    ville: 'Borj Ettorki',
    rue: 'nahj e nawwar',
    residence: {
      etage: 2,
      appartement: 'B1',
    },
  },
};
const field1 = 'lastname';
console.log(nestedObject.adresse.residence.etage);
console.log(nestedObject[field1]['residence']['etage']);
// nested destructuring
const {
  name,
  adresse: {
    residence: { etage },
  },
} = nestedObject;
console.log(etage);
// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// ARRAYS
const array1 = []; // new Array(5)
array1.length;
// at the end
array1.push('SALA7');
array1 = [...array1, 'FAWZI'];
array1.pop();
// at the begening
array1.unshift('3ALYA');
array1 = ['FAWZI', array1];
array1.shift();
// reverse
array1.reverse();
console.log(array1);
// ----------------------------------------------------------- //
