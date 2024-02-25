import styled from 'styled-components'

const css={
   
    FormContainer:styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 500px;
    position: relative;     
    margin: 50px auto;
    padding: 50px;    
    background-color:#ddd;
    border-radius: 6px;
    `,
    InputContainer:styled.input`
    display: block;
    outline: none;
    border: none;
    height: 40px;
    padding: 5px 16px;
    width: 100%;
    margin-bottom: 12px;
    border-radius: 3px;
    `
    ,    
    ButtonContainer: styled.button`    
    display: block;   
    border: none;    
    padding: 10px 16px;
    width: 220px;
    margin: 12px 0;
    border-radius: 3px;
    background-color: ${props=>props.backgroundcolor};
    &:hover{
        border: 1ps solod red;
    }
    `
 
}

export default css