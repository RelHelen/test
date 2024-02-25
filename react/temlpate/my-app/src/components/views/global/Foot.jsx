import React from 'react'
import css from '../../../styles/style.css'
//деструктурирование объектов
// добавляем компонент {HeaderContainer}
const {FooterContainer} = css
const Foot=()=>{
    return (
        <React.Fragment>
          <FooterContainer></FooterContainer>
        </React.Fragment>
      )
}
export default Foot