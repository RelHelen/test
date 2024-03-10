import React from 'react';
import { BrowserRouter, Routes,  Route ,Link,Outlet,NavLink,useParams } from 'react-router-dom';
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
      {loremIpsum({ count: 10 })}
    </div>
  );
}
function Paris() {
  return (
    <div className="main">
      <h3> Paris</h3>
      {loremIpsum({ count: 10 })} 
    </div>
  );
}
 

const London=()=>{
  return (
    <div className="main">
      <h3> London</h3> 
      {loremIpsum({ count: 10 })}
    </div>
  );
}

function Article() {
  // получаем параметры
  const params = useParams();
  let name = params.name;
  let number = params.number;
  //заменим первую букву из полученного параметра на Заглавную
  // ^\w - означает взять первую букву 
  // компонент вернет параметр name
  name  = name.replace(/^\w/,firstLetter=>firstLetter.toUpperCase());
  //заменим дефисы и нижние подчеркивания напробелы
  //name  = name.replace(/_/g," ");
  name  = name.replace(/_|-/g," ");
  return (  
    <>
    <h4>Наименование статьи:: {name}</h4>  
    <h5>Номер статьи::  {number}</h5>
    </>
  );
}
function ArticleList(){ return <h3>Список статей</h3>;}
function Articles(){
  const paths=[
    {
      path: 'about_technologi-docs/4',
      value:'About technologi'      
    },
    {
      path: 'about_car/1',
      value:'About car'     
    },    
    {
      path: 'about_mobile/11',
      value:'About mobile'      
    }   
  
  ]
  return(
    <>
     
      <h2>Articles</h2>
      <Nav pathes={paths}/>  
      <Outlet />
    </>
  )
}
 function News() {
  
  const paths=[
    {
      path: 'new-york',
      value:'Нью Йорк',
      component:<NewYork/>
    },
    {
      path: 'paris',
      value:'Париж',
      component:<Paris/>,
    },
    
    {
      path: 'london',
      value:'London',
      component:'London'
    }
    , {
      path: '/',
      value:'',
      component: <h3>Все новости</h3>
    }
  
  ]
  return (
  <>   
  <h2>News</h2>   
  <Nav pathes={paths}/>    
 {  <Outlet />  }    
    {/* {  <Routes>
        <Route path="new-york" element={<NewYork/>} /> 
        <Route   path="paris" element={<Paris/>} /> 
        <Route path="london" element={<London/>} />           
     </Routes>  } */}
        
       {/* {  <Routes>
       {
          paths.map((link,i)=>
            <Route key={i} path={link.path} element={link.component} />
            )
        }  
      </Routes>  } */}
         
    
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
    <nav>  
    {/* {pathes.map((link,i)=>
      <span className="link">
        <Link 
          key={i} 
          to={link.path}
        >
            {link.value}
        </Link>
      </span>
      )}               */}
      {pathes.map((link,i)=>
      <span className="link">
        <NavLink 
          key={i} 
          to={link.path}
          className={({ isActive }) =>(isActive ? "active" : "")}
        >
            {link.value}
        </NavLink>
      </span>
      )} 
    </nav> 
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
    }
    ,{
      path: '/articles',
      value:'Articles'
    }
  ]
  return (
    <>
    
    <BrowserRouter>
      <Nav pathes={paths}/>
      <Routes>     
          <Route exact path="/" element={<Main/>} /> 
          <Route  path="/about" element={<AboutCompany/>} /> 
          {/* {  <Route   path="/news/*" element={<News/>} />      } */}
          <Route   path="/news" element={<News/>} > 
                 <Route index element={<h3>Все новоси</h3>} />                    
                 <Route path="new-york" element={<NewYork/>} /> 
                 <Route path="paris" element={<Paris/>} />
                 <Route path="london" element={<London/>} />                 
         </Route>
          <Route path="articles" element={<Articles/>}> 
              <Route index element={<ArticleList />} />
             <Route path=":name/:number" element={<Article/>}/>
          </Route>          
          <Route   path="*" element={<NotFound/>} />     
      </Routes> 
    </BrowserRouter>
    </>
  );
}
export default App;
