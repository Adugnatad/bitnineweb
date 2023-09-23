import React from "react";
import { BiSearch, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsMedium, BsFacebook } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
// import bitnineImg from "../assets/bitnine-logo.png";
import useDetectScroll from "@smakss/react-scroll-direction";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const scrollDir = useDetectScroll({ thr: 150 });
  const Navigate = useNavigate();
  const location = useLocation();
  const route = location.pathname;

  return (
    <header className="sticky top-0 z-10">
      <div
        className={`flex flex-row items-center justify-center lg:justify-start px-3  bg-gradient-to-r from-[#0071BF] from-[5%] to-[#FBCB09] to-[90%] px-3  top-0 w-full duration-200 ${
          scrollDir === "down"
            ? "translate-y-[-50px]"
            : scrollDir === "up"
            ? "translate-y-[0]"
            : ""
        } `}
      >
        <select className="text-[#666666] px-3 py-2 mb-2 mx-[140px] rounded-md hidden lg:flex">
          <option>Select Language</option>
          <option>English</option>
          <option>Korean</option>
        </select>
        <h2 className="text-[#fff] text-[18px] cursor-pointer duration-200 hover:text-[#FBCB09]">
          <span className="font-bold ">AG Cloud Express:</span> Experience graph
          database in a cloud environment for FREE!
        </h2>
      </div>
      <div
        className={`${
          scrollDir === "down"
            ? "translate-y-[-64px]"
            : scrollDir === "up"
            ? "translate-y-[0]"
            : ""
        } duration-200 hidden sm:block`}
      >
        <div className="bg-black flex flex-row justify-between lg:justify-end space-x-9 py-3 px-2">
          <select className="text-[#666666] px-3 py-2 mb-2 mx-[140px] rounded-md  lg:hidden">
            <option>Select Language</option>
            <option>English</option>
            <option>Korean</option>
          </select>
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-row space-x-4 items-center ">
              <BiSearch
                size={25}
                className="cursor-pointer text-[#fff] hover:text-[#808080]"
              />
              <span className="text-[#fff] text-[17px] cursor-pointer hover:text-[#808080] p-[0.5px]">
                CONTACT
              </span>
            </div>
            <div className="flex flex-row items-center items-center ">
              <div className="flex flex-col items-center p-2 bg-[length:200px_100px] relative group">
                <div className="bg-[#ddd] opacity-40 z-[11] h-[0px] w-full absolute top-0 duration-300  group-hover:h-full"></div>
                <BiLogoGithub
                  color="#99A2A7"
                  size={23}
                  className="text-[#99A2A7] group-hover:text-[#fff] z-[12]"
                />
              </div>
              <div className="flex flex-col items-center p-2 bg-[length:200px_100px] relative group">
                <div className="bg-red-500 opacity-100 z-[11] h-[0px] w-full absolute top-0 duration-300  group-hover:h-full"></div>
                <AiOutlineYoutube
                  //   color="#99A2A7"
                  size={23}
                  className="text-[#99A2A7] group-hover:text-[#fff] z-[12]"
                />
              </div>
              <div className="flex flex-col items-center p-2 bg-[length:200px_100px] relative group">
                <div className="bg-[#117EB9] opacity-100 z-[11] h-[0px] w-full absolute top-0 duration-300  group-hover:h-full"></div>
                <BiLogoLinkedin
                  //   color="#99A2A7"
                  size={23}
                  className="text-[#99A2A7] group-hover:text-[#fff] z-[12]"
                />
              </div>
              <div className="flex flex-col items-center p-2 bg-[length:200px_100px] relative group">
                <div className="bg-[#42599E] opacity-100 z-[11] h-[0px] w-full absolute top-0 duration-300  group-hover:h-full"></div>
                <BsFacebook
                  //   color="#99A2A7"
                  size={23}
                  className="text-[#99A2A7] group-hover:text-[#fff] z-[12]"
                />
              </div>
              <div className="flex flex-col items-center p-2 bg-[length:200px_100px] relative group">
                <div className="bg-[#00AB6C] opacity-100 z-[11] h-[0px] w-full absolute top-0 duration-300  group-hover:h-full"></div>
                <BsMedium
                  //   color="#99A2A7"
                  size={23}
                  className="text-[#99A2A7] group-hover:text-[#fff] z-[12]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black flex flex-row items-center justify-between px-6 tb:px-2 pt-2 mt-[-5px] relative">
          {/* <img
            src={bitnineImg}
            style={{ width: "230px", height: "60px" }}
            className="hidden tb:flex"
            alt="bitnine-logo"
          /> */}
          <div className="w-[230px] h-[60px] hidden tb:flex"></div>
          <div className="flex flex-row items-center space-x-6 hidden tb:flex ">
            <div className="group" onClick={() => Navigate("/products")}>
              <span
                style={route === "/products" ? { color: "#FAC433" } : {}}
                className="text-[#fff] cursor-pointer hover:text-[#FAC433] duration-200"
              >
                PRODUCTS
              </span>
              <div className="flex flex-col min-w-[180px] w-[200px] py-2  text-white bg-black opacity-0 px-3 absolute  top-[100%] duration-500 group-hover:opacity-60">
                <div className="flex flex-row items-center justify-between  group mb-3">
                  <a href="#" className="duration-300 hover:text-[#FAC433]">
                    Graph Database
                  </a>
                  <MdKeyboardArrowRight
                    className="duration-300 text-[#fff] hover:text-[#FAC433]"
                    size={23}
                  />
                </div>
                <div className="flex flex-row items-center justify-between mt-2 group mb-3">
                  <a href="#" className="duration-300 hover:text-[#FAC433]">
                    Relational Database
                  </a>
                  <MdKeyboardArrowRight
                    className="duration-300 text-[#fff] hover:text-[#FAC433]"
                    size={23}
                  />
                </div>
              </div>
            </div>
            <span
              style={route === "/usecases" ? { color: "#FAC433" } : {}}
              onClick={() => Navigate("/usecases")}
              className="text-[#fff] cursor-pointer hover:text-[#FAC433] duration-200"
            >
              USE CASES
            </span>
            <span
              style={route === "/services" ? { color: "#FAC433" } : {}}
              onClick={() => Navigate("/services")}
              className="text-[#fff] cursor-pointer hover:text-[#FAC433] duration-200"
            >
              SERVICES
            </span>
            <div className="group" onClick={() => Navigate("/resources")}>
              <span
                style={route === "/resources" ? { color: "#FAC433" } : {}}
                className="text-[#fff] cursor-pointer hover:text-[#FAC433] duration-200"
              >
                RESOURCES
              </span>
              <div className="flex flex-col min-w-[180px] w-[200px] py-2  text-white bg-black opacity-0 px-3 absolute  top-[100%] duration-500 group-hover:opacity-60">
                <div className="flex flex-row items-center justify-between  group mb-3">
                  <a href="#" className="duration-300 hover:text-[#FAC433]">
                    Documentation
                  </a>
                </div>
                <div className="flex flex-row items-center justify-between mt-2 group mb-3">
                  <a href="#" className="duration-300 hover:text-[#FAC433]">
                    Learn
                  </a>
                </div>
              </div>
            </div>
            <span
              style={route === "/blog" ? { color: "#FAC433" } : {}}
              onClick={() => Navigate("/blog")}
              className="text-[#fff] cursor-pointer hover:text-[#FAC433] duration-200"
            >
              BLOG
            </span>
            <div className="group" onClick={() => Navigate("/company")}>
              <span
                style={route === "/company" ? { color: "#FAC433" } : {}}
                className="text-[#fff] cursor-pointer hover:text-[#FAC433] duration-200"
              >
                COMPANY
              </span>
              <div className="flex flex-col min-w-[180px] w-[200px] py-2  text-white bg-black opacity-0 px-3 absolute  top-[100%] duration-500 group-hover:opacity-60">
                <div className="flex flex-row items-center justify-between  group mb-3">
                  <a href="#" className="duration-300 hover:text-[#FAC433]">
                    About Us
                  </a>
                </div>
                <div className="flex flex-row items-center justify-between mt-2 group mb-3">
                  <a href="#" className="duration-300 hover:text-[#FAC433]">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <span className="text-[#fff] cursor-pointer hover:text-[#FAC433] duration-200">
              IR
            </span>
            <span className="text-[#fff] bg-[#022EA9] p-[7px] rounded-md  cursor-pointer hover:text-[#FAC433] duration-200">
              TRY FREE
            </span>
          </div>

          <Accordion
            className="bg-black text-white w-full py-4 space-y-3  tb:hidden"
            allowMultiple
          >
            <AccordionItem borderColor={"black"}>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {/* <img
                    src={bitnineImg}
                    style={{ width: "230px", height: "60px" }}
                    alt="bitnine-logo"
                  /> */}
                  <div className="w-[230px] h-[60px] hidden"></div>
                </Box>
                <FaBars
                  size={23}
                  className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                />
              </AccordionButton>
              <AccordionPanel>
                <Accordion
                  className="bg-black text-white w-full py-1  space-y-1"
                  allowMultiple
                >
                  <AccordionItem borderColor={"black"}>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                                Products
                              </a>
                            </Box>
                            {!isExpanded ? (
                              <MdKeyboardArrowDown
                                size={27}
                                className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                              />
                            ) : (
                              <MdKeyboardArrowUp
                                size={27}
                                className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel borderWidth={0}>
                          <Accordion
                            className="bg-black text-white w-full  px-6 "
                            defaultIndex={[0]}
                            allowMultiple
                          >
                            <AccordionItem borderColor={"black"}>
                              {({ isExpanded }) => (
                                <>
                                  <h2>
                                    <AccordionButton>
                                      <Box as="span" flex="1" textAlign="left">
                                        <a className="text-[15px] cursor-pointer hover:text-[#FAC433] ">
                                          Graph Database
                                        </a>
                                      </Box>
                                      {!isExpanded ? (
                                        <MdKeyboardArrowDown
                                          size={27}
                                          className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                                        />
                                      ) : (
                                        <MdKeyboardArrowUp
                                          size={27}
                                          className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                                        />
                                      )}
                                    </AccordionButton>
                                  </h2>
                                </>
                              )}
                            </AccordionItem>
                          </Accordion>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem borderColor={"black"}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                            USE CASES
                          </a>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem borderColor={"black"}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                            SERVICES
                          </a>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem borderColor={"black"}>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                                RESOURCES
                              </a>
                            </Box>
                            {!isExpanded ? (
                              <MdKeyboardArrowDown
                                size={27}
                                className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                              />
                            ) : (
                              <MdKeyboardArrowUp
                                size={27}
                                className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem borderColor={"black"}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                            BLOG
                          </a>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem borderColor={"black"}>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                                COMPANY
                              </a>
                            </Box>
                            {!isExpanded ? (
                              <MdKeyboardArrowDown
                                size={27}
                                className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                              />
                            ) : (
                              <MdKeyboardArrowUp
                                size={27}
                                className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem borderColor={"black"}>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                                IR
                              </a>
                            </Box>
                            {!isExpanded ? (
                              <MdKeyboardArrowDown
                                size={27}
                                className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                              />
                            ) : (
                              <MdKeyboardArrowUp
                                size={27}
                                className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                              />
                            )}
                          </AccordionButton>
                        </h2>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem borderColor={"black"}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <span className="text-[#fff] bg-[#022EA9] p-[7px] rounded-md  cursor-pointer hover:text-[#FAC433] duration-200">
                            TRY FREE
                          </span>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div
        className={`${
          scrollDir === "down"
            ? "translate-y-[-72px] sm:translate-y-[-64px] bg-black text-white"
            : scrollDir === "up"
            ? "translate-y-[0]"
            : ""
        } duration-200 block sm:hidden`}
      >
        <Accordion className="w-full py-4 space-y-3  tb:hidden" allowMultiple>
          <AccordionItem borderColor={"transparent"}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {/* <img
                  src={bitnineImg}
                  style={{ width: "230px", height: "60px" }}
                  alt="bitnine-logo"
                /> */}
                <div className="w-[230px] h-[60px] hidden tb:flex"></div>
              </Box>
              <FaBars
                size={23}
                className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
              />
            </AccordionButton>
            <AccordionPanel>
              <Accordion
                className="bg-black text-white w-full py-1  space-y-1"
                allowMultiple
              >
                <AccordionItem borderColor={"black"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                              Products
                            </a>
                          </Box>
                          {!isExpanded ? (
                            <MdKeyboardArrowDown
                              size={27}
                              className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                            />
                          ) : (
                            <MdKeyboardArrowUp
                              size={27}
                              className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                            />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel borderWidth={0}>
                        <Accordion
                          className="bg-black text-white w-full  px-6 "
                          defaultIndex={[0]}
                          allowMultiple
                        >
                          <AccordionItem borderColor={"black"}>
                            {({ isExpanded }) => (
                              <>
                                <h2>
                                  <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                      <a className="text-[15px] cursor-pointer hover:text-[#FAC433] ">
                                        Graph Database
                                      </a>
                                    </Box>
                                    {!isExpanded ? (
                                      <MdKeyboardArrowDown
                                        size={27}
                                        className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                                      />
                                    ) : (
                                      <MdKeyboardArrowUp
                                        size={27}
                                        className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                                      />
                                    )}
                                  </AccordionButton>
                                </h2>
                              </>
                            )}
                          </AccordionItem>
                        </Accordion>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem borderColor={"black"}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                          USE CASES
                        </a>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                <AccordionItem borderColor={"black"}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                          SERVICES
                        </a>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                <AccordionItem borderColor={"black"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                              RESOURCES
                            </a>
                          </Box>
                          {!isExpanded ? (
                            <MdKeyboardArrowDown
                              size={27}
                              className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                            />
                          ) : (
                            <MdKeyboardArrowUp
                              size={27}
                              className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                            />
                          )}
                        </AccordionButton>
                      </h2>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem borderColor={"black"}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                          BLOG
                        </a>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                <AccordionItem borderColor={"black"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                              COMPANY
                            </a>
                          </Box>
                          {!isExpanded ? (
                            <MdKeyboardArrowDown
                              size={27}
                              className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                            />
                          ) : (
                            <MdKeyboardArrowUp
                              size={27}
                              className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                            />
                          )}
                        </AccordionButton>
                      </h2>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem borderColor={"black"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <a className="uppercase cursor-pointer hover:text-[#FAC433] ">
                              IR
                            </a>
                          </Box>
                          {!isExpanded ? (
                            <MdKeyboardArrowDown
                              size={27}
                              className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                            />
                          ) : (
                            <MdKeyboardArrowUp
                              size={27}
                              className="cursor-pointer text-[#fff] duration-300 hover:text-[#FAC433]"
                            />
                          )}
                        </AccordionButton>
                      </h2>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem borderColor={"black"}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <span className="text-[#fff] bg-[#022EA9] p-[7px] rounded-md  cursor-pointer hover:text-[#FAC433] duration-200">
                          TRY FREE
                        </span>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </header>
  );
};

export default Header;
