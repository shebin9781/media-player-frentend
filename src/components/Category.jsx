import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { addAllCategory, deletecategory, getALLcategories, getAVideo, updateCategory } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';

function Category() {

const [ CategoryName ,setCategoryName]=useState("")
const [category , setCategory] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //funation to add category
  const addCategory = async()=>{
    console.log(CategoryName);
    if(CategoryName){
      let body ={
        CategoryName,
        allvideos:[]
      }

    
      //api call
     const response = await addAllCategory(body)
     console.log(response);
     if(response.status>=200 && response.status<300){
      toast.success('category added successfully')
      //state value is made null
      setCategoryName("")
      //close the modal
      handleClose()
      // to get the category
      allCategory()
     }
     else{
      toast.error('Something Went Wrong.Please Try Later')
     }
    }
    else{
      toast.warning('Please Enter Category Name')
    }
  }
//function to get all categories
const allCategory = async()=>{
  const {data} = await getALLcategories()

  setCategory(data)
}
console.log(category);

//function to delete category
const deleteACategory = async(id)=>{
  await deletecategory(id)
  //to get  the remining categories
  allCategory()
}
//function to prevent reload so that the data that we send wont lost
const dragOver = (e)=>{
  e.preventDefault()
}

const videoDrop = async (e, categoryId)=>{
  console.log('dropped on the category Id :',categoryId);
  //to get the data send from videoCard
 let videoId = e.dataTransfer.getData("videoID")
 console.log(videoId);
const {data} = await getAVideo(videoId)
console.log(data);
const selectedCategory = category.find(item=>item.id===categoryId)
selectedCategory.allvideos.push(data)
console.log(selectedCategory);

await updateCategory(categoryId,selectedCategory)
allCategory()

}

useEffect(()=>{
  allCategory()

},[])

  return (

    <>
      <div className='d-grid ms-3'>  
        <button onClick={handleShow} className='btn btn-warning'> Add New Category</button>
        </div>

       { category?.length>0?
       category?.map((item)=>(
       
       <div className='mt-5 border border-secondary p-3 rounded'>
          <div className='d-flex justify-content-between align-items-center ' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
            <h6>{item.CategoryName}</h6>
            <Button onClick={()=>deleteACategory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></Button>
          </div>
          <Row>
            <Col>
            {item?.allvideos?.length > 0?
            item?.allvideos?.map(card=>(<VideoCard displayVideo={card} ispresnt={true}/> ))
            : <p>Nothing to display</p>
            }
            </Col>
          </Row>
        </div>))
        :  <p className='m-3 fw-bolder fs-5 text-danger'>No Category Added</p>
        }
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <i class= "fa-solid fa-pencil text-warning me-2"></i> Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className='border border-secondary p-3 rounded'> 
  
        

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
        </Form.Group>

        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>

  )
}

export default Category