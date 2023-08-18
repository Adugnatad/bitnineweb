import graphBackgroun from "../assets/bitninegraph.png";
import indicator from "../assets/Graph-Indicator.png";
import vision from "../assets/Graph-Vision.png";
import intelligence from "../assets/Intelligence-Graph.png";

const Usecases = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full bg-[#fff] py-[64px]">
        <h1 className="font-bold text-[50px] text-[#444444]">Use Cases</h1>
        <p className=" text-center text-[#666666]">
          Our graph database solution cover a wide range of projects. <br />
          If you need help overcoming your obstacle, feel free to contact us.
        </p>
      </div>
      <div className="w-full relative flex flex-col items-center relative">
        <img
          src={graphBackgroun}
          alt="graph background"
          className="absolute z-[-1] w-full h-full"
        />
        <div className=" text-white flex flex-col items-center w-[80%] h-full py-[100px]">
          <h1 className="text-center font-bold text-[50px] ">
            Next Graph Initiatives
          </h1>
          <p className=" text-center ">
            Bitnine is continuing the effort of expanding projects onsite and
            also qualitatively enhancing graph technology simultaneously.
            <br />
            Check out how our graph technology cases were able to monitor risks,
            reduce costs, improve operational efficiency, and increase the
            revenue of customers from various industries.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center flex-wrap sm:space-x-20 px-10 items-center py-10 bg-[#F3F6FA]">
        <div className="flex flex-col justify-between bg-[#fff] text-center py-3 px-5 h-[450px] sm:h-[663px] sm:w-[344px] shadow-2xl cursor-pointer hover:border-[3px] border-[#FAC433] mb-10">
          <div className="flex flex-col items-center text-center">
            <img src={indicator} alt="" className="w-[206px] h-[206px]" />
            <h2 className="font-bold text-[25px] mb-4">GRAPH INDICATOR</h2>
            <p>
              Graph data analysis searches through patterns of data and
              indicates the most optimal path or result that best suits the
              users’ requirements.
            </p>
          </div>
          <div className="flex flex-row justify-between text-blue-500 cursor-pointer">
            <span>#Recommendation</span>
            <span>&#8594;</span>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#fff] text-center py-3 px-5 h-[450px] sm:h-[663px] sm:w-[344px] shadow-2xl cursor-pointer hover:border-[3px] border-[#FAC433] mb-10">
          <div className="flex flex-col items-center text-center">
            <img src={vision} alt="" className="w-[206px] h-[206px]" />
            <h2 className="font-bold text-[25px] mb-4">GRAPH INDICATOR</h2>
            <p>
              Graph data analysis searches through patterns of data and
              indicates the most optimal path or result that best suits the
              users’ requirements.
            </p>
          </div>
          <div className="flex flex-row justify-between text-blue-500 cursor-pointer">
            <span>#Recommendation</span>
            <span>&#8594;</span>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#fff] text-center py-3 px-5 h-[450px] sm:h-[663px] sm:w-[344px] shadow-2xl cursor-pointer hover:border-[3px] border-[#FAC433] mb-10">
          <div className="flex flex-col items-center text-center">
            <img src={intelligence} alt="" className="w-[206px] h-[206px]" />
            <h2 className="font-bold text-[25px] mb-4">GRAPH INDICATOR</h2>
            <p>
              Graph data analysis searches through patterns of data and
              indicates the most optimal path or result that best suits the
              users’ requirements.
            </p>
          </div>
          <div className="flex flex-row justify-between text-blue-500 cursor-pointer">
            <span>#Recommendation</span>
            <span>&#8594;</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full bg-[#fff] py-[64px]">
        <h1 className="text-center font-bold text-[40px] text-[#444444]">
          Ready to connect?
        </h1>
        <p className=" text-center text-[#666666]">
          Click below to download and connect your data with AgensGraph. <br />
          If you have any questions, feel free to reach out to us and learn how
          enterprises are using our graph database as their key to success.
        </p>
        <div className="flex flex-row items-center space-x-3 mt-5">
          <button className="bg-blue-700 text-white px-3 py-2 rounded-[5px] font-bold">
            DOWNLOAD
          </button>
          <button className="bg-blue-700 text-white px-3 py-2 rounded-[5px] font-bold">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usecases;
