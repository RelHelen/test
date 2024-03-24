import React,{useState,createRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";

import './App.css';
import DirectorList from './DirectorList'
//useStat не имеет доступа к внешней сущности directors
  //поэтому перенесли массив directors 
  const directors =[
    {
      id:1,
      name:'James',
      lastname:'Cameron' 
  
    },
    {
      id:2,
      name:'Quentin',
      lastname:'Tarantino'
    },
    {
      id:3,
      name:'George ',
      lastname:'Lucas'
    }
  ]

// Steven Allan Spielberg
export default function App() {
  return (
  <div className="container">   
    <DirectorList directors={directors} />
  </div>
  )}
 
