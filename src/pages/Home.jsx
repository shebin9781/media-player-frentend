import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import Category from '../components/Category'

function HomePage() {

  const [uploadVideoStatus , setUploadVideoStatus] =useState({})

  return (
    <>
        <div className='container mt-5 mb-5  d-flex justify-content-between alighn-items-center'>
        <div className='add-vedios'>
          <Add setUploadVideoStatus={setUploadVideoStatus}/>
        </div>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>
          Watch History</Link>
        </div>
        <div className=' container-fluid w-100 mt-5 d-flex justify-content-between'>
           <div className='all-vedios col-lg-9'> 
           <h4 className='mb-5'>All Videos</h4>
            <View uploadVideoStatus={uploadVideoStatus}/>
           </div>
           <div className='category col-lg-3'> 
            <Category/>
            </div>
        </div>
        </>
  )
}

export default HomePage


