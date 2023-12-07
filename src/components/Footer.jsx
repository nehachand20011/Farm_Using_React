import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>


        <div className="container-fluid custom-navbar">
    <footer className="py-5">
      
      {/* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"> */}
        <p>&copy; 2022 RAMKOTFARM,ALL RIGHT</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><Link className="text-dark" to="#"><i className="bi bi-twitter" width="50" height="50"></i></Link></li>
          <li className="ms-3"><Link className="text-dark" to="#"><i className="bi bi-instagram" width="24" height="24"></i></Link></li>
          <li className="ms-3"><Link className="text-dark" to="#"><i className="bi bi-facebook" width="24" height="24"></i></Link></li>
        </ul>
      {/* </div> */}
    </footer>
  </div> 
    </>
  )
}

export default Footer