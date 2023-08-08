const employee = require('./employee');

let johnWick = new employee("John Wick", "Dog Lover");

const boundName = johnWick.sayName.bind(johnWick);
global.setTimeout(boundName, 2000);

const boundOccupation = johnWick.sayOccupation.bind(johnWick);
global.setTimeout(boundOccupation, 3000);