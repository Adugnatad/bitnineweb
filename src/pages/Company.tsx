import circle from "../assets/circle2.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import map from "../assets/map2.png";

const Company = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full bg-[#fff] py-[64px]">
        <h1 className=" text-[50px] text-[#444444] text-center sm:text-start">
          <b> Connecting Data </b> for a Smarter World
        </h1>
        <p className=" text-center text-[#666666]">
          With Bitnine’s unique Graph technology,
          <br />
          we will innovate the database industry as a whole.
          <br />
          Our vision is to create a smarter world by connecting all data with
          Graphs.
        </p>
      </div>
      <div className="flex flex-col tb:flex-row items-center justify-between bg-[#F3F6FA] px-[10%]">
        <div className="flex flex-col w-full  py-[64px]">
          <h1 className="text-[35px] text-[#444444]">
            <b>Who</b> are we and,
          </h1>
          <h1 className="text-[35px] text-[#444444] mb-7">
            <b>Why</b> should you care ?
          </h1>

          <h1 className="font-medium text-[18px] text-[#444444] mb-2">
            The Global Leader of Graph Business Solutions
          </h1>
          <p className="text-[#666666] text-[16px] mb-4">
            Bitnine transcends big data problems by creating solutions that are
            consistently evolving. Bitnine was founded on principles of
            collaboration, innovation, science and creativity. This is reflected
            in the company culture where the employees are not only highly
            skilled, they are highly passionate about what they do.
          </p>
          <p className="text-[#666666] text-[16px] mb-3">
            Our primary objective is to achieve business outcomes that position
            your company for long term success. So when your organization is
            facing a big data challenge, do not feel overwhelmed, we will face
            that challenge with you and prevail. This is our mission. This is
            our calling. This is our promise to you!
          </p>
        </div>
        <div>
          <img src={circle} alt="circle" className="scale-75" />
        </div>
      </div>
      <div className="flex flex-col items-center w-full bg-[#fff] py-[64px]">
        <h1 className="text-[50px] text-[#444444]">
          Our <b> GOAL</b>
        </h1>
        <p className=" text-center text-[#666666]">
          At Bitnine, our main goal is to provide you with more innovative and
          high efficiency database solutions, as well as <br /> a better
          operational environment void from complications and risks.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between bg-[#022ea9] py-[50px] px-[10%]">
        <div className="flex flex-col  w-full  text-[#fff] py-[64px] sm:w-[49%]">
          <h1 className="text-[40px] text-[#fff]">
            Our <b> Products</b>
          </h1>
          <p className=" text-[#fff]">
            Bitnine provides users with essential solutions for valuable
            insights to business. Try our fully-featured and enterprise-ready
            solutions. Download now !
          </p>
        </div>
        <div className="flex flex-col items-center text-white space-y-3 w-[100%] sm:w-[50%]">
          <div className="flex flex-row items-center justify-between px-3 py-2 border-[2px] border-[#8197D4] w-[90%]">
            <div>
              <h2>AgensGraph Enterprise Edition</h2>
              <span>Download</span>
            </div>
            <MdKeyboardArrowRight
              size={23}
              className="text-[#fff] duration-300 group-hover:text-[#f29e0f]"
            />
          </div>
          <div className="flex flex-row items-center justify-between px-3 py-2 border-[2px] border-[#8197D4] w-[90%]">
            <div>
              <h2>AgensGraph Enterprise Edition</h2>
              <span>Download</span>
            </div>
            <MdKeyboardArrowRight
              size={23}
              className="text-[#fff] duration-300 group-hover:text-[#f29e0f]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between bg-[#fff] py-[50px] w-full">
        <div className="flex flex-col  w-full  text-[#fff] w-[50%] h-[372px] backg"></div>
        <div className="flex flex-col bg-white text-black items-center text-white px-10 py-[50px] w-[90%]">
          <div className="w-full">
            <h2 className="mb-3 text-[40px]">
              <span className="font-medium">JOIN</span> us
            </h2>
            <p className="mb-4 text-[#444444] text-[17px]">
              We have a talented team and need people interested in being the
              best at what they do. From support, sales, consulting, marketing,
              to partnerships, we’re always looking for valuable team members
              that want to make a difference and create a meaningful impact.
            </p>
            <p className="text-[#444444] text-[16px]">
              If you are looking to join our team,
              <br /> Click the button below !
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between bg-[#F3F6FA] px-[10%]">
        <div className="flex flex-col items-center w-full  py-[64px]">
          <h1 className="text-[35px] text-[#444444] mb-[-50px]">
            <b>WHERE</b> is bitnine ?
          </h1>
          <img src={map} alt="circle" className="scale-75" />
        </div>
      </div>
    </div>
  );
};

export default Company;
