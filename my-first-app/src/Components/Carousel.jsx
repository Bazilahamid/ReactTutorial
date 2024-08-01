import React from 'react'
import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';

function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={one} className="d-block w-100" alt="1"></img>
        <div className="carousel-caption d-none d-md-block">
          <h2>Welcome To iCoder</h2>
          <p>Technology, Web Development And Trends</p>
          <button className="btn btn-primary">Technology</button>
          <button className="btn btn-danger">Web Development</button>
          <button className="btn btn-success">Tech Fun</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={two} className="d-block w-100" alt="2"></img>
        <div className="carousel-caption d-none d-md-block">
          <h2>The Best Coding Blog</h2>
          <p>Technology, Web Development And Trends</p>
          <button className="btn btn-primary">Technology</button>
          <button className="btn btn-danger">Web Development</button>
          <button className="btn btn-success">Tech Fun</button>
          </div>
      </div>
      <div className="carousel-item">
        <img src={three} className="d-block w-100" alt="3"></img>
        <div className="carousel-caption d-none d-md-block">
          <h2>Award Winning Blog</h2>
          <p>Technology, Web Development And Trends</p>
          <button className="btn btn-primary">Technology</button>
          <button className="btn btn-danger">Web Development</button>
          <button className="btn btn-success">Tech Fun</button>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel