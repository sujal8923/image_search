import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
// import "./App.css";


import axios from 'axios'
import Videoitem from './Videoitem';
function Videolist({txt,setvidata,viddata,setvidid,setdebounce,debounce,vidid}) {
  let key = 'AIzaSyDfiFWmF2GWXM4NOKmR_fN4bt7JkAgOhQU';
  useEffect(()=>{
let timer = setTimeout(() => {
  setdebounce(txt)
  
}, 1000);

return ()=>{
  clearTimeout(timer)
}
  },[txt])

  useEffect(()=>{
    let getvideo = async()=>{
      await axios
      .get(` https://www.googleapis.com/youtube/v3/search`,{params:{part:'snippet',maxResults:10,q:txt,key:key }})
    .then(res=>setvidata(res?.data?.items))
    .catch(err=>console.log(err))
  }

  if(txt){
    getvideo()
  }



  },[debounce])
  return (
    <ListGroup>
      {
        viddata && viddata.map (ele =>(
          <Videoitem key={ele?.id?.VideoId} ele={ele} vidid={vidid} setvidid={setvidid}/>
        ))
      }
   
  </ListGroup>
  )
}

export default Videolist
