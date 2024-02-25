import React,{useEffect} from 'react'
// import Head from '../views/global/Head'
import Foot from '../views/global/Foot'
import DataList from './../views/local/DataList';


const Stat=(props)=>{
  const {statData} = props

    return (
        <React.Fragment>
          {/* <Head></Head> */}
          {<h1>Stat</h1>}
          <DataList
            data={statData}
          />
          <Foot></Foot>
        </React.Fragment>
      )
}
export default Stat