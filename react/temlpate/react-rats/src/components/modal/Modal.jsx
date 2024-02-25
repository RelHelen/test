import   {React, Component} from 'react';
import Count from './../count/Count';
 import "./Modal.css";

export default class Modal extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow: false,
            inputValue:''
        }
    }   

    closeModal=()=>{ 
        console.log('скрыли');      
        this.setState({
            isShow: false
        })        
    }
    showModal=()=>{
        console.log('открыли');
        this.setState({
            isShow:  true
        })
     }
    setInputValue=(e)=>{
       this.setState({
        inputValue: e.target.value
       })
    }
    clearInputValue=()=>{
        this.setState({
            inputValue: ''
           })  
    }
    render(){        
        return(
            <div>  
                <input type="text" 
                onChange={this.setInputValue} 
                value={this.state.inputValue}
                /> 

                <p>{this.state.inputValue}</p>   
                <input type="button" onClick={this.clearInputValue} value="Очистить"/> 
<br/>
                <button 
                className="btn_open" 
                onClick={this.showModal}> 
                  Открыть модальное окно
                </button>                
                
                <div className={
                `modal-wrapper ${!this.state.isShow && 'modal-hide'}
                `}
                >
                    <div className="modal-content">
                    <header>
                        <p>модальное окно</p>
                        
                    </header>
                       <img src="https://i.pinimg.com/originals/de/99/d4/de99d464c63192382f1b9767c0426f21.gif" alt="" />
                    <footer>
                    <button 
                        className="btn_close"
                        onClick={this.closeModal}
                        > Закрыть</button>
                        </footer>   
                    </div>
                </div>      
            </div>    
        )
    }
}
