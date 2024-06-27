import React from "react";
import { Button } from "flowbite-react";
const HeroSection = () => {
  return (
    <div>
      <div className="container ">
        <div className="flex lg:flex-row sm:flex-col">
          <div className="lg:basis-2/4 md:basis-2/4 sm:basis-1/2">
            <div className="hero-text flex flex-col items-center justify-center">
              <h3 className="lg:text-5xl md:text-3xl ">
                Book your comfortable <br /> and Hassle free ride at <br />
                <span className="">HR-TAXI</span>
              </h3>
              <div className="hero-image">
                <img src="" alt="" />
              </div>
              <Button>Book now</Button>
            </div>
          </div>
          <div className="basis-1/4">
          <div className="hero-text1">
                <form action="" method="post">
                  <input type="text" placeholder="Full name" />
                  <input type="email" placeholder=" Email" />
                  <input type="text" placeholder="Drop off Address" />
                  <div>
                  <input type="text" placeholder="Pick Up  Address" />
                  <input type="submit" value="Book Now" />
                  </div>
                </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
