import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom' 

const Plan=()=>{
  const [count,setCount]=useState(0)
  const [data,setData]=useState({name:'nick',age:20})
//получаем get параметр из url строки
const {demoParam}=useParams()
useEffect(()=>{
console.log(demoParam);
},[demoParam])

  //создадаим функция для изменения стайта
  const increment=()=>{   
    setCount(count+1)

    //чтобы использовать предыдущее значение
    //используем колбек с пред значением
    //setCount((prev=>prev+1))
  }

 const changeAge=()=>{
  //используем спред для изменения данных
  //причем мы должны передать все данные, и  указать, какое именно поле будет меняться
  //с помощью спред показываем что не будет изменять, после запятойто поле- которое меняется
  //setData({...data,age:40})

 let {name,age} =data
 age=age+1
  setData({name,age})

 }
//выполняется в момент когда рендер  компонента закнчен и выполнится один раз, если []  пустые 
// в ,[] - пишется список зависимостей и когда он меняется,useEffect  выполняется
//[data.age] - при изменении data.age будет выполняться useEffect 
 useEffect(()=>{
  console.log(data.age);
 },[data.age])

 useEffect(()=>{
  console.log(count);
 },[count])

 
    return (
        <React.Fragment>
          <span style={{display: 'block', marginTop: "10px",marginLeft:'20px'}}>{count}</span>
          <button onClick={increment}>+</button>

          <span style={{display: 'block', marginTop: "10px",marginLeft:'20px'}}>{data.name}</span>
          <span style={{display: 'block', marginTop: "10px",marginLeft:'20px'}}>{data.age}</span>
          <button onClick={changeAge}>Изменить</button>
        
        </React.Fragment>
      )
}
export default Plan