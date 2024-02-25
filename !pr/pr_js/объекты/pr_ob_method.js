        var person = {
            //свойства
            name: "dima",
            age: 25,
            size: {
                ves: 65,
                rost: 165,
            },
            //метод
            say: function(a) {
                console.log("говорит " + this.name + ":" + a);
            }
        };
        person.say("привет");
        person.say("пока");
        //выводит все ключи
        for (key in person) {
            console.log(key + ":" + person[key]);
        }