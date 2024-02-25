// //Имеется список статей в виде массива объектов:
// const listArticles = [
//     { title: "Статья 7", likes: 15 },
//     { title: "Статья 1", likes: 10 },
//     { title: "Статья 5", likes: 3 },
//     { title: "Статья 3", likes: 20 }
// ];
// //Необходимо отсортировать массив объектов по полю likes
// // sort сортирует с использованием функции сравнения
// //array.sort(function(firstValue, secondValue));
// //console.log(listArticles[1].likes); //10
// listArticles.sort((article1, article2) => {
//     return article1.likes < article2.likes ? -1 : article1.likes > article2.likes ? 1 : 0;
// });
// listArticles[1].likes = 1;
// console.log(listArticles[1].likes); //30
// console.log(listArticles);

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
Person.prototype.dop = function() {

    //console.log(this.dop);
    if (this.age < 80) {
        this.age = this.age + 20;
        return this.age;
    } else {
        console.log('все ');
        return this.age;
    }

};

console.log(myFather.name());
console.log(myFather.dop());
console.log(myFather.dop());
console.log(myFather.dop());