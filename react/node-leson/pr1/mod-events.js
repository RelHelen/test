//подключили модуль событий
//EventEmitter - стандартно приянятое имя

const EventEmitter = require('events');
//EventEmitter - класс, будем создавать экземляры для отслеживания соббытий

//добавим экзмеляр события 
const emitter = new EventEmitter();

//создадим свое событие, вызовем его и отреагируем на него
//1 шаг) 
//создадим слежение за событием emitter.on(имя события, колб функция,),
//some_event - имя события,котрое создаем и  за которым будем следить
//text - произвольная строка, текст
// втрой агрумент - колбек функция 
//ей передаем текст(text) и отображем в консоли  console.log(text);
emitter.on('some_event',(text)=>{
    console.log(text);
})
emitter.on('error',(error)=>{
    console.log(error);
})
//2 шаг)
//вызываем событие, которое создали emitter.emit(имя события, данные)
//'some_event' -имя события 
//'Hello!!!!' - данные, которые передали и которые в нашем случае выведутсяв консоль

//emitter.emit('some_event','Hello!!!!');

// передача нескольких параметров через объект
/**/
emitter.on('some_event',(args)=>{
    const {id,text} = args;
    console.log( `${id}: ${text}`);
})
emitter.emit('some_event',{id:1,text:'Hello!!!!'});
emitter.emit('error','ddd');

//3 шаг - запустили исполнение 

