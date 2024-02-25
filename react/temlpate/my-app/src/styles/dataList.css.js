import { styled } from 'styled-components';

const css={
    DataContainer:styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 800px;  
    height: auto;       
    margin: 50px auto;
    padding: 50px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    background-color: #fff;
    border-radius: 6px;
    `,
    ContentLine:styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;    
    `,
    ContentCell:styled.span`
    display: block;
    position: relative;
    font-size: 14px;
    margin-right: 8px;
    &:first-child{
        margin-right: 18px;
    };
    width:${props=>props.width}
    `,
    ButtonsLine:styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 800px; 
    margin: 20px auto;   
    `,
    ButtonItem:styled.span`
    display: block;
    position: relative;
    font-size: 14px;
    margin-right: 8px;
    color: grey;
    cursor: pointer;
    `

}

export default css