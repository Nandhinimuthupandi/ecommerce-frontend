import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            
            At our Company, we believe in fostering a community that embraces creativity, 
            individuality, and exceptional experiences. Founded in 2023, our journey began 
            with a passion for redefining all products, driven by the desire to provide great service. 
            Since then, we have been dedicated to upholding our commitment to unparalleled quality,
             unwavering customer satisfaction, and the core principles that define our brand.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
