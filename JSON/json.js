 //JSON 
 var personData = '{"name": "Иван","age": 37,"mother": { "name": "Ольга", "age": 58 }, "children": ["Маша", "Игорь", "Таня"],"married": true,"dog": null}';
 //Объект JavaScript person 
 var person = JSON.parse(personData);
 for (key in person) {
     if (person.hasOwnProperty(key)) { console.log(key + ': ' + person[key]); }
 }