// Profile.tsx

import React from "react";
import ProfileImg from "../assets/profile-img.jpg";

const Profile: React.FC = () => {
  return (
    <div className="items-center m-0 p-[20px]">
      <div className="flex justify-center">
        <div className="border-solid border-2 border-[#1b0e64] rounded-[8px]">
          <img
            className="rounded-[6px]"
            height={"200px"}
            width={"200px"}
            src={ProfileImg}
            alt=""
          />
        </div>
      </div>
      <div className="text-center mt-[20px] text-[#1b0e64] p-[20px]">
        <p className="text-[24px] mb-[14px]">Senior Software Engineer - Full Stack Development</p>
        <p>Hi, I'm Sivasubramanian Ramiah, focusing on creating web/app applications</p>
      </div>
    </div>
  );
};

export default Profile;
