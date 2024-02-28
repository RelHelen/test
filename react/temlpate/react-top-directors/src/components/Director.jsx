import React,{useState} from 'react';
import './Director.css';


// Steven Allan Spielberg
function Form(props){
   const {action}=props;  

    const output = React.createRef();  
    const newDirectors = React.createRef();   
 
    const  [val, setVal] = useState('');

   const handleClick = () =>{ 
  //   output.current.textContent = newDirectors.current.value;
  }
  const handleChange = (e) =>{ 
   // output.current.textContent = newDirectors.current.value;
   //setVal(newDirectors.current.value);
   setVal(e.target.value);  
   
  }
  
  const handleClickDirector = (val) =>{ 
    // результатом метода split является разделение строки 
    // на несколько элементов массива
   //const [name, lastname] = newDirectors.current.value.split(' ');
   const [name, lastname] = val.trim().split(' ');

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
     action({name, lastname});

     //очистили поле
    // newDirectors.current.value ='';
    // output.current.textContent='';
    setVal('');
  }
 
  return(  
    <div className="form">
       {/* <p ref={output}>{val}</p>   */}
       <p>1 {val}</p> 
       <input 
          id="new-dir"  
          type="text" 
          ref={newDirectors}          
          onChange={handleChange} 
          value={val}         
        />     
          
       <input type="button" 
         onClick={()=>handleClickDirector(val)} 
         value="добавить"/>   
    </div>
  )
}

//выводит один пункт списка из режиссеров
function Director(props) {
   
  const {id,name,lastname,action} = props;
  
  return (
    <li 
    className="list" 
     onDoubleClick={action}
    >
       {id}. { name } { lastname }     
    </li>
  );
}

//вызывает Director и передает пропсы по каждому компоненту
function DirectorList(){
  //useStat не имеет доступа к внешней сущности directors
  //поэтому перенесли массив directors 
  const directors =[
    {
      id:1,
      name:'James',
      lastname:'Cameron' 
  
    },
    {
      id:2,
      name:'Quentin',
      lastname:'Tarantino'
    },
    {
      id:3,
      name:'George ',
      lastname:'Lucas'
    }
  ]
  const [directorsList,setDirectorsList] = useState(directors);
  
  const addDirectors =(newDirector)=>{
    //создали newDirector формируется 
    //на основе текущей directorsList - как копия существующего масссив
    const newDirectorList = [...directorsList]; 
    
    //создали новый объект на основе данных, котороые прилетели
    //этому объекту добавили id - берем из расчета количества элментов в маасиве
    let key = directorsList[directorsList.length-1].id;
    
    // console.log("key last",key);
    newDirector={ 
        // id:directorsList.length-1, 
        id:  key+1,           
        // name:'James ',
        // lastname:'Cameron' 
        ...newDirector     
    }
    console.log("directorsList",directorsList);
    //даллее этот объект пушим в массив
    newDirectorList.push(newDirector);
    //установили в  state  новый массив
    //запускает изменение состояния directorsList
    setDirectorsList(newDirectorList)
  }

  const removeItem = id => {
    console.log(id) ; 
    setDirectorsList(directors => directors.filter(el => el.id !== id))
    
  }
  return(
    <>
    
     {/* 1способ */}
    {/* <Director {...directors[0]}/> 
    <Director {...directors[1]}/> 
    <Director {...directors[2]}/>  */}
    
    <ol className="directors">
     {/*2способ */}
    { 
    directorsList.map(director => {
      return (       
        <Director 
        { ...director } 
        key={director.id}
        action={()=>removeItem(director.id)}
      />
      )})
     }
     </ol>
     <Form action={addDirectors}/>
    </>
  )
}

export default DirectorList;
