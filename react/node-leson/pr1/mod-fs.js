const fs=require('fs');
//получим доступ к файлу и чтение из файла
//readfile - асинхронная функция принимает:
//путь к фалу для считывания иннф 
//кодировка 
//колбек функцию (ошибка при чтнеии, данные которые получаем при чтении)

/*
fs.readFile('./text.txt', 'utf-8', (error, data)=>{
    data              ? 
    console.log(data) :
            error     ? 
            console.log(error) : null;
  
    fs.writeFile('./text2.txt',`New text!!! \n ${data}   `,(error)=>{
        error     ? 
        console.log(error) : 
        null;
    })
});
*/

// создание папки и запись файла
 
fs.readFile('./text.txt', 'utf-8', (error, data)=>{
    data              ? 
    console.log(data) :
            error     ? 
            console.log(error) : null;
     
    //  все работает в ассинхронном режиме поэтому через колбеки
    // когда папка создастся  
    // мы помещаем файл с прочитыннами данными  
    fs.mkdirSync('./files',()=>{})
    fs.writeFileSync('./files/text2.txt',`${data} \n New text in folder!!! `,(error)=>{
            error     ? 
            console.log(error) : 
            null;
        })
    
});
 

//прооверяем наличие файла
//удаление файла и папки
/*
setTimeout(() => {
    
    if(fs.existsSync('./files/text2.txt')){
        //удаление файла
        fs.unlink('./files/text2.txt',(err)=>{
            err ? 
            console.log(err) :
            console.log('successfully deleted');
         });
        
    }
}, 1000);
setTimeout(() => {
    if(fs.existsSync('./files')){
        //удаление папки
        fs.rmdir('./files',()=>{});
        
    }  
}, 2000);
*/

    //удаление папки
    setTimeout(() => {
        try{
            fs.unlinkSync('./files/text2.txt');
            fs.rmdirSync('./files2');
            console.log('successfully deleted');
        }catch(err){
            fs.writeFileSync('./texterr.txt',`${err} \n New!!! `,(error)=>{
                error     ? 
                console.log(error) : 
                null;
            })
            console.log(err);
        }
    }, 6000);

    





