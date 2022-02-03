/* ----      прототипы  ---------------*/
const person = {
  name: 'Maxim',
  age: 23,
  greet: function () {
    console.log('ИМя = ' + this.name);
  },
};
console.log(person.name);
const person2 = new Object({
  name: 'Vas',
  age: 25,
  greet: function () {
    console.log('ИМя = ' + this.name);
  },
});
person2.greet();

Object.prototype.sayHello = function () {
  console.log('Hello! This is Obect', this);
};
person2.sayHello();

//создали прототип для lena из person
const lena = Object.create(person);
console.log(lena.name); //Maxim
lena.name = 'Helen';
console.log(lena.name); //Helen

// в js все является объектом! то есть Object - глобальный класс
const str = 'Hello World';

// это тоже самое что :  const str = new String('Hello World');
console.log(str.length); //11
str.sayHello(); //доступен метод Object!

/* ----      контекст  ---------------*/
function Welcome() {
  console.log('Welcome', this);
}
Welcome();
// это тоже самое что : window.Welcome();

const person3 = {
  name: 'Vlad3',
  age: 20,
  sayWelcome: Welcome,
  sayWelcomeWindow: Welcome.bind(this),
  logInfo: function (phone) {
    console.group(`info from ${this.name} :`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};
console.log(person3.name);
person3.sayWelcome();
person3.sayWelcomeWindow();
person3.logInfo();

const Gary = {
  name: 'Garyc',
};
//вызвали функцию person3.logInfo с
//с передачей контекста объекта Gary
// вариант 1 определили и вызвали функцию
person3.logInfo.bind(Gary)(); //Garyc
//вариант 2
person3.logInfo.bind(Gary)('555-55-52'); //Garyc
//вариант 3
person3.logInfo.bind(Gary, '555-55-53')(); //Garyc
//вариант 4, то есть определеили контекст и вызвали тогда, когда надо через функцию
//const fnLogInfo = person3.logInfo.bind(Gary);
//fnLogInfo('555-55-54');
//вариант 5
const fnLogInfo = person3.logInfo.bind(Gary, '555-55-55');
fnLogInfo();

//вариант 6 вызов через call, задает контекст и сразу вызывает функцию
person3.logInfo.call(Gary, '555-55-56');

//вариант 7 вызов через apply, задает контекст и сразу вызывает функцию
person3.logInfo.apply(Gary, ['555 - 55 - 57']);
