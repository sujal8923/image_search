import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

import Card from 'react-bootstrap/Card';

function Videoitem({ele,setvidid,vidid}) {


  let responsive = vidid ? '' : 'w-75'
  return (
    <div>
      <ListGroup.Item className='mx-auto'  onClick={()=> setvidid(ele?.id?.videoId)}>

    <Card style={{ width: '18rem' }    }   id='cards' className={`mx-auto ${responsive} w-sm-100`}>
    <Card.Img variant="top" className='img-fluid  ' src={ele?.snippet?.thumbnails?.high?.url} />
      <Card.Body>
        <Card.Title>{ele?.snippet?.title}</Card.Title>
      
       
      </Card.Body>
    </Card>

      </ListGroup.Item>
    
    </div>
  )
}

export default Videoitem
