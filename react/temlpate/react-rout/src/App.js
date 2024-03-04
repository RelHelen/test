import React from 'react';
import { BrowserRouter, Routes,  Route ,Link} from 'react-router-dom';
// import {Link, useNavigate} from 'react-router-dom'
import { loremIpsum } from 'lorem-ipsum';
import './App.css';


function Main() {
  return (
    <div className="main">
      <h2> Main page</h2> 
    </div>
  );
}
function AboutCompany() {
  return (
  <>
  <h2>About company</h2>
  <div>
    {loremIpsum({ count: 10 })}
  </div>
  </>
  );
 }
 function NewYork() {
  return (
    <div className="main">
      <h3> NewYork</h3> 
    </div>
  );
}
function Paris() {
  return (
    <div className="main">
      <h3> Paris</h3> 
    </div>
  );
}
function London() {
  return (
    <div className="main">
      <h3> London</h3> 
    </div>
  );
}
 function News() {
  const paths=[
    {
      path: '/new-york',
      value:'NewYork'
    },
    {
      path: '/paris',
      value:'Paris'
    },
    {
      path: '/london',
      value:'London'
    },
  ]
  return (
  <>
  <h2>News</h2>
   <Nav pathes={paths}/> 
   <Routes> 
    
         {/* <Route path="/news/new-york" element={<NewYork/>} /> 
        <Route path="/news/paris/" element={<Paris/>} /> 
        <Route path="/news/london" element={<London/>} />            */}

        {
          paths.map((link,i)=>
            <Route key={i} path={link.path} children={()=>link.value()}/>
            )
        }  
  </Routes> 
   </>
  );
 }
// страница 404
 function NotFound() {
  return <h2>Not found</h2>;
 }
 function Nav(props){
  const {pathes}=props;
  return(
    <>  
    {pathes.map((link,i)=><span className="link"><Link key={i} to={link.path}>{link.value}</Link></span>)}              
    </> 
  )          
}
 function App() {
  const paths=[
    {
      path: '/',
      value:'Main'
    },
    {
      path: '/about',
      value:'AboutCompany'
    },
    {
      path: '/news',
      value:'News'
    },
  ]
  return (
    <>
    
    <BrowserRouter>
      <Nav pathes={paths}/>
      <Routes>     
          <Route exact path="/" element={<Main/>} /> 
          <Route  path="/about" element={<AboutCompany/>} /> 
          <Route  strict path="/news/" element={<News/>} /> 
          <Route  element={<NotFound/>} />     
      </Routes> 
    </BrowserRouter>
    </>
  );
}
export default App;
