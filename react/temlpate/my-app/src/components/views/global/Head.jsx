import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import css from '../../../styles/style.css'
//деструктурирование объектов
// добавляем компонент {HeaderContainer}
const {HeaderContainer, HeaderCss} = css
const spanCSS={
  display: 'block',
  padding: '8px 15px',
  marginRight: '16px',
  borderRadius: '6px',
  backgroundColor: '#B0f347',
  color: 'black',
  cursor: 'pointer'
} 
//компонент который отображает транзакции
const Head=(props)=>{
  const {action}=props
  //useNavigate принимает параметр, куда должен происходить переход
  const navigate = useNavigate()
  
    return (
        <React.Fragment>
           <HeaderContainer>
              <HeaderCss.Logo>{"FinManager"}</HeaderCss.Logo>
              <HeaderCss.MenuContainer>
                {/* <span style={spanCSS} onClick={()=>action('main')}>Главная</span>
                <span style={spanCSS} onClick={()=>action('stat')}>Статистика</span>
                <span style={spanCSS} onClick={()=>action('plan')}>Планирование</span> */}

{/* с исполльзование компонента Link */}
                {/* <span style={spanCSS} ><Link to={'/main'}>Главная</Link></span>
                <span style={spanCSS} ><Link to={'/stat'}>Статистика</Link></span>
                <span style={spanCSS} ><Link to={'/plan'}>Планирование</Link></span> */}
{/* с исполльзование компонента navigate */}
                <span style={spanCSS} onClick={()=>navigate('/main')}> Главная</span>
                <span style={spanCSS} onClick={()=>navigate('/stat')}>Статистика </span>
                <span style={spanCSS} onClick={()=>navigate('/plan/demoParametr001')}>Планирование </span>
              </HeaderCss.MenuContainer>
           </HeaderContainer>
        </React.Fragment>
      )
}
export default Head