//создали файл   для слежение за событием some_log

//ипортируем конструктор
const LoggerEvent = require('./mod-events-log');

//создаем экземпляр
const logger = new LoggerEvent();


//для вызова события 'some_log' и спользуем созданный экземпляр logger
logger.on('some_log',(args)=>{
    const {id,text} = args;
    console.log( `${id}: ${text}`);
})

//вызываем событие логирование  и передаем текст

logger.logTxt('qweqr wr w wrq rqwt qert');