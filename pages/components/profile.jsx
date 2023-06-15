import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function PersonalProfile() {
  return (
      <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


      <div class="card">
      <br/><br/><br/>
      <div className='rad'>
        <img src="https://images.unsplash.com/photo-1519225924453-b28226426689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="John" width={100}/>
      </div>
        <br/>
        <br/><br/>
        <h1>John Doe</h1>
        <p class="title">CEO & Founder, Example</p>
        <br/><br/>
        <p>Harvard University</p>
        <br/><br/>
        <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <br/><br/><br/><br/>
        <p><button className='btns'>Contact</button></p>
      </div>
      </div>
    );
    
    
    
}