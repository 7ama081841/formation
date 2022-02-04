/* ************************************************************************************************** */
// REQUIRES
/* ************************************************************************************************** */
// install NodeJS
// install Git
// install VS code
// install Prettier
// install Live Server
// install Chrome Extension ( grepper, Dark Reader )

// EXECUTING JAVASCRIPT
// body script tag
// head script tag
// NodeJs
// console.log

/* ************************************************************************************************** */
// VARIABLES & PRIMITIVE DATA TYPES ( Number , String , boolean , undefined , null )
/* ************************************************************************************************** */

const name = 'Mondher';
const modernString = `numero ${2}`;
const age = 47;
const moyenne = 10.03;
const admis = true;
const niveau = null; // represented as object
const presence = undefined;
// console.log(typeof age);

/* ************************************************************************************************** */
// FUNCTION
/* ************************************************************************************************** */
// classic
function getName(name) {
  return 'Mon nom est ' + name;
}
// modern
const getNamee = (name) => {
  return 'Mon nom est ' + name;
};
// more modern
const getNameee = (name) => 'Mon nom est ' + name;
// more more modern
const getNameeee = (name) => `Mon nom est ${name}`;

/* ************************************************************************************************** */
// DECLARING VARIABLES ( const , let )
/* ************************************************************************************************** */
// const
const oneTimeDeclare = 'ahmed';
oneTimeDeclare = 'otherName'; // ERROR
// var & let
var var1 = 'hay';
{
  var var1 = 'globalScope';
  let var2 = 'innerScope';
}
console.log({ var1 });
console.log({ var2 });
