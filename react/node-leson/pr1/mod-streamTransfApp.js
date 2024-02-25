//работа с потоками сжатия


//подключаем модуль работы с файлами

const fs = require('fs');
//для сжатия
const zlib = require('zlib');


//создадим поток читающий ReadStream для считвания данных из файла
const ReadStream = fs.createReadStream('../docs/textBig.txt');

//потоок для  записи
//создать пишущий поток - дословный перевод
const writeStream = fs.createWriteStream('../docs/gzip-text.txt')

 //создаем поток для сжатия данные
const compressStream =zlib.createGzip() ;


//создадим обработчик событий
//если в потоке есть ошибка, то удаляем потоок считывания
//и передаем сообщение о финише из-за ошибки
//.end Добавляет текст в конец


const handleError=()=>{
    console.log('Error');
    ReadStream.destroy();
    writeStream.end('Finish with error ....')
}
//вешаем вызов обработчика события на запись и чтение потоков
//и уничтожали попытки чтения и дальнейшей записи

//добавляем поток сжатия в наш общий поток
//данные котороые мы прочитала , сжимаются, а потом записываются в файл

ReadStream
    .on('error',handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error',handleError);