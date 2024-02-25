import React from 'react'
import css from "../../styles/form.css"

const {ButtonContainer}=css



const ButtonComponent=(props)=>{    
    const {ButtonCaption}=props
    return (
        <React.Fragment>
            <ButtonContainer></ButtonContainer>
        </React.Fragment>
    )
}
export default ButtonComponent