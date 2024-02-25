//clone
let person = {
    name: 'Petr',
    education: {
        primery: ['DGTU', 'VAS'],
        dop: ['course1', 'course2']
    },

    marks: {
        math: 5,
        ru: 4,
        ung: 5,
        bio: 3,
        sredMaks: function() {
            let n = 0,
                res = 0;
            for (let key in this) {
                //console.log(this[key]);
                if (typeof(this[key]) == 'number') {
                    //console.log(obj[key]);
                    res += this[key];
                    n += 1;
                }
            }
            return res / n;
        }
    },

}
let res = 0,
    n = 0;
for (let obj in person) {
    //console.log(`${person[key]} ${typeof(person[key])}`);;
    if (typeof(person[obj]) == 'object') {
        //console.log(obj);
        for (let key in person[obj]) {
            //console.log(person[obj][key]);
            if (typeof(person[obj][key]) == 'number') {
                //console.log(obj[key]);
                res += person[obj][key];
                n += 1;
            }
        }
    }
}
//console.log(res / n);

let Vanya = {};
// for (let key in person) {
//     Vanya[key] = person[key]
// }
// Object.assign(Vanya, person);
// Vanya = {...person }

function isPromitive(obj) {
    return obj == null ||
        typeof obj === 'number' ||
        typeof obj === 'string' ||
        typeof obj === 'boolean'
}

function isArray(obj) {
    return Array.isArray(obj)
}

function isObject(obj) {
    return obj != null && typeof obj === 'object'
}

function isFinc(obj) {
    return obj != null && typeof obj === 'function'
}


function deepClone(obj) {
    if (isPromitive(obj)) {
        return obj
    } else if (isArray(obj)) {
        return obj.map((val) => {
            return deepClone(val)
        })
    } else if (isObject(obj)) {
        let res = {}
        for (let k in obj) {
            res[k] = deepClone(obj[k])
        }
        return res
    } else if (isFinc(obj)) {
        return obj
    }
}

Vanya = deepClone(person);
Vanya.name = "Vannya";
Vanya.marks.ru = 5;
console.log(Vanya);
console.log(Vanya.marks.sredMaks());
person.svgmarks = res / n;
console.log(person);
console.log(person.marks.sredMaks());