import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsMedium, BsFacebook } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#1E2329] flex flex-col items-center">
      <div className=" flex-row items-start justify-between w-[65%] py-[80px] hidden tb:flex">
        <div className="flex flex-col space-y-[10px] items-start text-[#fff]">
          <span className="font-medium text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            PRODUCTS
          </span>
          <span className="text-[15px] hover:cursor-pointer hover:text-[#2d6fad] ease-in duration-200">
            Relational Database
          </span>
          <span className="text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            Graph Database
          </span>
          <span className="text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            Graph-based Solution
          </span>
        </div>
        <div className="flex flex-col space-y-[10px] items-start text-[#fff]">
          <span className="font-medium text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            USE CASES
          </span>
        </div>
        <div className="flex flex-col space-y-[10px] items-start text-[#fff]">
          <span className="font-medium text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            SERVICES
          </span>
        </div>
        <div className="flex flex-col space-y-[10px] items-start text-[#fff]">
          <span className="font-medium text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            RESOURCES
          </span>
          <span className="text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            Documentation
          </span>
          <span className="text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            Learn
          </span>
        </div>
        <div className="flex flex-col space-y-[10px] items-start text-[#fff]">
          <span className="font-medium text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            BLOG
          </span>
        </div>
        <div className="flex flex-col space-y-[10px] items-start text-[#fff]">
          <span className="font-medium text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            COMPANY
          </span>
          <span className="text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            About Us
          </span>
          <span className="text-[15px] hover:text-[#2d6fad] ease-in duration-200 cursor-pointer">
            Contact
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-[65%] p-2">
        <div className="text-[#99A2A7] text-[13px] md:text-[16px]">
          &copy; 2023 by Adugna Tadesse. All Rights Reserved.
        </div>
        <div className="flex flex-row items-center hidden md:flex">
          <div className="flex flex-col items-center p-2 bg-[length:200px_100px] relative group">
            <div className="bg-red-100 opacity-25 h-[0px] w-full absolute top-0 duration-300  group-hover:h-full"></div>
            <BiLogoGithub color="#99A2A7" size={17} />
          </div>
          <div className="flex flex-col items-center p-2 bg-[length:200px_100px] relative group">
            <div className="bg-red-500 opacity-50 h-[0px] w-full absolute top-0 duration-300  group-hover:h-full"></div>
            <AiOutlineYoutube
              //   color="#99A2A7"
              size={17}
              className="text-[#99A2A7] group-hover:text-[#fff]"
            />
          </div>
          <div className="flex flex-col items-center p-2 bg-[length:200px_100px] relative group">
            <div className="bg-[#117EB9] opacity-50 h-[0px] w-full absolute top-0 duration-300  group-hover:h-full"></div>
            <BiLogoLinkedin
              //   color="#99A2A7"
              size={17}
              className="text-[#99A2A7] group-hover:text-[#fff]"
            />
          </div>
          <div className="flex flex-col items-center p-2 bg-[length:200px_100px] relative group">
            <div className="bg-[#42599E] opacity-50 h-[0px] w-full absolute top-0 duration-300  group-hover:h-full"></div>
            <BsFacebook
              //   color="#99A2A7"
              size={17}
              className="text-[#99A2A7] group-hover:text-[#fff]"
            />
          </div>
          <div className="flex flex-col items-center p-2 bg-[length:200px_100px] relative group">
            <div className="bg-[#00AB6C] opacity-50 h-[0px] w-full absolute top-0 duration-300  group-hover:h-full"></div>
            <BsMedium
              //   color="#99A2A7"
              size={17}
              className="text-[#99A2A7] group-hover:text-[#fff]"
            />
          </div>
          <span className="text-[#99A2A7] hover:text-[#2d6fad] hover:px-[0.5px] cursor-pointer">
            CONTACT
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
