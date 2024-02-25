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
  const handleSubmit = event=>{
    event.preventDefault();
    console.log('submit отменен');

  }
  return(
    <form className="form" onSubmit={ handleSubmit }>
       <input id="new-dir" name="new-dir" type="text" />
       <input type="submit" />
    </form >
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
