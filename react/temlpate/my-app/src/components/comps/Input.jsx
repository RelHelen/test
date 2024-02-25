import React, {useState} from 'react'
import css from "../../styles/form.css";
//useState - это хук для работы с состоянием

const {Input} = css;
//let inputValue =0;


const InputComponent=(props)=>{
  // const {type, placeholder} = props

//поднятие state:  раззъяснение работы inputValue и action:

// мы передаем в input функцию action через пропс в main action={setValueSum}, а в inpute получаем  {action} = props
//то есть передали из inpit в main,  снизу в вверхний компонент
//в данном случае мы передаем функции setValueSum, котороые изменяют состояние в компоненте main 
//эти функции отработали при изменении в поле input и соответвсенно изменились значения состояния valueSum
//и мы эти значения состояния по обртаному пути сверху вниз передаем из main в input:  inputValue={valueSum}
// и испольлзуя пропс в inpute: inputValue} = props 
// привяываем это значение в value:  value={inputValue}

//поднятие state - это когда ипользуется один общий state , его вынесли из потомка в родителя
//а данные в потомок  из родителя передаются через props

const {type, placeholder, action,inputValue} = props
//раззъяснение работы useState(0 рублей)
// развернем useState(0 рублей) в массив с 2 элементами: const [inputValue,setinputValue]
//
//1элемент- переменная, которая будет хранить в себе локальное значение, 
//которое в нее поместили (это inputValue)
//2элемент- функця, которая позволит реактивно изменять значение этой переменной
//по соглашению, она записывается с приставкой set и далее имя переменной (setInputValue)

//const [inputValue,setInputValue]=useState(0);

const [val,setVal]=useState(1);

    return (
        <React.Fragment>
          <Input
           value={inputValue}
           type={type}
           placeholder={placeholder}
           maxLength={"100"}
           onChange={event=>
          {
            // inputValue=event.target.value
            // console.log(inputValue)
            let newValue=event.target.value
           
           // setInputValue(newValue)

            // let newVal=event.target.value.length
            // setVal(newVal)
           
// action(newValue) - позволяет передавать данные в компонет выше
//она записывает даныые из input и передает 
            action(newValue)
          }}
          /> 
           {/* место, представление, куда передается изменененое значение inputValue  */}
          <span>{inputValue} руб</span>
          {/* <span>{val} длина</span>  */}
        </React.Fragment>
      )
}
export default InputComponent