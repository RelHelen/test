//создали файл вызова событий логирования
const EventEmitter = require('events');

//создали класс наследник, который берет все методы родителя эмитера(EventEmitter0)
//даллее создадим экземпляр, чтобы отслеживать его сосотяние в других файлах

//с помощью метода  emit мы создаем события в одном файле
//с помощью метода on мы вызываем событие в другом файле
class LoggerEvent extends EventEmitter{
//функция логирования, которая принимает на вход сообщение
//после чего выводит его в консоль

logTxt=(msg)=>{
   // console.log(msg);
    ////вызываем событие
    this.emit('some_log',{id:1,text:msg})
}
}

module.exports = LoggerEvent;