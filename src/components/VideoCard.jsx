import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistory, deleteAVideos } from '../services/allAPI';
function VideoCard({displayVideo,setDeleteVideoStatus , ispresnt}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{ setShow(true)

  const {caption, embedLink}=displayVideo

  let today =new Date()
  console.log(today);
  let timestamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
  console.log(timestamp);
  let videoDetails ={
    caption , embedLink, timestamp
  }
   await addToHistory(videoDetails)


  }
  const removeVideo = async(id)=>{
    const response = await deleteAVideos(id)
    setDeleteVideoStatus(true)
  }
  //function to drag the videoCard
  const cardDrag = (e,id)=>{
    console.log(`the id of the videocard dragged is ${id}`);
    e.dataTransfer.setData("videoID",id)
  }
  return (
    
    <>
       <Card style={{ width: '100%' ,height:'380px'}} className='mb-3' draggable onDragStart={(e)=>cardDrag(e,displayVideo?.id)}>
            <Card.Img height={'280px'} onClick={handleShow} variant="top" src={displayVideo.url}/>
            <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-center'>
             <h6>{displayVideo.caption}</h6>

        { !ispresnt && <Button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></Button>}
        </Card.Title>
      </Card.Body>
    </Card>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard
