import React from 'react'
import css from '../../../styles/style.css'

const {HeaderContainer,HeaderCSS}=css
const cssSpan={
  display: 'block',
  padding: '8px 15px',
  marginRight: '16px',
  borderRadius: '6px',
  backgroundColor: '#6bf5b8',
  color: 'black',
  cursor: 'pointer'
}

const Head=()=>{
    return(
       <React.Fragment>
           <HeaderContainer>
             <HeaderCSS.LogoContainer>{"Logo"}</HeaderCSS.LogoContainer>
           
           <HeaderCSS.MenuContainer>
              <span style={cssSpan}>Главная</span>
              <span style={cssSpan}>ййй</span>
              <span style={cssSpan}>ццц</span>
           </HeaderCSS.MenuContainer>
           </HeaderContainer>
       </React.Fragment>  
    )
   }
export default Head