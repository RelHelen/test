import React, {useState} from 'react'
// import Head from '../views/global/Head'
import Foot from '../views/global/Foot'
import InputComponent from '../comps/Input' 
import css from '../../styles/form.css'
import DataList from './../views/local/DataList';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//React.creatElement{
 // 'input',{placeholder: "Введите сумму транзакции"},null
//} 

// {placeholder: "Введите сумму транзакции"} этот объект и есть props -  пары атрибут и значение которые 
//подставляются для передачи данных в html подобных тегах 
const {FormContainer, Button} = css
const Main=(props)=>{
const {action} =props
  //определим 3 состояния
  //каждое из состояний прицепили к соответсвующему input
const [valueSum, setValueSum ]=useState('');
const [valueType, setValueType ]=useState('доход');
const [valueComment, setValueComment ]=useState('');

// data - содержит все транзакции
const [dataTrun,setDataTrun]= useState([])
//
const validation=()=>{
  if(valueSum.length>1 && valueType){
    console.log("валидация успешна");
    // хук useState плохо работате со сложнымиструктурами,поэтому опишим 
    //dataLine котораясодержитстрокой три состояния - State
    //:: - это просто символ для разделения стейтов
   // const dataLine =[`${valueSum}::${valueType}::${valueComment}`]
    //setDataTrun(dataLine) - задает новое значение,не хранит предыдущее значение
   // setDataTrun(dataLine)

   const dataLine =`${valueSum}::${valueType}::${valueComment}`
   //prev - предыдущее состояние state
    // setDataTrun(
    // {
    //   let  newData= prev
    //   newData.push(dataLine)
    //   return newData
    //  }) //происходит дублирование данных из-за строгого режима <React.StrictMode >
   
    setDataTrun(
     prev=>[...prev,dataLine]   
    )

    action( prev=>[...prev,dataLine]   )

    //очистим значения после успешной валидации
    setValueSum('')
    setValueType('доход')
    setValueComment('')
   
  } else{
    console.log("не валидны");
  }

}
//  с помощью пропса inputValue={valueSum} данные отправляем в компонент-потомок InputComponent
//с помощью пропса  action={setValueSum} мы из компонента имеем возможность 
//менять state
//при этом сам state крутится в  компонент-родителе в Main


  const handleChange = (event) => {
    setValueType(event.target.value);
  };

  const handleChangeComment = (event) => {
    setValueComment(event.target.value);
  };
return (
        <React.Fragment>
          {/* <Head></Head> */}
          {<h1>Main</h1>}
          <FormContainer>
            <InputComponent inputValue={valueSum} action={setValueSum} type={"text"} placeholder={"Введите сумму транзакции"}/>
            
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Выберите тип  транзакции</FormLabel>
              <RadioGroup row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={valueType}
                onChange={handleChange}
              >
              
              <FormControlLabel value="доход" control={<Radio />} label="Доход" />
              <FormControlLabel value="расход" control={<Radio />} label="Расход" />
            </RadioGroup>
           </FormControl>

            <InputComponent inputValue={valueType} action={setValueType} type={"text"} placeholder={"Введите тип транзакции"}/>
           
            {valueType==='доход'&&<InputComponent inputValue={valueComment} action={setValueComment} type={"text"} placeholder={"Введите комментарий"}/>}
            {valueType==='расход'&&<FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Выберите тип расхода</FormLabel>
              <RadioGroup  
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={valueComment}
                onChange={handleChangeComment}
              >
              
              <FormControlLabel value="покупка продуктов" control={<Radio />} label="покупка продуктов" />
              <FormControlLabel value="оплата счетов" control={<Radio />} label="оплата счетов" />
              <FormControlLabel value="расход на трансопрт" control={<Radio />} label="расход на трансопрт" />
              <FormControlLabel value="непредвиденные расходы" control={<Radio />} label="непредвиденные расходы" />
            </RadioGroup>
           </FormControl>}


            <Button 
               backgroundcolor={
                valueSum.length<3  ?
                  "#ddd" :
                valueType.length<3 ?
                  "#ddd" :
                  "#B0F349"             

              }
               onClick={validation}
            >Сохранить транзакцию</Button>
          </FormContainer>

          <DataList data={dataTrun}/>
          
          <span>{valueSum}</span><br />
          <span>{valueType}</span><br />
          <span>{valueComment}</span><br />

          <Foot></Foot>
        </React.Fragment>
      )
}
export default Main