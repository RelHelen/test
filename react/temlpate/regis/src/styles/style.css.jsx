
import styled from 'styled-components'
const css={
    HeaderContainer:styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #202634;
    padding: 0 40px;
    position: relative;
    `,
    HeaderCSS:{
       LogoContainer:styled.div`
       color: #fff;
       font-size: 26px;` 
       ,
       MenuContainer:styled.nav`
       display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            position: relative;
       `
    },
    FooterContainer:styled.footer`
    display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     width: 100%;
     height: 80px;
     background-color: #989dab;
     padding: 0 40px;
     position: relative;
    `

}
export default css
