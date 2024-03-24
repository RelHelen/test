import React,{ useState, useContext } from 'react';
import { Context } from './context';

import Button from './Button';
//панель навигации
export default function NavButtons(props){  
 //const {listRemove, listRemove,listDec,listIncName,listDecName,listIncFio,listDecFio} =props;
 const {listRemove, listInc,listDec,listIncName,listDecName,listIncFio,listDecFio}=useContext(Context)  
    
 return(
        
   <section className="d-flex p-3 justify-content-center sortList">
    
      {/* <button onClick={listRemove} class="btn btn-primary">Удалить </button>
      <button onClick={listInc} class="btn btn-primary"><i class="bi bi-arrow-up"></i> id </button>
      <button onClick={listDec} class="btn btn-primary"><i class="bi bi-arrow-down"></i> id </button>
      <button onClick={listIncName} class="btn btn-primary"><i class="bi bi-arrow-up"></i>Name </button>
      <button onClick={listDecName} class="btn btn-primary"><i class="bi bi-arrow-down"></i>  Name </button> */}
       
        <Button  action={listRemove}  caption={"Удалить"}/> 
       
        <Button  action={listInc} icon={"bi bi-arrow-up"} caption={"id"}/> 
        <Button action={listDec} icon={"bi bi-arrow-down"}caption={"id"}/> 

        <Button action={listIncName} icon={"bi bi-arrow-up"} caption={"Name"}/> 
        <Button action={listDecName}icon={"bi bi-arrow-down"}caption={"Name"} /> 

        <Button action={listIncFio} icon={"bi bi-arrow-up"} caption={"Sename"}/> 
        <Button action={listDecFio} icon={"bi bi-arrow-down"}caption={"Sename"}/>
        
        </section> 
    )
}