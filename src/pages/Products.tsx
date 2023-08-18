import React from "react";
import "../App.css";
import ag_logo from "../assets/ag_logo.png";
import ag_graph from "../assets/agens_graph.png";
import performance from "../assets/performance.png";
import Reliability from "../assets/Reliability.png";
import Compatibility from "../assets/Compatibility.png";
import circle from "../assets/check_black.png";
import greyCircle from "../assets/check.png";
import cross from "../assets/x.png";

const Products: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full bg-[#fff] py-[64px]">
        <h1 className="font-bold text-[50px] text-[#444444]">AgensGraph</h1>
        <p className=" text-center text-[#666666]">
          AgensGraph is an enterprise graph database management system which
          stores and <br /> manages various types of data including relational
          data in your legacy system.
        </p>
      </div>
      <div className="bg-[#F3F6FA] flex flex-row justify-center items-center py-[100px]">
        <div className="wrapper">
          <div className="card">
            <div className=" bg-white flex flex-col items-center justify-center  front">
              <h1 className="text-[20px]">W.H.Y.?</h1>
              <img src={ag_logo} alt="ag_logo" />
            </div>
            <div className="flex flex-row items-center justify-center bg-[#4a8eff] text-[#fff] back">
              <p className="text-[16px] text-[21px] w-[80%] text-center">
                Because AgensGraph takes on schema-free structure, it is
                convenient and efficient to modify and add new data on the
                existing database.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex flex-col items-center  text-center mb-3">
          <span className="font-bold text-[35px]">SQL + Cypher</span>
          <span className="font-bold text-[#444444]">
            : Hybrid Query Processing
          </span>
        </div>
        <p className="text-center text-[#6B6666]">
          Cypher is one of the most efficient graph query languages in the graph
          domain.
          <br /> AgensGraph supports both Cypher and SQL in its graph domain.{" "}
          <br />
          Through hybrid query technology, bring out the best performance <br />{" "}
          by creating, modifying, and querying graph data.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row justify-center space-x-5">
          <div className="flex flex-row justify-center">
            <img
              src={ag_graph}
              alt="agn_graph"
              className="h-[545px] sm:w-[350px] "
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col max-w-[732px] w-full mb-5">
              <h3 className="text-[#1e73be] text-[19px] font-bold mb-2">
                Cypher in SQL
              </h3>
              <div className="flex flex-col bg-[#2D2D2D] w-full font-medium text-[#fff] px-5 py-5">
                <span className="text-[#F9245E] font-bold">
                  SELECT <span className=" text-[#AC80FF]">n.name</span>
                </span>
                <span className="text-[#F9245E] font-bold ">
                  FROM <span className=" text-[#AC80FF]">history</span>,
                  <span className=" text-[#fff]">(</span> MATCH
                  <span className=" text-[#fff]">(n:dev)</span> RETURN
                  <span className=" text-[#fff]">n</span>
                  <span className=" text-[#fff]">)</span> AS
                  <span className=" text-[#fff]"> dev</span> WHERE
                  <span className=" text-[#AC80FF]">history.year</span>
                  <span className=" text-[#fff]">
                    <span>&gt;</span> n.year::int
                  </span>
                </span>
                <span className="tracking-widest"> ---------</span>
                <span className=" text-[#AC80FF]">name</span>
                <span className="tracking-widest"> ---------</span>
                <span className=" text-[#AC80FF]">someone</span>
                <span>(1 row)</span>
              </div>
            </div>
            <div className="flex flex-col max-w-[732px] w-full mb-5">
              <h3 className="text-[#1e73be] text-[19px] font-bold mb-2">
                SQL in Cypher
              </h3>
              <div className="flex flex-col bg-[#2D2D2D] w-full font-medium text-[#fff] px-5 py-5">
                <span className="text-[#F9245E] font-bold">
                  MATCH <span className=" text-[#AC80FF]">n.dev</span>
                  <span className="text-[#F9245E] font-bold ">
                    WHERE <span className=" text-[#AC80FF]">n.year</span>
                  </span>
                  ,<span className=" text-[#fff] font-thin">::int &lt; (</span>{" "}
                  SELECT
                  <span className=" text-[#AC80FF]">year</span>
                  <span className="text-[#F9245E] font-bold ">
                    FROM <span className=" text-[#AC80FF]">history</span>
                  </span>
                  <span className="text-[#F9245E] font-bold ">
                    WHERE <span className=" text-[#AC80FF]">event</span>
                  </span>
                  <span className=" text-[#fff] font-thin">
                    {" "}
                    ='Agens Graph')
                  </span>
                </span>
                <span className="text-[#F9245E] font-bold ">
                  RETURN
                  <span className=" text-[#AC80FF]">properties(n) A n;</span>
                </span>
                <span className="tracking-widest">
                  ----------------------------------
                </span>
                n
                <span className="tracking-widest">
                  ----------------------------------
                </span>
                <span className=" text-[#fff]">
                  &#123;&#34;
                  <span className=" text-[#AC80FF]">name</span>
                  &#34;:&#34;<span className=" text-[#AC80FF]">someone</span>
                  &#34;,&#34;<span className=" text-[#AC80FF]">year</span>
                  &#34;:2015&#125;
                </span>
                <span>(1 row)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#444444] text-[19px] my-2">
            More information about Cypher
          </span>
          <button className="border-[2px] border-[#8E8E8E] text-[#8E8E8E] px-2 py-1">
            READ MORE
          </button>
        </div>
        <div className="flex flex-col items-center bg-[#F3F6FA] w-full py-[70px] my-[50px]">
          <div className="text-center my-4">
            <h2 className="tracking-widest font-medium">
              Fast, Always-On, and Extensive
            </h2>
            <h1 className="text-[35px] tracking-wider font-bold">
              Enterprise Graph Database
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-10 sm:space-x-10 sm:space-y-0">
            <div className="flex flex-col items-center justify-center border-[1px] rounded-lg bg-[#fff] shadow-2xl w-[350px] h-[250px] group relative">
              <img
                src={performance}
                alt="perfomance"
                className="duration-700 group-hover:opacity-0"
              />
              <div className="absolute text-center text-[#444444] px-4 scale-0 duration-700 group-hover:scale-100">
                <h2 className="text-[23px] font-bold">Performance</h2>
                <p>
                  AgensGraph releases an unmatched performance on
                  compled/iterative join operations to that of traditional
                  relational databases.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-[#fff] shadow-2xl w-[350px] h-[250px] group relative">
              <img
                src={Reliability}
                alt="reliability"
                className="duration-700 group-hover:opacity-0"
              />
              <div className="absolute text-center text-[#444444] px-4 scale-0 duration-700 group-hover:scale-100">
                <h2 className="text-[23px] font-bold">Reliability</h2>
                <p>
                  AgensGraph is ACID compliant and offers trigger-based logical
                  replication with high availablity tools (Stolen, repmgr) for
                  your stability.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-[#fff] shadow-2xl w-[350px] h-[250px] group relative">
              <img
                src={Compatibility}
                alt="compatibility"
                className="duration-700 group-hover:opacity-0"
              />
              <div className="absolute text-center text-[#444444] px-4 scale-0 duration-700 group-hover:scale-100">
                <h2 className="text-[23px] font-bold">Compatibility</h2>
                <p>
                  AgensGraph supports most PostgreSQL extensions including
                  foreign data wrappers, text searching, security, and spatial
                  modules for all-purpose availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex flex-row items-center mb-2">
            <img src={ag_logo} alt="ag_logo" className="w-[184px] h-[34px]" />
            <span className="font-bold text-[30px]"> vs. NoSQL</span>
          </div>
          <p className="text-[#666666]">
            AgensGraph is an enterprise graph database management system which
            stores and <br /> manages various types of data including relational
            data in your legacy system.
          </p>
        </div>
        <table className="sm:w-[80%]">
          <thead>
            <tr>
              <td>&nbsp;</td>
              <td align="center" className="bg-[#EEEEEE] px-[7px] py-[10px]">
                Graph Model
              </td>
              <td align="center" className="bg-[#EEEEEE] px-[7px] py-[10px]">
                Relational Model
              </td>
              <td align="center" className="bg-[#EEEEEE] px-[7px] py-[10px]">
                Document Model
              </td>
              <td align="center" className="bg-[#EEEEEE] px-[7px] py-[10px]">
                Key-value Store Model
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#FAC433]">
              <td className="px-[16px] py-[10px]">
                <strong>AgensGraph</strong>
              </td>
              <td align="center" className="py-[10px]">
                <img src={circle} />
              </td>
              <td align="center">
                <img src={circle} />
              </td>
              <td align="center">
                <img src={circle} />
              </td>
              <td align="center">
                <img src={circle} />
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#E8E8E8]">
              <td className="px-[16px] py-[10px]">ArangoDB</td>
              <td align="center" className="py-[10px]">
                <img src={greyCircle} />
              </td>
              <td align="center">
                <img src={cross} />
              </td>
              <td align="center">
                <img src={greyCircle} />
              </td>
              <td align="center">
                <img src={greyCircle} />
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#E8E8E8]">
              <td className="px-[16px] py-[10px]">Couchbase</td>
              <td align="center">
                <img src={cross} />
              </td>
              <td align="center">
                <img src={cross} />
              </td>
              <td align="center">
                <img src={greyCircle} />
              </td>
              <td align="center">
                <img src={greyCircle} />
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#E8E8E8]">
              <td className="px-[16px] py-[10px]">Neo4j</td>
              <td align="center">
                <img src={greyCircle} />
              </td>
              <td align="center">
                <img src={cross} />
              </td>
              <td align="center">
                <img src={cross} />
              </td>
              <td align="center">
                <img src={cross} />
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#E8E8E8]">
              <td className="px-[16px] py-[10px]">OrientDB</td>
              <td align="center">
                <img src={greyCircle} />
              </td>
              <td align="center">
                <img src={cross} />
              </td>
              <td align="center">
                <img src={greyCircle} />
              </td>
              <td align="center">
                <img src={greyCircle} />
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#E8E8E8]">
              <td className="px-[16px] py-[10px]">CosmosDB</td>
              <td align="center">
                <img src={greyCircle} />
              </td>
              <td align="center">
                <img src={cross} />
              </td>
              <td align="center">
                <img src={greyCircle} />
              </td>
              <td align="center">
                <img src={greyCircle} />
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#E8E8E8]">
              <td className="px-[16px] py-[10px]">Neptune</td>
              <td align="center">
                <img src={greyCircle} />
              </td>
              <td align="center">
                <img src={cross} />
              </td>
              <td align="center">
                <img src={cross} />
              </td>
              <td align="center">
                <img src={cross} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col items-center">
          <span className="text-[#444444] text-[19px] my-2">
            Get Started with{" "}
            <span className="text-[23px] font-bold"> AgensGraph!</span>
          </span>
          <button className="border-[2px] border-[#8E8E8E] text-[#8E8E8E] px-4 py-2 rounded-[4px]">
            Download
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#F3F6FA] py-[50px] my-10">
        <div className="flex flex-col items-center  text-center mb-7">
          <span className="font-bold text-[#444444]">Why should I use</span>
          <span className="font-bold text-[35px]">Enterprise Edition?</span>
          <p className="text-center text-[#6B6666]  max-w-[1048px] w-full">
            AgensGraph Enterprise Edition comes along with all the great
            features of our AgensGraph Community Edition but provides even more
            core capabilities for enterprises to stay universally connected to
            stable and efficient data. This includes monitoring, memory
            optimization, high availability, enhanced user environments, in
            addition to providing on-going professional support.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center w-[80%]">
          <div className="text-center px-4 m-4 mb-7">
            <span className="font-bold text-[35px]">Customer Support</span>
            <p className="mt-4 text-[#6B6666]">
              We provide support by Agens support portal, e-mail and on-site for
              our customers who purchased AgensGraph Enterprise Edition with our
              commercial license. <br />
              There are several grades in terms of our license agreement, and
              the range and the level of services we provide to our customers
              are different upon the contract contents they have.
            </p>
          </div>
          <div className="text-center px-4 m-4 mb-7">
            <span className="font-bold text-[35px] ">License Agreement</span>
            <p className="mt-4  text-[#6B6666]">
              License terms for using our products are currently under two major
              license agreements — Apache 2.0 and our Commercial License. <br />
              Our Commercial License consists of three different license terms
              and if you want more details about our license agreements, please
              contact us by e-mail or our website.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-start w-[80%]">
          <div className="flex flex-col items-center  text-center mb-3 w-[100%] sm:w-[50%] sm:px-9 my-5">
            <div className="flex flex-col items-center text-center shadow-2xl group">
              <span className="font-bold text-[35px] text-[#fff] bg-[#444444] w-full py-3 duration-500 group-hover:bg-[#4a8eff]">
                Technical Support
              </span>
              <div className="flex flex-col py-4">
                <span className="font-bold text-[#444444]">
                  Community Edition
                </span>
                _
              </div>
              <div className="flex flex-col space-y-[2px] w-[90%] ">
                <hr className="h-[1px] w-full bg-[#000]" />
                <hr />
              </div>
              <span className="m-4 mb-0 text-[15px] font-bold">
                Enterprise Edition
              </span>
              <p className="text-[#444444] m-7">
                24×7 or 8×5 Online Support (e-mail / Agens support portal)
                Professional On-site Support(separately costs)
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center  text-center mb-3 w-[100%] sm:w-[50%] sm:px-9 my-5">
            <div className="flex flex-col items-center text-center shadow-2xl w-full group ">
              <span className="font-bold text-[35px] text-[#fff] bg-[#444444] w-full py-3 duration-500 group-hover:bg-[#4a8eff]">
                License
              </span>
              <div className="flex flex-col py-4">
                <span className="font-bold text-[#444444]">
                  Community Edition <br /> Apache 2.0
                </span>
              </div>
              <div className="flex flex-col space-y-[2px] w-[90%] ">
                <hr className="h-[1px] w-full bg-[#000]" />
                <hr />
              </div>
              <span className="m-4 mb-0 text-[15px] font-bold">
                Enterprise Edition
              </span>
              <p className="text-[#444444] mb-2">Commercial</p>
              <div className="flex flex-col space-y-[2px] w-[90%] my-5">
                <hr className="h-[1px] w-full bg-[#000]" />
                Evaluation Development Production
                <hr />
              </div>
            </div>
          </div>
        </div>
        <button className="border-[2px] border-[#8E8E8E] text-[#8E8E8E] px-4 py-2 rounded-[4px] mt-10">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Products;
