import  React,{useReducer}  from 'react';
function reducer(state,action){
    //проверим что state ,action приходят
    console.log('state',state);
    console.log('action',action);

    // return{
    //     counter:1
    // }
    if (action.type=='inc'){
        //вернуть новое состояние объекта счетчика
        return {counter: state.counter+1, text: state.text+'i'}
    }
}

export default function CompReducer(){
    const[state,dispatch]=useReducer(reducer,{
        counter: 0,
        text:'h'
    })

    const handlerClick=()=>{
        dispatch({
        type: "inc",
        // payload: 1 
        })
    }
    
    return(
        <>
     <h1>Clicker</h1>
     <button onClick={handlerClick}>нажали {state.counter} </button>
   
    </>
    )
   
}

 
