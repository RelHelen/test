const userName= 'Vlad';
const user={
    name: 'Petr',
    age: 32,
    sayHi(){return `Hello, ${this.name}`}
}
const sayHi=(userName)=> `Hello, ${userName}`;
//console.log(sayHi(userName));
// module.exports = {
//     userName,
//     sayHi
//  };
module.exports = user;

 
 