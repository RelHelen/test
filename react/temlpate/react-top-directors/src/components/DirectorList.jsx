import React,{useState,createRef,useEffect } from 'react';
import { Context } from './context';
//const Context = React.createContext() ;

import Director from './Director';
import Form from './Form';
import NavButtons from './NavButtons';


//useStat не имеет доступа к внешней сущности directors

//вызывает Director и передает пропсы по каждому компоненту
function DirectorList(props){
  const {directors} = props
  const [directorsList,setDirectorsList] = useState(
    JSON.parse(localStorage.getItem('directors')) ||[]
    );
   

  const handleClick=()=>{
    console.log('click');
  }

  useEffect(
    ()=>{
      document.addEventListener('click',handleClick);
       console.log(directorsList.length);
       
       //Будем сохранять изменения todos  в localStorage 
    
   //JSON.stringify() -преобразуем в строку массив
   //localStorage.setItem('directors',JSON.stringify(directorsList));

   localStorage.setItem('directors',JSON.stringify(directorsList));
    //можно удалить лишние слушатели, которые у нас есть
    // и очистить компонент
    return()=>{
      document.removeEventListener('click',handleClick); 
    
    }
    },[directorsList]

  )
  
  const addDirectors =(newDirector)=>{
    //создали newDirector, она формируется 
    //на основе текущей directorsList - как копия существующего масссив
    // const newDirectorList = [...directorsList]; 
    
    //создали новый объект на основе данных, котороые прилетели
    //этому объекту добавили id - берем из расчета количества элментов в маасиве    
     
    (directorsList.length>0) && directorsList.sort((a, b) => a.id - b.id) ;
    let key = directorsList.length>0       
        ? directorsList[directorsList.length-1].id + 1
        : 1;     
   
   
        //даллее этот объект пушим в массив
          // newDirectorList.push(newDirector);
        //установили в  state  новый массив
        //запускает изменение состояния directorsList
         //setDirectorsList(newDirectorList)
    setDirectorsList([...directorsList, {id:  key,...newDirector }])  ;
    
  }

  const removeItem = id => {
    console.log(id) ; 
    setDirectorsList(directorsList => directorsList.filter(el => el.id !== id))
   
  }
  const listInc=()=>{  
   setDirectorsList([...directorsList].sort((a, b) => a.id - b.id)) ;   
  }
  
  const listDec=()=>{    
    setDirectorsList([...directorsList].sort((a, b) => b.id - a.id)) ;   
  }

  const listDecName=()=>{
       setDirectorsList([...directorsList].sort((a,b)=> b.name.localeCompare(a.name)))
      
  }
  const listIncName=()=>{
    let sortDirectors = [...directorsList];
    sortDirectors=sortDirectors.sort((a,b)=> a.name.localeCompare(b.name)); 
   // console.log(sortDirectors);         
    setDirectorsList(sortDirectors) ;   
      
  }
  const listDecFio=()=>{
    let sortDirectors = [...directorsList]; 
    sortDirectors=sortDirectors.sort((a,b)=> b.lastname.localeCompare(a.lastname));
   // console.log(sortDirectors);         
    setDirectorsList(sortDirectors) ;   
      
  }
  const listIncFio=()=>{
    let sortDirectors = [...directorsList];
    sortDirectors=sortDirectors.sort((a,b)=> a.lastname.localeCompare(b.lastname)); 
    //console.log(sortDirectors);         
    setDirectorsList(sortDirectors) ;   
      
  }
  const listRemove=()=>{
    setDirectorsList([])
  }
  return(
    <Context.Provider value={{
      listRemove,listInc,
      listDec,listDecName,listIncName,
      listDecFio,listIncFio,   
    }}>

    <>   
      <NavButtons 
        //  listRemove={listRemove}      
        //  listInc={listInc}
        //  listDec={listDec}
        //  listDecName={listDecName}
        //  listIncName={listIncName}
        //  listDecFio={listDecFio}
        //  listIncFio={listIncFio}        
      />
       
    
    {/* 1способ */}
    {/* <Director name={'James'} lastname={'Cameron'}/> 
    <Director  name={directors[0].name}  lastname={directors[0].lastname} /> 
    <Director {...{name:'Quentin', lastname:'Tarantino'}}/> 
    <Director {...{name:directors[1].name, lastname:directors[1].lastname}}/> 
     
    <Director {...directors[2]}/>  */}
    <Form action={addDirectors}/>

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
    
    </> 
    </Context.Provider>
  )
}
export default DirectorList;
