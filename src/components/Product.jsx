import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Product = () => {
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
  <div className="row">
    <div className="col-md-3 ps-3 pt-3">
      <h5 className="text-decoration-underline text-success">Department</h5>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" for="flexCheckDefault">
          Mobiles ans SmartsPhones
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
        <label className="form-check-label" for="flexCheckDefault1">
          Computer ans Laptopes
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
        <label className="form-check-label" for="flexCheckDefault2">
        Home and Gardening
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
        <label className="form-check-label" for="flexCheckDefault3">
          Beauty and Fitness
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
        <label className="form-check-label" for="flexCheckDefault3">
          Beauty and Fitness
        </label>
      </div>

      <h5 className="text-decoration-underline text-success mt-3">Deals</h5>
      <Link to="" className="text-decoration-none"><li className="list-unstyled ms-3 text-dark"> Deal of the day</li></Link>
      <Link to="" className="text-decoration-none"><li className="list-unstyled ms-3 text-dark"> Flash sales</li></Link>
      <Link to="" className="text-decoration-none"><li className="list-unstyled ms-3 text-dark">Popular</li> </Link>
      <Link to="" className="text-decoration-none"><li className="list-unstyled ms-3 text-dark">Most popular</li> </Link>


      <h5 className="text-decoration-underline text-success mt-3">Price</h5>
      <div className="form-check">
        <input type="radio" className="form-check-input" id="radio1" name="price"/>
          <label for="radio1" className="form-check-label text-dark">all</label>
      </div>

      <div className="form-check">
        <input type="radio" className="form-check-input" id="radio1" name="price "/>
          <label for="radio1" className="form-check-label text-dark" >Upto Rs.1000</label>
      </div>

      <div className="form-check">
        <input type="radio" className="form-check-input" id="radio1" name="price "/>
          <label for="radio1" className="form-check-label text-dark" >Rs.100 - Rs.1000</label>
      </div>

      <div className="form-check">
        <input type="radio" className="form-check-input" id="radio1" name="price "/>
          <label for="radio1" className="form-check-label text-dark" >Rs.10000 - Rs.20000</label>
      </div>
      <div className="form-check">
        <input type="radio" className="form-check-input" id="radio1" name="price "/>
          <label for="radio1" className="form-check-label text-dark" >Above 100000</label>
      </div>

      <h5 className="text-decoration-underline text-success"> Discount</h5>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-dark fs-5">Up to 5%</li></Link>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-dark fs-5">upto 10%</li></Link>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-dark fs-5">upto 15%</li></Link>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-dark fs-5">upto 50%</li></Link>

        

        <h5 className="text-decoration-underline text-success"> Update</h5>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-dark fs-5">Upto 10% </li></Link>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-dark fs-5">upto 15%</li></Link>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-dark fs-5">upto 25%</li></Link>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-dark fs-5">50% and above</li></Link>


        <h5 className="text-decoration-underline text-success"> Customer Review</h5>
        <Link to=""className="text-decoration-none taxt-warning"><li className="list-unstyled ms-3 text-warning fs-5"><i className="bi bi-star"></i><i className="bi bi-star">
        </i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star-fill"></i>& above</li></Link>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-warning fs-5"><i className="bi bi-star"></i><i className="bi bi-star">
        </i><i className="bi bi-star"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>& above</li></Link>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-warning fs-5"><i className="bi bi-star"></i><i className="bi bi-star">
        </i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>& above</li></Link>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-warning fs-5"><i className="bi bi-star"></i><i className="bi bi-star-fill">
        </i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>& above</li></Link>
        <Link to=""className="text-decoration-none"><li className="list-unstyled ms-3 text-warning fs-5"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill">
        </i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>& above</li></Link>

      </div>

      <div className="col-md-9 ps-3 pt-3">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <div className="img-div">
              <img src="https://th.bing.com/th/id/R.1d8c0d5971df0ce1dc0fe8b1441d5466?rik=0YfTvD9HbEpC0w&riu=http%3a%2f%2fuiconstock.com%2fwp-content%2fuploads%2f2016%2f11%2fFree-Apple-iPad-Mock-up-For-Graphic-Web-Designers-2017.jpg&ehk=w8n%2blnJZ1h%2f0jjbx72kqNjuelZVympF9BPXfLRKAL00%3d&risl=&pid=ImgRaw&r=0" className="card-img-top" alt="..."/>
            </div>
              <div className="card-body">
                <h5 className="card-title"> Apple iPad </h5>
                <h6>Rs.50000</h6>
                <button className="btn btn-success ">View Details</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="img-div">
              <img src="https://th.bing.com/th/id/R.011ec1c7f249e522bcf8262224aa666b?rik=bnm7BmcnpLZvlg&riu=http%3a%2f%2fmspoweruser.com%2fwp-content%2fuploads%2f2016%2f08%2fMicromax-Alpha-Laptop-3.jpg&ehk=ELNqBrOi34RVfpeOX%2bn81Vd7%2fHKyMgSSX3D6DB4WPBg%3d&risl=&pid=ImgRaw&r=0" className="card-img-top" alt="..."/>
            </div>
              <div className="card-body">
                <h5 className="card-title">HP Laptop</h5>
                <h6>Rs.100000</h6>
                <button className="btn btn-success ">View Details</button>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <div className="img-div">
              <img src="https://i5.walmartimages.com/asr/5ea7aea3-3539-4de1-942b-f2fdd6db9666.c69527a264bd4c821842dbce8f513178.jpeg" className="card-img-top" alt="..."/>
            </div>
              <div className="card-body">
                <h5 className="card-title">Headphones Wireless </h5>
                <h6>Rs.100000</h6>
                <button className="btn btn-success">View Details</button>
               
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="img-div">
              <img src="https://www.lifewire.com/thmb/izXiGRyHUZzmGcvL_0YleutEECc=/1950x1272/filters:no_upscale():max_bytes(150000):strip_icc()/usbconnectortypes-5aecbccdae9ab8003751b24d.jpg" className="card-img-top" alt="..."/>
            </div>
              <div className="card-body">
                <h5 className="card-title">All Types Chargers</h5>
                <h6>Rs.100000</h6>
                <button className="btn btn-success">View Details</button>
               
              </div>
            </div>
          </div>
        </div>
    </div>

  </div>

 </div>
 <Footer/>

    </>
  )
}

export default Product