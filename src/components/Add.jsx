import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';





function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [videos ,setVideos] =useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })

  const embedVideoLink =(e)=>{
    const {value} =e.target
    console.log(value.slice(-11));
    const link =`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideos({...videos , embedLink:link})

  }
  console.log(videos);


  const handleUpload = async()=>{

    const {id, caption, url,embedLink}= videos
    if(!id || !caption || !url||!embedLink){
      toast.warning("please fill the form completely")
    }
    else{
      const response =await uploadVideo(videos)
      console.log(response);
      if(response.status>=200 && response.status<300){


        setUploadVideoStatus(response.data)
        toast.success('uploaded sucessfully')




        //close model
        handleClose()
      }
      else{
        console.log(response);
        toast.error('something went wrong .try again later')
      }
    }


  }


  return (
    <>
        <div className='d-flex align-items-center'>
           <h5>Upload new videos</h5>
           <button onClick={handleShow}  className='btn'><i class="fa-solid fa-upload fs-5"></i></button>
        </div>
              <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i>Upload Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please Fill the following details</p>
          <form className='border border-secondary p-3 rounded'> 
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter video ID" onChange={(e)=>setVideos({...videos,id:e.target.value})} />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption"  onChange={(e)=>setVideos({...videos,caption:e.target.value})}/>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text " placeholder="Enter Video image URL"  onChange={(e)=>setVideos({...videos,url:e.target.value})}/>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter YouTube video Link" onChange={embedVideoLink}/>
          </Form.Group>
          
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="warning" onClick={handleUpload}>Upload</Button>
          </Modal.Footer>
        </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
        
    </>
  )
}

export default Add