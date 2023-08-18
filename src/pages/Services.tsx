import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Services = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full bg-[#fff] py-[64px]">
        <h1 className="font-bold text-[50px] text-[#444444]">SERVICES</h1>
        <p className=" text-center text-[#666666]">
          We provide consulting and analyzing service <br />
          for those who need help setting up graph database to your existing
          system.
        </p>
        <div className="flex flex-row items-center space-x-3 mt-5">
          <button className="border-[3px] border-[#444444] text-[#444444] px-3 py-2 rounded-[5px] font-bold">
            DOWNLOAD
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#F3F6FA] py-10">
        <div className="flex flex-col items-center w-full  py-[64px]">
          <h1 className="font-bold text-center sm:text-start text-[35px] text-[#444444]">
            CONSULTING <span className="font-medium text-[40px]">Services</span>
          </h1>
          <p className=" text-center text-[#666666] text-[17px] py-2">
            We provide graph data consulting and modeling services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center  w-[75%]">
            <Accordion
              className=" py-4 space-y-3  sm:w-[50%] mr-10"
              allowMultiple
            >
              <AccordionItem borderColor={""}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="span" flex="1" className="py-2" textAlign="left">
                        <span
                          className={`text-[18px] ${
                            isExpanded && "text-[#0000ff]"
                          }`}
                        >
                          Graph Data Consulting Service
                        </span>
                      </Box>
                      {!isExpanded ? (
                        <MdKeyboardArrowDown
                          size={27}
                          className="cursor-pointer text-[#000] duration-300"
                        />
                      ) : (
                        <MdKeyboardArrowUp
                          size={27}
                          className="cursor-pointer text-[#0000ff] duration-300"
                        />
                      )}
                    </AccordionButton>

                    <AccordionPanel>
                      <ul className="list-disc space-y-2 px-3">
                        <li>
                          Diagnose data usage status and review adequacy of
                          graph data application & usage
                        </li>
                        <li>
                          Plan customer-specific analysis project and establish
                          related strategy
                        </li>
                        <li>
                          Design graph models and derive insights to achieve
                          business objectives
                        </li>
                      </ul>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <Accordion
              className=" py-4 space-y-3  sm:w-[50%] mr-10"
              allowMultiple
            >
              <AccordionItem borderColor={""}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="span" flex="1" className="py-2" textAlign="left">
                        <span
                          className={`text-[18px] ${
                            isExpanded && "text-[#0000ff]"
                          }`}
                        >
                          Graph Data Modeling Services
                        </span>
                      </Box>
                      {!isExpanded ? (
                        <MdKeyboardArrowDown
                          size={27}
                          className="cursor-pointer text-[#000] duration-300"
                        />
                      ) : (
                        <MdKeyboardArrowUp
                          size={27}
                          className="cursor-pointer text-[#0000ff] duration-300"
                        />
                      )}
                    </AccordionButton>

                    <AccordionPanel>
                      <ul className="list-disc space-y-2 px-3">
                        <li>Graph-based Fraud Detection Service (G-FDS)</li>
                        <li>
                          Graph-based Predictive Analytics Service (G-PAS)
                        </li>
                        <li>
                          Knowledge Graph & graph-based decision-making solution
                          (G-KGS: AI, Knowledge Graph)
                        </li>
                      </ul>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col items-center w-full  ">
          <h1 className="font-bold text-center sm:text-start text-[35px] text-[#444444]">
            Analyzing <span className="font-medium text-[40px]">Services</span>
          </h1>
          <p className=" text-center text-[#666666] text-[17px] py-2">
            We provide graph data analysis services such as predictive analytics
            and fraud detection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center w-[75%]">
            <Accordion
              className=" py-4 space-y-3  sm:w-[50%] mr-10"
              allowMultiple
            >
              <AccordionItem borderColor={""}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="span" flex="1" className="py-2" textAlign="left">
                        <span
                          className={`text-[18px] ${
                            isExpanded && "text-[#0000ff]"
                          }`}
                        >
                          Graph Data Analyzing Service
                        </span>
                      </Box>
                      {!isExpanded ? (
                        <MdKeyboardArrowDown
                          size={27}
                          className="cursor-pointer text-[#000] duration-300"
                        />
                      ) : (
                        <MdKeyboardArrowUp
                          size={27}
                          className="cursor-pointer text-[#0000ff] duration-300"
                        />
                      )}
                    </AccordionButton>

                    <AccordionPanel>
                      <ul className="list-disc space-y-2 px-3">
                        <li>
                          Diagnose data usage status and review adequacy of
                          graph data application & usage
                        </li>
                        <li>
                          Plan customer-specific analysis project and establish
                          related strategy
                        </li>
                        <li>
                          Design graph models and derive insights to achieve
                          business objectives
                        </li>
                      </ul>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <Accordion
              className=" py-4 space-y-3  sm:w-[50%] mr-10"
              allowMultiple
            >
              <AccordionItem borderColor={""}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="span" flex="1" className="py-2" textAlign="left">
                        <span
                          className={`text-[18px] ${
                            isExpanded && "text-[#0000ff]"
                          }`}
                        >
                          Graph-based Solution Service
                        </span>
                      </Box>
                      {!isExpanded ? (
                        <MdKeyboardArrowDown
                          size={27}
                          className="cursor-pointer text-[#000] duration-300"
                        />
                      ) : (
                        <MdKeyboardArrowUp
                          size={27}
                          className="cursor-pointer text-[#0000ff] duration-300"
                        />
                      )}
                    </AccordionButton>

                    <AccordionPanel>
                      <ul className="list-disc space-y-2 px-3">
                        <li>Graph-based Fraud Detection Service (G-FDS)</li>
                        <li>
                          Graph-based Predictive Analytics Service (G-PAS)
                        </li>
                        <li>
                          Knowledge Graph & graph-based decision-making solution
                          (G-KGS: AI, Knowledge Graph)
                        </li>
                      </ul>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="w-full relative flex flex-col items-center h-[355px] backd">
        <div className="  flex flex-col items-center  pt-20">
          <h1 className="font-bold text-[35px] text-[#fff]">
            Training <span className="font-medium text-[40px]">Services</span>
          </h1>
          <p className="text-[#fff] text-center ">
            harpen your skills and experience in the graph database field and{" "}
            <br />
            take advantage of a great opportunity to be trained by AgensGraph
            Database experts.
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-center my-3 text-[35px] text-[#000]">
          AgensGraph <span className="font-medium text-[40px]">Service</span>
        </h1>
        <div className="flex flex-col items-center tb:flex-row tb:justify-center  mb-4 ml-4">
          <div className="tb:max-w-[400px] flex flex-col space-y-4 mx-7 mb-4">
            <h2 className="bg-[#2D6FAD] text-[#fff] font-bold text-[19px] p-3 ">
              SYSTEM DEVELOPMENT
            </h2>
            <div className="flex flex-col border-[1px] border-[#ddd] text-[#444444] px-6 py-5">
              <h3 className="text-[19px] font-medium text-[#000]">
                BUILDING DATABASES
              </h3>
              <ul className="list-disc space-y-2 px-3 ">
                <li>Consulting service in building AgensGraph</li>
                <li>Examine adoption with customer environment analysis</li>
                <li>
                  Provides server configuration guide optimized for service
                  system
                </li>
                <li>Supports installation & configuration</li>
              </ul>
            </div>
            <div className="flex flex-col border-[1px] border-[#ddd] text-[#444444] px-6 py-5">
              <h3 className="text-[19px] font-medium text-[#000]">
                BUILDING DATABASES
              </h3>
              <ul className="list-disc space-y-2 px-3 ">
                <li>Consulting service in building AgensGraph</li>
                <li>Examine adoption with customer environment analysis</li>
                <li>
                  Provides server configuration guide optimized for service
                  system
                </li>
                <li>Supports installation & configuration</li>
              </ul>
            </div>
            <div className="flex flex-col border-[1px] border-[#ddd] text-[#444444] px-6 py-5">
              <h3 className="text-[19px] font-medium text-[#000]">
                BUILDING DATABASES
              </h3>
              <ul className="list-disc space-y-2 px-3 ">
                <li>Consulting service in building AgensGraph</li>
                <li>Examine adoption with customer environment analysis</li>
                <li>
                  Provides server configuration guide optimized for service
                  system
                </li>
                <li>Supports installation & configuration</li>
              </ul>
            </div>
          </div>
          <div className="tb:max-w-[400px] flex flex-col space-y-4 mr-7 mb-4">
            <h2 className="bg-[#2D6FAD] text-[#fff] font-bold text-[19px] p-3 ">
              SYSTEM DEVELOPMENT
            </h2>
            <div className="flex flex-col border-[1px] border-[#ddd] text-[#444444] px-6 py-5">
              <h3 className="text-[19px] font-medium text-[#000]">
                BUILDING DATABASES
              </h3>
              <ul className="list-disc space-y-2 px-3 ">
                <li>Consulting service in building AgensGraph</li>
                <li>Examine adoption with customer environment analysis</li>
                <li>
                  Provides server configuration guide optimized for service
                  system
                </li>
                <li>Supports installation & configuration</li>
              </ul>
            </div>
            <div className="flex flex-col border-[1px] border-[#ddd] text-[#444444] px-6 py-5">
              <h3 className="text-[19px] font-medium text-[#000]">
                BUILDING DATABASES
              </h3>
              <ul className="list-disc space-y-2 px-3 ">
                <li>Consulting service in building AgensGraph</li>
                <li>Examine adoption with customer environment analysis</li>
                <li>
                  Provides server configuration guide optimized for service
                  system
                </li>
                <li>Supports installation & configuration</li>
              </ul>
            </div>
            <div className="flex flex-col border-[1px] border-[#ddd] text-[#444444] px-6 py-5">
              <h3 className="text-[19px] font-medium text-[#000]">
                BUILDING DATABASES
              </h3>
              <ul className="list-disc space-y-2 px-3 ">
                <li>Consulting service in building AgensGraph</li>
                <li>Examine adoption with customer environment analysis</li>
                <li>
                  Provides server configuration guide optimized for service
                  system
                </li>
                <li>Supports installation & configuration</li>
              </ul>
            </div>
          </div>
          <div className="tb:max-w-[400px] flex flex-col space-y-4 mr-7 mb-4">
            <h2 className="bg-[#2D6FAD] text-[#fff] font-bold text-[19px] p-3 ">
              SYSTEM DEVELOPMENT
            </h2>
            <div className="flex flex-col border-[1px] border-[#ddd] text-[#444444] px-6 py-5">
              <h3 className="text-[19px] font-medium text-[#000]">
                BUILDING DATABASES
              </h3>
              <ul className="list-disc space-y-2 px-3 ">
                <li>Consulting service in building AgensGraph</li>
                <li>Examine adoption with customer environment analysis</li>
                <li>
                  Provides server configuration guide optimized for service
                  system
                </li>
                <li>Supports installation & configuration</li>
              </ul>
            </div>
            <div className="flex flex-col border-[1px] border-[#ddd] text-[#444444] px-6 py-5">
              <h3 className="text-[19px] font-medium text-[#000]">
                BUILDING DATABASES
              </h3>
              <ul className="list-disc space-y-2 px-3 ">
                <li>Consulting service in building AgensGraph</li>
                <li>Examine adoption with customer environment analysis</li>
                <li>
                  Provides server configuration guide optimized for service
                  system
                </li>
                <li>Supports installation & configuration</li>
              </ul>
            </div>
            <div className="flex flex-col border-[1px] border-[#ddd] text-[#444444] px-6 py-5">
              <h3 className="text-[19px] font-medium text-[#000]">
                BUILDING DATABASES
              </h3>
              <ul className="list-disc space-y-2 px-3 ">
                <li>Consulting service in building AgensGraph</li>
                <li>Examine adoption with customer environment analysis</li>
                <li>
                  Provides server configuration guide optimized for service
                  system
                </li>
                <li>Supports installation & configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
