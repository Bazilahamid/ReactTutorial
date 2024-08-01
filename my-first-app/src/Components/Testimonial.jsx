import React from 'react'
import th from './images/thumb1.jpg';
import thu from './images/thumb2.jpg';
import thum from './images/thumb3.jpg';

function Testimonial() {
  return (
    <div className="container my-4">
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
            <h3 className="mb-0">Global Coding Conferences</h3>
            <div className="mb-1 text-body-secondary">Nov 12</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
              Continue reading
            </a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img className="bd-placeholder-img" width="200" height="250" src={th} alt="th"></img>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
            <h3 className="mb-0">Learn Web Designing</h3>
            <div className="mb-1 text-body-secondary">Nov 11</div>
            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
              Continue reading
            </a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img className="bd-placeholder-img" width="200" height="250" src={thu} alt="th"></img>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary-emphasis">Frontend</strong>
            <h3 className="mb-0">Bootstrap</h3>
            <div className="mb-1 text-body-secondary">Nov 12</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
              Continue reading
            </a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img className="bd-placeholder-img" width="200" height="250" src={thum} alt="th"></img>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success-emphasis">Python</strong>
            <h3 className="mb-0">Learn Pythons</h3>
            <div className="mb-1 text-body-secondary">Nov 11</div>
            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
              Continue reading
            </a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img className="bd-placeholder-img" width="200" height="250" src={thum} alt="th"></img>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial