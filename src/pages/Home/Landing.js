import React from "react";
import bucket from "../../assets/image/bucketgirl.png";

const Landing = () => {
  return (
    <div className="relative">
      <div className="hero h-screen lg:h-[60vh] bg-accent relative z-10 mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="h-[60vh] shrink-0">
            <img src={bucket} className="h-full " alt="" />
          </div>
          <div>
            <p className="text-2xl">Best Quality</p>
            <h1 className="text-5xl font-bold">
              Professional Cleaning Service
            </h1>
            <p className="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="shadow-lg p-16 w-5/6 relative rounded-lg mx-auto mt-[-34px] bg-base-200 z-20">
        <h1 className="text-2xl text-primary mb-5">get free estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full shadow-lg"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full shadow-lg"
          />
          <input
            type="text"
            placeholder="Type of cleaning"
            className="input input-bordered w-full shadow-lg"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full shadow-lg"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full shadow-lg"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full shadow-lg"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full  shadow-lg"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full shadow-lg"
          />
        </div>
        <button className="btn mt-4 btn-primary">Get a QUATE</button>
      </div>
    </div>
  );
};

export default Landing;
