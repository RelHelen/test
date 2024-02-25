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
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    background-color: #bdbdbd;
    border-radius: 6px;
    `,
    Input: styled.input`
    display: block;
    outline: none;
    border: none;
    height: 40px;
    padding: 5px 16px;
    width: 100%;
    margin-bottom: 12px;
    border-radius: 3px;
    :last-child{
        margin-bottom: 0px;
    }
    `,     
    Button: styled.span`
    display: block;   
    border: none;    
    padding: 10px 16px;
    width: 220px;
    margin: 12px 0;
    border-radius: 3px;    
    background-color: ${props=>props.backgroundcolor};/*колбек принимает props и на выходе  возвращает backgroundColor= #B0F347 */
    :last-child{
        margin-bottom: 0px;
    }
    :hover{
        cursor:pointer;
    }
    
    `
}

export default css