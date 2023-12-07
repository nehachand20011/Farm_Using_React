import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <Navbar/>
    
  
    <div className=" text-center container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">About Us</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{ backgroundImage: "url('https://th.bing.com/th/id/R.1d8c0d5971df0ce1dc0fe8b1441d5466?rik=0YfTvD9HbEpC0w&riu=http%3a%2f%2fuiconstock.com%2fwp-content%2fuploads%2f2016%2f11%2fFree-Apple-iPad-Mock-up-For-Graphic-Web-Designers-2017.jpg&ehk=w8n%2blnJZ1h%2f0jjbx72kqNjuelZVympF9BPXfLRKAL00%3d&risl=&pid=ImgRaw&r=0')", backgroundSize: 'cover' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ms. Eva Chand</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?pid=ImgDet&rs=1" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <i className="bi bi-person-circle"></i>
                  <small>&nbsp;&nbsp;CEO</small>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-facebook"></i>
                  <small>/eva</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{ backgroundImage: "url('https://www.lifewire.com/thmb/izXiGRyHUZzmGcvL_0YleutEECc=/1950x1272/filters:no_upscale():max_bytes(150000):strip_icc()/usbconnectortypes-5aecbccdae9ab8003751b24d.jpg')", backgroundSize: 'cover' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Mr.Amu Chand</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://th.bing.com/th/id/R.ea52f831ba19ebe66d50ba47b86ca468?rik=C2DmnA21bWR7GQ&pid=ImgRaw&r=0" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <i className="bi bi-person-circle"></i>
                  <small>&nbsp;&nbsp;CEO</small>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-facebook"></i>
                  <small>/amu</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{ backgroundImage: "url('https://i5.walmartimages.com/asr/5ea7aea3-3539-4de1-942b-f2fdd6db9666.c69527a264bd4c821842dbce8f513178.jpeg')", backgroundSize: 'cover' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ms.Rima Chand</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://th.bing.com/th/id/OIP.ANBtqtE3FBxuRPVc1n5qhAHaJ4?pid=ImgDet&rs=1" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <i className="bi bi-person-circle"></i>
                  <small>&nbsp;&nbsp;CEO</small>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-facebook"></i>
                  <small>/rima</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>

    </>
  )
}

export default About