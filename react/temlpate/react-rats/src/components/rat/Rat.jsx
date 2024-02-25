import    React, {Component}  from 'react';
import  "./Rat.css";
//экспоритируем единственный экземляр класса Rat унаследованный от  Component
export default class Rat extends Component{
//создаем свойства
constructor(props){
//наследуем пропсы
 super(props);
 //инициализируем переменные 

 }
//вызываем метод рендер
render(){
    //console.log(this.props)
    return(
        <div 
            className="card" 
            
            style={{backgroundColor: this.props.isFat ?'#fff' : 'antiquewhite'}}
            >
       
        <p >Привет!!!! Меня зовут {this.props.ratName}</p>
        <p>Мне {this.props.age} 
            {this.props.age === 1 
            ?' год' 
            : this.props.age >=2 && this.props.age <=4
            ? ' года'
            : ' лет'
            }</p>
        <p style={{color:this.props.colorCard}}> Мой цвет {this.props.color}</p>
        <p> Я  {this.props.isFat ? '' : 'не '}пухляш </p>
        
         {this.props.isShow && (<p>Меня показывают только для Пыни</p>)}
         
        </div>
    )
  
}
}


