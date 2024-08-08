import React from "react";
import "@/app/components/Home/ManageWorks/ManageWorks.css";
const ManageWorks = () => {
  return (
    <div className="mb-14">
      <div className="container mx-auto max-w-[1300px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="mt-14">
              <h1 className="font-bold text-4xl">
                See How We Manage Our <br></br>
                <span className="text-green-800">Works</span>
              </h1>
              <p className="text-justify max-w-[500px] mt-6">
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                dolor sit amet consectetur.
              </p>

              <div className="flex bg-black p-4 w-[70%] rounded-md justify-center mt-4">
                <img src="https://templates.hibootstrap.com/constik/default/assets/img/icons/architect.png"></img>
                <h1 className="text-white font-extrabold text-xl mt-1 ml-6">
                  Project Planning
                </h1>
              </div>

              <div className="flex bg-black p-4 w-[70%] rounded-md justify-center mt-4">
                <img src="https://templates.hibootstrap.com/constik/default/assets/img/icons/plan.png"></img>
                <h1 className="text-white font-extrabold text-xl mt-1 ml-6">
                  General Contract
                </h1>
              </div>

              <div className="flex bg-black p-4 w-[70%] rounded-md justify-center mt-4">
                <img src="https://templates.hibootstrap.com/constik/default/assets/img/icons/bridge.png"></img>
                <h1 className="text-white font-extrabold text-xl mt-1 ml-6">
                  Starting Project
                </h1>
              </div>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://templates.hibootstrap.com/constik/default/assets/img/video-img-1.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageWorks;
