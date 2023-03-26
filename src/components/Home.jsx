import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section id="home">
      <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-8 mt-5">
      <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feel the fresh business</h1>
      <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Dolorum, at aut iusto quos animi voluptatem perspiciatis adipisci ratione ab dolorem.</p>
      <div className="buttons d-flex
      justify-content-center">
        <NavLink to ="/services" className="btn btn-light me-4 
        rounded-pill px-4 py-2">Services</NavLink>
      </div>
      </div>
      </div>
      </div>
      </section>

      </div>
  );
}
