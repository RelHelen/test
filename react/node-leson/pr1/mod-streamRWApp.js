//работа с потоками

//подключаем модуль работы с файлами

const fs = require('fs');
//создадим поток читающий ReadStream для считвания данных из файла
const ReadStream = fs.createReadStream('../docs/textBig.txt');

//потоок для  записи
//создать пишущий поток - дословный перевод
const writeStream = fs.createWriteStream('../docs/new-text.txt')

//вызываем событие ReadStream.on('data')
//'data' - имя события
// колбек функция - которая будет принимать порции данных или чанки (chunk) в бинарном виде,
// перевели в строковый  chunk.toString()
//  
// ReadStream.on('data',(chunk)=>{
//     console.log('****************');
//    console.log(chunk.toString());
//    //каждый поток запишем в файл
//    //запись осущесвляется порционно
//    //порции отделим друг от друга для наглядности
//    writeStream.write('\n ------ CHUNK ------ \n');
//    writeStream.write(chunk);   
   
// })

//таже самая запись, только короче
//считывание и запись потоков
//берем поток чтения и используем метод pipe внутрь которого передаем поток записи
//
//ReadStream.pipe(writeStream);

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
//и уничтожали попытки чтения и дальнейшей записи при возникновении ошибки
ReadStream
    .on('error',handleError)
    .pipe(writeStream)
    .on('error',handleError);