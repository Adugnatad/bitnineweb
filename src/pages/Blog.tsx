import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import elephant from "../assets/elephant.jpg";

const Blog = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full bg-[#fff] py-[64px]">
        <h1 className="font-bold text-[50px] text-[#444444]">BLOG</h1>
        <p className=" text-center text-[#666666]">
          Subscribe to our newsletter and get updated on
          <br />
          the latest information of our graph technology.
        </p>
        <div className="flex flex-row items-center space-x-3 mt-5">
          <button className="border-[3px] border-[#444444] text-[#444444] px-3 py-2 rounded-[5px] font-bold">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mx-3 sm:w-[90%]">
        <div className="flex flex-row items-center self-end justify-between bg-[#F2F2F2] px-3 py-3 mb-5 w-full sm:w-[335px] h-[40px]">
          <input
            type="text"
            placeholder="search..."
            className="w-full h-full bg-transparent outline-none"
          />
          <BiSearch
            size={23}
            className="text-[#ACACAC] duration-300 hover:text-[#000]"
          />
        </div>
        <div className="flex flex-row justify-center flex-wrap space-x-3 mb-7">
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">All</div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            Activities
          </div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            Agens Solution
          </div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            AgensGraph
          </div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            AgensSQL
          </div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            Big Data
          </div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            Computing
          </div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            Database
          </div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            Graph Database
          </div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">Life</div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            Press Releases
          </div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            Technology Industry
          </div>
          <div className="text-[#ACACAC] px-[20px] my-1 font-medium">
            Useful information
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center  pb-10 space-x-5  w-full">
          <div className="relative group duration-300 hover:shadow-xl border-[1px] border-[#ddd] rounded-md mb-5">
            <img
              src={elephant}
              alt="elephant"
              className="w-[350px] rounded-md"
            />
            <div className="absolute text-white top-0 py-5 px-3 space-x-3 ">
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                AGENSGRAPH
              </span>
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                GRAPH DATABASE
              </span>
            </div>
            <div className="flex flex-col px-3 p-10 pb-20 bg-[#fff]">
              <h2 className="text-[18px] font-medium duration-300 group-hover:text-[#f29e0f]">
                AgensGraph v2.13 Released!
              </h2>
              <div className="flex flex-row items-center space-x-2">
                <AiOutlineClockCircle size={17} color="grey" />
                <span className="text-[#aaa]">2022. 10. 13</span>
              </div>
            </div>
          </div>
          <div className="relative group duration-300 hover:shadow-xl border-[1px] border-[#ddd] rounded-md mb-5">
            <img
              src={elephant}
              alt="elephant"
              className="w-[350px] rounded-md"
            />
            <div className="absolute text-white top-0 py-5 px-3 space-x-3 ">
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                AGENSGRAPH
              </span>
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                GRAPH DATABASE
              </span>
            </div>
            <div className="flex flex-col px-3 p-10 pb-20 bg-[#fff]">
              <h2 className="text-[18px] font-medium duration-300 group-hover:text-[#f29e0f]">
                AgensGraph v2.13 Released!
              </h2>
              <div className="flex flex-row items-center space-x-2">
                <AiOutlineClockCircle size={17} color="grey" />
                <span className="text-[#aaa]">2022. 10. 13</span>
              </div>
            </div>
          </div>
          <div className="relative group duration-300 hover:shadow-xl border-[1px] border-[#ddd] rounded-md mb-5">
            <img
              src={elephant}
              alt="elephant"
              className="w-[350px] rounded-md"
            />
            <div className="absolute text-white top-0 py-5 px-3 space-x-3 ">
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                AGENSGRAPH
              </span>
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                GRAPH DATABASE
              </span>
            </div>
            <div className="flex flex-col px-3 p-10 pb-20 bg-[#fff]">
              <h2 className="text-[18px] font-medium duration-300 group-hover:text-[#f29e0f]">
                AgensGraph v2.13 Released!
              </h2>
              <div className="flex flex-row items-center space-x-2">
                <AiOutlineClockCircle size={17} color="grey" />
                <span className="text-[#aaa]">2022. 10. 13</span>
              </div>
            </div>
          </div>
          <div className="relative group duration-300 hover:shadow-xl border-[1px] border-[#ddd] rounded-md mb-5">
            <img
              src={elephant}
              alt="elephant"
              className="w-[350px] rounded-md"
            />
            <div className="absolute text-white top-0 py-5 px-3 space-x-3 ">
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                AGENSGRAPH
              </span>
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                GRAPH DATABASE
              </span>
            </div>
            <div className="flex flex-col px-3 p-10 pb-20 bg-[#fff]">
              <h2 className="text-[18px] font-medium duration-300 group-hover:text-[#f29e0f]">
                AgensGraph v2.13 Released!
              </h2>
              <div className="flex flex-row items-center space-x-2">
                <AiOutlineClockCircle size={17} color="grey" />
                <span className="text-[#aaa]">2022. 10. 13</span>
              </div>
            </div>
          </div>
          <div className="relative group duration-300 hover:shadow-xl border-[1px] border-[#ddd] rounded-md mb-5">
            <img
              src={elephant}
              alt="elephant"
              className="w-[350px] rounded-md"
            />
            <div className="absolute text-white top-0 py-5 px-3 space-x-3 ">
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                AGENSGRAPH
              </span>
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                GRAPH DATABASE
              </span>
            </div>
            <div className="flex flex-col px-3 p-10 pb-20 bg-[#fff]">
              <h2 className="text-[18px] font-medium duration-300 group-hover:text-[#f29e0f]">
                AgensGraph v2.13 Released!
              </h2>
              <div className="flex flex-row items-center space-x-2">
                <AiOutlineClockCircle size={17} color="grey" />
                <span className="text-[#aaa]">2022. 10. 13</span>
              </div>
            </div>
          </div>
          <div className="relative group duration-300 hover:shadow-xl border-[1px] border-[#ddd] rounded-md mb-5">
            <img
              src={elephant}
              alt="elephant"
              className="w-[350px] rounded-md"
            />
            <div className="absolute text-white top-0 py-5 px-3 space-x-3 ">
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                AGENSGRAPH
              </span>
              <span className="bg-[#000] opacity-50 px-3 py-[1px] rounded-[1000px] duration-300 hover:opacity-100 hover:bg-[#ef6362] cursor-pointer">
                GRAPH DATABASE
              </span>
            </div>
            <div className="flex flex-col px-3 p-10 pb-20 bg-[#fff]">
              <h2 className="text-[18px] font-medium duration-300 group-hover:text-[#f29e0f]">
                AgensGraph v2.13 Released!
              </h2>
              <div className="flex flex-row items-center space-x-2">
                <AiOutlineClockCircle size={17} color="grey" />
                <span className="text-[#aaa]">2022. 10. 13</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center items-center space-x-3 py-5">
          <div className="border-[2px] border-[#eee] rounded-[1000px] h-[50px] w-[50px] flex items-center justify-center relative group cursor-pointer">
            <div className="bg-[#2d6fad] opacity-100 h-full w-full rounded-[1000px] w-full absolute top-0 duration-300  group-hover:h-full group-hover:w-full z-[-1]"></div>
            <span className="text-[#fff]">1</span>
          </div>
          <div className="border-[2px] border-[#eee] rounded-[1000px] h-[50px] w-[50px] flex items-center justify-center relative group cursor-pointer">
            <div className="bg-[#2d6fad] opacity-100 h-[0px] w-[0px] rounded-[1000px] w-full absolute top-0 duration-300  group-hover:h-full group-hover:w-full z-[-1]"></div>
            <span className="group-hover:text-[#fff]">2</span>
          </div>
          <div className="border-[2px] border-[#eee] rounded-[1000px] h-[50px] w-[50px] flex items-center justify-center relative group cursor-pointer">
            <div className="bg-[#2d6fad] opacity-100 h-[0px] w-[0px] rounded-[1000px] w-full absolute top-0 duration-300  group-hover:h-full group-hover:w-full z-[-1]"></div>
            <span className="group-hover:text-[#fff]">3</span>
          </div>
          <div className="border-[2px] border-[#eee] rounded-[1000px] h-[50px] w-[50px] flex items-center justify-center relative group cursor-pointer">
            <div className="bg-[#2d6fad] opacity-100 h-[0px] w-[0px] rounded-[1000px] w-full absolute top-0 duration-300  group-hover:h-full group-hover:w-full z-[-1]"></div>
            <span className="group-hover:text-[#fff]">4</span>
          </div>
          <div>...</div>
          <div className="border-[2px] border-[#eee] rounded-[1000px] h-[50px] w-[50px] flex items-center justify-center relative group cursor-pointer">
            <div className="bg-[#2d6fad] opacity-100 h-[0px] w-[0px] rounded-[1000px] w-full absolute top-0 duration-300  group-hover:h-full group-hover:w-full z-[-1]"></div>
            <span className="group-hover:text-[#fff]">33</span>
          </div>
          <div className="border-[2px] border-[#eee] rounded-[1000px] h-[50px] w-[50px] flex items-center justify-center relative group cursor-pointer">
            <div className="bg-[#2d6fad] opacity-100 h-[0px] w-[0px] rounded-[1000px] w-full absolute top-0 duration-300  group-hover:h-full group-hover:w-full z-[-1]"></div>

            <MdKeyboardArrowRight
              size={23}
              className="group-hover:text-[#fff]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
