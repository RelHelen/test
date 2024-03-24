import React,{useState,createRef} from 'react';
import Button from './Button';
function Form(props){
    const {action}=props;  
 
    const output =  createRef();  
    const newDirectors =  createRef(); 
  
    const  [val, setVal] = useState('');
    const  [nameValid, setNameValid] = useState(true);
    const  [error, setError] = useState('');
     
const handleSubmit = event=>{
        event.preventDefault();        
          /*
         Получаем доступ к текстовому полю
         */
        //  let uName = document.getElementById('newDir');         
        //  console.log(uName.value); 
         
         const [name, lastname] = val.trim().split(' ');
         if(nameValid){
         setError('');
         action({name, lastname}); setVal('');} 
         else {setError('введите больше данных')}
         
 }
   
const handleClick = () =>{ 
        //   output.current.textContent = newDirectors.current.value;
}
const handleChange = (e) =>{ 
        // output.current.textContent = newDirectors.current.value;
        //setVal(newDirectors.current.value);
        let val = e.target.value;
        let valid =  validateName(val);
         setNameValid(valid);
         setVal(val);  
    
}
   
const handleClickDirector = (val) =>{ 
        // результатом метода split является разделение строки 
        // на несколько элементов массива
        //const [name, lastname] = newDirectors.current.value.split(' ');
        //const [name, lastname] = val.trim().split(' ');
    
        //  console.log(val.split(' '));
        //  console.log(name,lastname);
        
        //  const newDirector ={
        //    name: name,
        //    lastname: lastname
        //  }
    
        //можно сократить
        //  const newDirector ={name, lastname }
        //  props.action(newDirector);
    
        //можно сократить
        //action({name, lastname});
    
        //очистили поле
        // newDirectors.current.value ='';
        // output.current.textContent='';
        //setVal('');
}
function validateName(name){ 
        //Для проверки регулярного выражения в JavaScript можно использовать метод test() объекта RegExp. Этот метод возвращает true, если регулярное выражение соответствует строке, и false в противном случае.
       //  var regCheck = new RegExp("^([0-9a-zA-Z]+[-._+&])$");
                        //        const regex = /^h.*o$/;
                        // const str = 'hello';
                        // const result = regex.test(str);
        console.log(/^\w/.test(name));
        // return regCheck.test(name)
      //if (/^\w/.test(name))&&  name.length>2      
      // return  name.length>2;
      return ((/^\w/.test(name))&& name.length>2)
    }

   return( 
    <> 
    <section className="form-section">
    <p>Введите Имя Фамилию режиссера</p>
     <form className="form" onSubmit={handleSubmit}>
        {/* <p ref={output}>{val}</p>   */}
         
        <input 
           id="newDir"  
           type="text" 
           ref={newDirectors}          
           onChange={handleChange} 
             value={val} 
             className="form-control"
             style={{borderColor: nameValid===true?"green":"red"}}        
         />     
           
        {/* <button 
          type="submit" 
          className="btn btn-light"> 
          <i className="bi bi-plus"></i>
        </button>  */}
        <Button type={"submit"} className={"btn btn-light"}  icon={"bi bi-plus"} caption={""}/> 
            
             
     </form>
     <p className="text-center">{error}</p>
     </section>
     </>
    
   )
 }
 

  export default Form