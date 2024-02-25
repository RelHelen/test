import React,{useState} from 'react'
import Head from '../view/global/Head'
import Foot from '../view/global/Foot'
import css from '../../styles/form.css'
import InputComponent from '../comps/Input'
//import ButtonComponent from '../comps/Button'


const {FormContainer,ButtonContainer}=css

const Main=()=>{

const [valueName, setValueName ]=useState('');
const [valueLogin, setValueLogin ]=useState('');
const [valuePassword, setValuePassword ]=useState('');
const [valueMail, setValueMail]=useState('');

const validation=()=>{
    if(valueName.length>2 && valueLogin.length>2){
        console.log('валидация успешна');
        setValueName('')
        setValueLogin('')
        setValuePassword('')
        setValueMail('')
        
    }else{         
        console.log('валидация не пройдена');  
    }
}

 return(
    <React.Fragment>
        <Head></Head>
            <FormContainer>
                <InputComponent inputValue={valueName} action={setValueName} placeholder={"Введите имя"}/>
                <InputComponent inputValue={valueLogin} action={setValueLogin} placeholder={"Введите логин"}/>
                <InputComponent inputValue={valuePassword} action={setValuePassword} placeholder={"Введите пароль"}/>
                <InputComponent inputValue={valueMail} action={setValueMail} placeholder={"Введите почту"}/>
                <ButtonContainer
                 backgroundcolor={
                    valueName.length<3  ?
                        '#ccc'   :
                        valueLogin.length<3 ?
                        '#ccc' :
                        '#6bf5b8'}
                 onClick={validation}
                >Зарегестрироваться</ButtonContainer>

            </FormContainer>
<p>{valueName}</p>
<p>{valueLogin}</p>
<p>{valuePassword}</p>
<p>{valueMail}</p>
        <Foot></Foot>
    </React.Fragment>  
 )
}
export default Main

