import React from 'react';
import './Director.css';

let directors =[
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
// Steven Allan Spielberg
function Form(){
  const output = React.createRef();  
  const newDirectors = React.createRef();   
  
  const handleClick = event=>{ 
    output.current.textContent = newDirectors.current.value;
  }
  return(  
    <div className="form">
       <p ref={output}></p>  
       <input id="new-dir"  type="text" ref={newDirectors}/>
       <input type="button" onClick={handleClick} value="добавить"/>   
    </div>
  )
}
function Director(props) {
  const {name,lastname} = props;
  return (
    <div className="container-dir">
       { name } { lastname }
    </div>
  );
}

//вызывает Director и передает пропсы по каждому компоненту
function DirectorList(){
  return(
    <>
     {/* 1способ */}
    {/* <Director {...directors[0]}/> 
    <Director {...directors[1]}/> 
    <Director {...directors[2]}/>  */}
    
    <div className="directors">
     {/*2способ */}
    { 
    directors.map(director => {
      return (
       
        <Director 
        { ...director } 
        key={director.id}
      />
      )})
     }
     </div>
     <Form />
    </>
  )
}
export default DirectorList;
