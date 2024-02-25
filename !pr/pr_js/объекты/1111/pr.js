 function creatRect(a, b, c, d) {
     return {
         x1: a,
         x2: b,
         y1: c,
         y2: d
     }
 }
 const rect = creatRect(1, 3, 4, 5);
 console.log(rect);
 const displayAttr = function() {
     for (key in this) {
         if (typeof(this[key]) !== "function")
             console.log(this[key]);
     }
 };

 rect.display = displayAttr;
 rect.display();

 const calcwidth = function() {
     return Math.abs(this.x2 - this.x1);
 }
 rect.width = calcwidth;
 rect.width();

 const calcheight = function() {
     return Math.abs(this.y2 - this.y1);
 }
 rect.height = calcheight;
 rect.height();


 const calcSquar = function() {
     return this.width() * this.height();
 }
 rect.Squar = calcSquar;
 rect.x1 = 8;
 //  console.log(rect.Squar());


 //  const rect2 = {};
 //  Object.assign(rect2, rect);
 //  rect.y1 = 9;

 rect.circl = {
     x: 2,
     y: 5,
     r: 10
 }

 //  console.log(rect);

 //  const rect3 = {...rect };
 //  console.log(rect3);
 //number, string,boolean,   object,  array
 function isPrim(obj) {
     return (typeof(obj) == 'number' || typeof(obj) == 'string' || typeof(obj) == 'boolean')
 }

 function isObject(obj) {
     return (typeof(obj) == 'object' && obj != null)
 }

 function isArray(obj) {
     return (typeof(obj) == "array")
 }

 function isFunction(obj) {
     return (typeof(obj) == "function")
 }

 function copyObject(obj) {
     if (isPrim(obj)) {
         return obj;
     } else if (isObject(obj)) {
         let res = {};
         for (let key in obj) {
             res[key] = copyObject(obj[key])
         }
         return res;
     } else if (isArray(obj)) {
         return obj.map((val) => { return copyObject(val) })
     } else if (isFunction(obj)) {
         return obj
     }
 }
 const rect4 = copyObject(rect);
 rect.x1 = 10;
 rect.circl.x = 10;
 console.log('rect4');
 console.log(rect4);
 console.log(rect4.width());
 console.log(rect4.height());
 console.log(rect4.Squar());