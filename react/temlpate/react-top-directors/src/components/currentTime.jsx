import React, {Component} from 'react';

class CurrentTime extends Component{ 
    
    /*1 этап
    Он вызывается до того, как компонент прикреплен внутрь DOM. 
    Когда мы передаем <App/> в reactDom.render(),
    React вызывает конструктор
    
          currentTime: new Date(); - текущее время
    
    */  
    constructor(props){
      console.log('constructor');
        super(props);
        this.state={
          counter : 0,
          currentTime: new Date(),
        }
      }
    
    /* 3 этап Монтирование */
    componentDidMount(){
      console.log('componentDidMount');
        
      
              this.timerId= setInterval(
                ()=> this.tick(),
                1000
              )
    }
    /**
     * 4 этап     * таймер вызывает tick() каждую секунду*/
     tick(){
      return(
         this.setState({currentTime: new Date()})
         )
     }
     click(){
        return(
            console.log('click')
        ) 
       }
    /** Обновление  */
     componentDidUpdate(){
       console.log('componentDidUpdate'); 
       document.addEventListener('click',this.click)  
       
     }
     /**5этап Размонтирование  */
      componentWillUnmount(){
        console.log('componentWillUnmount');
         document.removeEventListener('click',this.click)
        clearInterval(this.timerId);

      }
    
    /* 2 этап render() — используется для рендеринга компонента. */

    render(){
        console.log('render');      
        const clickHandler=()=>{
            console.log('clickHandler');
            this.setState({counter: this.state.counter + 1})
          }
      /** компонент возращает  */
      return (
            <div className="App">
               <h2>Clock example</h2>
               
               <button onClick={clickHandler}>{
                   this.state.counter
               }</button>
                
               <h3>Current time : {
                 this.state.currentTime.toLocaleTimeString()
               }</h3>
            </div>
          ); 
    }
    }

    

    
  
export default CurrentTime;