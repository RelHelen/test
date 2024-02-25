import './App.css';
import Rat from './components/rat/Rat'; 
import Modal from './components/modal/Modal';
import Count from './components/count/Count';

function App() {
  return (
   
    <div className="App">
       <Modal/>
       <Count/>
      <Rat 
        ratName="Лулу" 
        age={2} 
        color={"голубой"} 
        isFat={false}
        colorCard='#0b85df'
      />
      <Rat 
        ratName="Пыня" 
        age={5} 
        color={"дымчевый"} 
        isFat={true} 
        isShow
        colorCard='#909aa2'/>
      
      <Rat 
         ratName="Дыма" 
         age={2.2} 
         color={"коричневый"} 
         isFat={false} 
         colorCard='#775b2e'/>
    </div>
  );
}

export default App;
