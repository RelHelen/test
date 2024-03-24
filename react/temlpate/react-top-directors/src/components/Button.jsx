 //кнопка дейсвтий
 export default function Button(props){
    const {type,icon,caption,action,className} = props;  
    return(
      <button onClick={action} className={className||"btn btn-primary"} type={type}> <i class={icon}></i>{caption}</button>
      
    )
  }