//const {coffeeStock, isCoffeeMachineReady} = require('./state'); // import module dengan cara NodeJS
import {coffeeStock, isCoffeeMachineReady} from './state.js'; // import module dengan cara ES6
import _ from 'lodash';

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(coffeeStock);

const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray); // sum dengan library lodash
 
console.log(sum);