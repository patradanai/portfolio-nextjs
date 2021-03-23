import React from "react";
import Image from "next/image";
import GithubIcon from "../../icons/gitub";
import LinkedIn from "../../icons/linkedin";

const HomeScreen = () => {
  return (
    <div className="relative w-full h-full overflow-auto">
      {/* Herocarousel */}
      <div
        className="relative flex bg-cover bg-center h-full w-full m-0  box-border"
        style={{
          backgroundImage: "url(/images/backdrop.jpg)",
          height: 590,
        }}
      >
        {/* color Backdrop */}
        <div className="absolute top-0 left-0 bg-gradient-to-tr from-black to-blue-300 w-full h-full opacity-50" />
        {/* Icons */}
        <div className="absolute bottom-1/4 right-1/4 bg-black flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
          <Image src="/images/react.png" width={50} height={50} />
        </div>
        <div className="absolute top-1/4 left-1/3 bg-black flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
          <Image src="/images/redux.png" width={50} height={50} />
        </div>
        <div className="absolute top-1/3 left-1/4 bg-black flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
          <Image src="/images/material-ui.png" width={50} height={50} />
        </div>
        <div className="absolute top-1/3 right-1/4 bg-black flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
          <Image src="/images/nodejs.png" width={50} height={50} />
        </div>
        <div className="absolute top-1/4 right-1/3 bg-white flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
          <Image src="/images/nextjs.svg" width={50} height={50} />
        </div>
        <div className="absolute bottom-1/4 left-1/4 bg-black flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
          <Image src="/images/tailwind.png" width={50} height={50} />
        </div>
        <div className="container w-full h-full">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center text-white z-10 space-y-5">
              <p>Hi, my name is Patradanai Nakpimay</p>
              <p className="tracking-wide uppercase text-5xl font-bold">
                Full stack WEb developer
              </p>
              <div className="flex justify-center space-x-3">
                <a>
                  <div className="w-12 h-12 bg-white rounded-md flex justify-center items-center">
                    <GithubIcon className="w-10 h-10" />
                  </div>
                </a>
                <div className="w-12 h-12 bg-white rounded-md flex justify-center items-center">
                  <a>
                    <LinkedIn className="w-10 h-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Home */}
      <div className="container"></div>
    </div>
  );
};

export default HomeScreen;
