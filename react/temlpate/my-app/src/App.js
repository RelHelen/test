import React,{useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Head from './components/views/global/Head';
import Main from './components/pages/Main'
import Stat from './components/pages/Stat';
import Plan from './components/pages/Plan'; 


 

function App() {
  const [showPage, setShowPage]=useState('main')
  const [dataTransac,setDataTransac]= useState([])

  return (
    <React.Fragment>
       <Head></Head>
       {/* строим маршрут */}
      <Routes>
        {/* компонент маршрута <Route/>  может иметь 4 пропса
        path- маршрут
        element -какой компонет бует отображаться
        */}
        <Route
         path={'/main'}
         element={<Main action={setDataTransac}/>}
        />
        <Route
         path={'/stat'}
         element={<Stat statData={dataTransac}/>}
        />
        <Route
         path={'/plan/:demoParam'}
         element={<Plan/>}
        />
       
      </Routes>

      {/* <Head action={setShowPage}></Head> */}
      {/* {console.log(showPage)}
      {showPage==='main'
      ? <Main action={setDataTransac}></Main> 
        :showPage==='stat'
        ?<Stat statData={dataTransac}></Stat>
      : <Plan></Plan>
      } */}
      
      
    </React.Fragment>
  );
}

export default App;
