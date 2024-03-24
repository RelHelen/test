//выводит один пункт списка из режиссеров
export default function Director(props) {   
    const {id,name,lastname,action} = props;  
    return (
    <li 
      className="list" 
      //  onDoubleClick={action}
       >       
      <span>{id}</span> 
      <span>{ name }</span> 
      <span>{ lastname }</span>     
      <i 
         className="bi bi-trash-fill text-danger"
         //onClick= {()=>removeItem(id)}
        onClick={action}
      ></i>
    </li>
    );
  }