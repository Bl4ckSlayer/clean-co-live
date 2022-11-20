import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import fetcher from "../api/axiosConfig";

const Services = () => {
  const [Services, setService] = useState();
  useEffect(() => {
    fetcher.get("/service").then((res) => console.log(res.data));
  }, []);

  return (
    <div className="bg-secondary mt-16">
      serbvice
      <h1 text-4xl>hiiiiiiii</h1>
    </div>
  );
};

export default Services;
