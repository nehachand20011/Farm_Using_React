import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


function Services() {
  return (
    <>
    <Navbar/>
        
<div class="container px-4 py-5" id="icon-grid">
    <h2 class="pb-2 border-bottom">Services</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div class="col d-flex align-items-start">
        <i class="bi bi-bootstrap"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
       <i class="bi bi-cpu-fill"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <i class="bi bi-calendar"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <i class="bi bi-speedometer2"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
       <i class="bi bi-toggles2"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
       <i class="bi bi-geo-fill"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
       <i class="bi bi-house "></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <i class="bi bi-tools"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </>
  )
}



export default Services