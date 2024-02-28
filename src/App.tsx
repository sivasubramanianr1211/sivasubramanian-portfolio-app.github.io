import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Profile from "./components/Profile";
import Skillset from "./components/Skillset";
import useWindowSize from "./utils/useWindowSize";

function App() {
  const { width: windowWidth } = useWindowSize();
  console.log(windowWidth);
  const isMobile: boolean = windowWidth !== undefined && windowWidth < 768;
  return (
    <div className="App mt-[10px]">
      <div className="p-[20px] fixed top-0 left-0 w-full bg-[#1b0e64] text-white p-4">
        <Header />
      </div>
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <div className="flex flex-col-reverse sm:flex-row sm:divide-x divide-[#3bc9f3]">
        <div className="basis-1/2 text-[#3bc9f3]">
          <main className="mt-16 p-8">
            {isMobile && <div className="bg-[#3bc9f3] text-[#000] font-[700] text-[20px] rounded-[8px] mb-[5px]"><Profile /></div>}
            <Description />
            <Skillset />
            <Contact />
          </main>
        </div>
        <div className="basis-1/2 bg-[#3bc9f3] text-[#000] font-[700] text-[20px]">
          {!isMobile && <div className="fixed mt-[100px] w-[50%] ">
            <Profile />
          </div> }
        </div>
      </div>
    </div>
  );
}

export default App;
