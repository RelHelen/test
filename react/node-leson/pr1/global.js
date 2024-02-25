// setTimeout(() => {
//     console.log(process.env);
// }, 1000);

// console.log(__dirname );
// console.log(__filename );

// console.log(process)
// console.log(process.env.PATH)
//console.log(process.env.NODE_ENV)

// if(process.env.API_KEY) {
//     var apiKey = process.env.API_KEY;
// } else {
//     console.error("API_KEY is not defined");
// }


//console.log(process.argv)
//  let name = process.argv[2]
//  let age = process.argv[3]
//  console.log('name=',name);
//  console.log('age=',age);

// let url = new URL('https://user:pass@sub.example.com/path')
// console.log(url.hostname);
// console.log(url.protocol);
// console.log(url.href);

// let {userName:user,sayHi} = require('./test.js');
//   user = 'Tom';

// console.log(sayHi(user));
let user = require('./test.js');
console.log(user.sayHi());
 
