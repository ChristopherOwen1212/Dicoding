const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}
   
const isCoffeeMachineReady = true;

//module.exports = {coffeeStock, isCoffeeMachineReady}; // export dengan cara NodeJS 

// export default coffeeStock // kalo export hanya 1 module, pake export default
export {coffeeStock, isCoffeeMachineReady}; // export dengan cara ES6