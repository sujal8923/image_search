import React from 'react'
import Form from 'react-bootstrap/Form';

import Videodetails from './Videodetails';
import Videolist from './Videolist';

function Search({txt,setxt}) {
  return (
    <div>
      
      <Form.Control type="text" placeholder="Search...." 
      value={txt}
      onChange={(e)=>setxt(e.target.value)}
      
      className='p-2 mt-2 w-50 m-auto  ' />
     
    </div>
  )
}

export default Search
