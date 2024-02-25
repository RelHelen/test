import React,{useEffect, useState} from 'react';
import css  from '../../../styles/dataList.css';

const {DataContainer,ContentLine,ContentCell,ButtonsLine,ButtonItem} = css

const DataList =(props)=>{

const {data=[]}=props
const [dataType,setDataType]=useState('доход')
const filterData=data.filter(item=>item.split('::')[1]===dataType)

const filterDataSum=data.filter(item=>item.split('::')[1]===dataType).reduce((sum,item)=>{
    sum+=parseInt(item.split('::')[0])
    return sum
},0)

const filterDataDelta=data.reduce((sum,item)=>{
    if(item.split('::')[1]==='расход'){
        console.log(item.split('::')[1]); 
        console.log(sum - parseInt(item.split('::')[0])); 
       return sum - parseInt(item.split('::')[0])
           
    }else{
        console.log(item.split('::')[1]); 
        console.log(sum + parseInt(item.split('::')[0])); 
        return sum + parseInt(item.split('::')[0])
    }     
    
},0)

 const reduceDataType1=()=> setDataType('доход')
 const reduceDataType2=()=> setDataType('расход')
 const reduceDataType3=()=> setDataType('')


 useEffect(()=>{
    console.log(data);
 })

 return (
    <React.Fragment>
        <ButtonsLine>
                <ButtonItem onClick={reduceDataType1}>Доход</ButtonItem>
                <ButtonItem onClick={reduceDataType2}>Расход</ButtonItem>
                <ButtonItem onClick={reduceDataType3}>Все</ButtonItem>
            </ButtonsLine>
        <DataContainer>
            {/* <ContentLine>
                <ContentCell style={{textAlign:"right"}} width={"18%"}>{"1000"}</ContentCell>
                <ContentCell width={"18%"}>{"доход"}</ContentCell>
                <ContentCell  width={"60%"}>{"раздавал листовки"}</ContentCell>
            </ContentLine> */}
            {/*    {Array(4).fill(null).map((item,index)=>{ console.log(index+1)})}*/}
             {/* {data.map((item,index)=>{
                return(     
                   // key={index} треюования реакта прописать key
                   <ContentLine key={index}>
                        <ContentCell style={{textAlign:"right"}} width={"18%"}>{item.split('::')[0]}</ContentCell>
                        <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                        <ContentCell  width={"50%"}>{item.split('::')[2]}</ContentCell>
                    </ContentLine>                   
                )
             })} */}
            {filterData.length > 0 && <React.Fragment>         
                {filterData.map((item,index)=>{
                    return(     
                    // key={index} треюования реакта прописать key
                    <ContentLine key={index}>
                            <ContentCell style={{textAlign:"right"}} width={"18%"}>{item.split('::')[0]}</ContentCell>
                            <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                            <ContentCell  width={"50%"}>{item.split('::')[2]}</ContentCell>
                        </ContentLine>                   
                    )
                })}
                {/* вывод суммы */}               
                
            <ContentLine style={{marginTop:"40px"}}>
                <ContentCell style={{textAlign:"right"}} width={"18%"}>{filterDataSum}</ContentCell>
                <ContentCell width={"20%"}>{"-------"}</ContentCell>
                <ContentCell  width={"50%"}>{"-------"}</ContentCell>
            </ContentLine>  
            </React.Fragment>}

            {filterData.length === 0 && <React.Fragment>         
                {data.map((item,index)=>{
                    return(     
                    // key={index} треюования реакта прописать key
                    <ContentLine key={index}>
                            <ContentCell style={{textAlign:"right"}} width={"18%"}>{item.split('::')[0]}</ContentCell>
                            <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                            <ContentCell  width={"50%"}>{item.split('::')[2]}</ContentCell>
                        </ContentLine>                   
                    )
                })}
                {/* вывод баланса */}               
                
            <ContentLine style={{marginTop:"40px"}}>
                <ContentCell style={{textAlign:"right"}} width={"18%"}>{filterDataDelta}</ContentCell>
                <ContentCell width={"20%"}>{"-------"}</ContentCell>
                <ContentCell  width={"50%"}>{"-------"}</ContentCell>
            </ContentLine> 
            </React.Fragment>}

             

        </DataContainer>
    </React.Fragment>
 )
}
export default DataList

