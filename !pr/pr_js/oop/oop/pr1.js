// let animal = {};
// animal.name = 'Животное';
// animal.paws = 4;

// let cat = Object.create(animal);
// cat.say = function() { return 'Мурр!'; };

// let tigr = Object.create(cat);
// console.log(tigr.name);
// console.log(tigr.say());
// console.log(animal.say());
function User(name) {
    // this = {};  (неявно)
    // добавляет свойства к this
    this.name = name;
    this.isAdmin = false;
    // return this;  (неявно)
}


let job = { work: true };
// job.__proto__ = pet;
User.prototype = job;
let pet = new User('Petr');
console.log(pet.name);
//console.log(job.name);
console.log(pet.work);