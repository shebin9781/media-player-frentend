import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigativeByUrl = useNavigate()
  return (
  <div>

     <Row className='d-flex justify-content-center align-item-center'>
        <Col></Col>
        <Col lg={5}>
          <h2 className='mt-5'>Welcome To <span className='text-warning'>Media Player</span></h2>
          <p style={{textAlign:'justify'}} className='mt-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi, deserunt fugiat voluptate, repudiandae, repellendus molestias nostrum quisquam ea nihil eaque eligendi illo omnis voluptas nobis? Excepturi deserunt molestiae deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia labore eius nisi suscipit amet, hic error praesentium? Eius dolor illum laborum quos reprehenderit a commodi deleniti, explicabo sint natus.</p>
          <button onClick={()=>navigativeByUrl('/home')} className='btn btn-warning mt-5'>Get started <i class="fa-solid fa-arrow-right ms-2"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="on image" />
        </Col>
     </Row>
     <div className='container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column'>
      <h3 className='mb-5'>features</h3>
      <div className='cards d-flex justify-content-evenly align-items-center w-100'>
      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Categorized video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
     </div>
     <div className='container border border-2 rounded border-secondary p-5 mt-5 mb-5'>
     <Row>
      <Col></Col>
      <Col lg={5}>
        <h3 className='text-warning'>simple fast and powerful</h3>
        <p><span className='fs-5 fw-bolder'>Play Everthing</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur enim magnam ad laudantium, quaerat, id earum repellendus laboriosam corrupti.</p>
        <p><span className='fs-5 fw-bolder'>Play Everthing</span>:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, sed officiis, a aliquid ipsa consectetur autem reprehenderit error consequatur temporibus</p>
        <p><span className='fs-5 fw-bolder'>Play Everthing</span>:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, voluptate ipsam reprehenderit recusandae laudantium doloribus, laborum tempore voluptatibus.</p>
      </Col>
      <Col></Col>
      <Col lg={6}>
      <iframe width="100%" height="450" src="https://www.youtube.com/embed/lM8h5Mm6ODo" title="JAILER - Kaavaalaa Video Song | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson | Tamannaah" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Col>
     </Row>
     </div>
  </div>
  )
}

export default LandingPage