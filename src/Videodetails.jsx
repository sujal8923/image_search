import React from 'react'
// import './App.css';
// import Card from 'react-bootstrap/Card';

function Videodetails({vidid}) {
  return (
    <div>
      <iframe className='w-100  ' height='550px' src={`https://www.youtube.com/embed/${vidid}`} frameborder="0"></iframe>
    
      
    </div>
  )
}

export default Videodetails
