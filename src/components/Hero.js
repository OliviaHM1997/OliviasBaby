import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/06/02/11/puppies-kittens.jpg" alt="Puppies and Kittens"  />
    <h1 className="mb-4">React.js Olivia's Baby</h1>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
