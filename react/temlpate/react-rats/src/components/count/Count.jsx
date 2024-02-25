import  {React, Component} from "react";
import "./Count.css"


export default class Count extends Component{
    //инициализируем конструктор
    //наследуем все пропсы, котороые есть
    constructor(props){
        super(props);
        //инициализируем переменные

        //что будет динамически меняться все прописывается в конструкторе
        
         //и создаем state  котрый ждет, когда мы его заполним
        //объект с ключами
        this.state={
           count: 0
        }
    }
    //  countPlus=()=>{
    //     console.log('увеличим число');
    //     // this.state.count += this.state.count;
    //     this.setState({
    //         count: this.state.count +1
    //     })
    //  }
    //  countMinus=()=>{
    //     console.log('уменьшаем число');
    //     this.setState({
    //         count: this.state.count -1,
    //     })
    //  }
    count = (single)=>{
        
        this.setState({
            count: single === '+' 
                   ? this.state.count + 1 
                   : single === '-'
                   ? this.state.count - 1
                   : single === '*'
                   ? this.state.count * 2
                   : null 
        })
     }
render(){
    return(
        <div className="count-wrapper">
            {/* <button onClick={this.countMinus}>-</button>
            <h1>{this.state.count}</h1>
            <button onClick={this.countPlus}>+</button> */}
            
            {/* реализация одной функцие count */}
            <button onClick={()=>this.count('-')}>-</button>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.count('+')}>+</button>
            <button onClick={()=>this.count('*')}>*2</button> 
        </div> 
    )
}
   
}