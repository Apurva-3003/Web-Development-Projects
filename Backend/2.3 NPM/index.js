//npm init
//Fill out the package name, description, and author name

//Go to npmjs.com to find the packages, and learn how to use them
//To install npm packages, type: npm install <name of package>
//Go to package.json and write this after main, to enable ES script, and be able to use the import keyword: "type": "module",


//var generateName = require('sillyname');      ........... dont need this line if using ES script

// import generateName from "sillyName";
// var sillyName = generateName();
// console.log('I am ' + sillyName);

import {randomSuperhero} from "superheroes";
var superName = randomSuperhero();
console.log('I am ' + superName);
