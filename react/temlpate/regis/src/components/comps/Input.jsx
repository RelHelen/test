import React,{useState} from 'react'
import css from "../../styles/form.css"

const {InputContainer}=css
//let valueInput='';
const InputComponent=(props)=>{
  const {placeholder,action,inputValue}=props
  const [valueSize, setValueSize]=useState(0);
   
    return (
        <React.Fragment>
            <InputContainer
                value={inputValue}
                type="text"
                placeholder={placeholder}
                onChange={event=>{                  
                    console.log(event.target.value);
                    setValueSize(inputValue.length)
                    action(event.target.value)
                }  } 
            />
             <span>{valueSize}</span>  
        </React.Fragment>
    )
}
export default InputComponent