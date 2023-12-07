import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Contact = () => {
  return (
    <>
    <Navbar/>
  
     <div className="container shadow-lg my-3">
    <h2 className="pb-2 border-bottom text-center mt-5">contact</h2>
    <div className="row ">
        <div className="w-50 m-auto border-end border-3">
            <h3 className="text-decoration-underline ms-5">Address</h3>
            <h3 className="ms-5">Our Store</h3>
            <h4 className="ms-5">Ramkot, Kathmandu</h4>
            <h4 className="ms-5">Phone:67387</h4>
            <h4 className="ms-5">E-mail:labishchand@gmail.com</h4>
        </div>
        <div className="w-50 p-5">
            <h3 className="text-decoration-underline">Contact form</h3>
            <label for="email">Email:</label>
            <input type="text "className="form-control" id="email"/>
            <label for="email">Subject:</label>
            <input type="text "className="form-control" id="sub"/>
            <label for="email">Body:</label>
            <textarea type="text "className="form-control" rows="4"></textarea>
            <button className="btn btn-primary form-control mt-3">Send Message</button>

        </div>

    </div>
    {/* <div className="location"> 
        <iframe src="https://www.google.com/maps/dir///@27.7047858,85.2370348,12z?entry=ttu" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>  */}
           </div>

           <Footer/>
    </>
  )
}

export default Contact