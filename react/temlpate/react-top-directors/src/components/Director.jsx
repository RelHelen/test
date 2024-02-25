
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Director.css';

let directors =[
  {
    name:'James',
    lastname:'Cameron'
  },
  {
    name:'Quentin',
    lastname:'Tarantino'
  },
  {
    name:'George ',
    lastname:'Lucas'
  }
]

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
    {/* произйдет  */}
    <Director {...directors[0]}/> 
    <Director {...directors[1]}/> 
    <Director {...directors[2]}/> 
    </>
  )
}
export default DirectorList;
