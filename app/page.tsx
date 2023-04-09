"use client"
import Buttion from "./Buttons";
import Orrinal from "./DisplayAnas";
import { useState } from "react";
import Youtube from "./components/images/youtube";
import Twitter from "./components/images/twitter";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Logo from "./icon/logo";
import { quarterDetail, quarterinfo } from "@/Quaterinfo";
import { info } from "console";
import { useTheme } from 'next-themes'
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaFacebook, FaUserTie } from "react-icons/fa";
import React from "react";


export default function Home() {
  const [value, setvalue] = useState(false)
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="overflow-hidden">

        <nav >
          <div className="flex items-center h-16 sm:h-16 px-4 text-white bg-blue-900 justify-between">
            <div>
              <Logo />
            </div>
            <div className="flex space-x-4 items-center pr-4">
              <Orrinal />

              <div className="hidden  space-x-3 mr-4  border-4 ml-8 sm:space-x-4 sm:flex "  >
                <Buttion item="Apply " />
                <Buttion item="Info" />
                <FaFacebook size={30} style={{ fill: 'yellow' }}/>
              </div>
              <div onClick={() => { setvalue(!value) }} className="flex cursor-pointer sm:hidden space-x-4 mr-96">

                {value ? (<IoMdClose style={{ fill: "#ff00ff", fontSize: "1.5rem" }} />) :
                  (<GiHamburgerMenu style={{ fill: "#ff00ff", fontSize: "1.5rem" }} />)
                }
              </div>
              {/* <div>
                {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
              </div> */}
              <div >
                {theme === "light" ? <MdDarkMode fill="yellow" onClick={() => { setTheme("dark") }} /> 
                : <MdOutlineLightMode onClick={() => { setTheme("light") }} />}
              </div>
            </div>
          </div>
        </nav>
        {/* <div className="">
            <Youtube />
            <Twitter />
          </div> */}
        {/* mobile nav */}
        <div className={`${value ? " flex" : "hidden"} w-full h-56 flex-col items-center m-2 manas list-none`}>
          <li className="m-2 bg-gray-400  w-full  h-40 justify-center flex items-center">Anas</li>
          <li className="m-2 bg-gray-400 w-full  h-40 justify-center flex items-center">basit</li>
          <li className="m-2 bg-gray-400 w-full  h-40 justify-center flex items-center"> ahmer</li>
          <li className="m-2 bg-gray-400 w-full h-40  justify-center flex items-center">company</li>
        </div>
        {/* <div className={`${value ? " flex":"hidden"} w-full h-40 bg-Anas-400`}></div> */}
        <main className=" flex max-h-full  justify-center text-justify items-center  flex-col-reverse space-y-12  sm:flex-row sm:py-0 sm:h-full md:text-xs md:justify-around sm:w-full">
          {/* w-[20rem]  h-[60rem] sm:h[50rem] */}
          <div className=" w-[20rem] sm:w-[26rem] h-[28rem] ">
            <div className="tracking-wide  space-y-0 m-6">
              <h1>This is Anas  first web In programing site.</h1>
              <p className="text-0 sm:font-extrabold text-md  animate-pulse sm:text-xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing .
              </p>
              <p className="font-extrabold font-serif lg:text-lg">
                sit amet consectetur adipisicing pesawer zalmi lose. elit. Quisquam, ex odio error
                sint esse veniam prent archito, illum a porro voluptas natus
                corrupti, eius contur magnam  .
              </p>
              <p className="sm:text-lg">
                Lorem ipsum dolor sit amet elit. Sequi maiores, odit moias illo
                recndae, odio fugit rerum acum dicta perstis officiis ab iure.
              </p>
            </div>
            <div className="space-x-4 m-4">
              <Buttion item="Detail" />
              <Buttion item="Get Enrolled" />
            </div>
          </div>
          <div className="w-[22rem]  h-[21rem]  ">
            <img className="h-80 w-96" src="/karachi.png" alt="asas" />
          </div>
        </main>

        <section className="flex items-center justify-center">
          <div className=" p-8  leading-3  sm:flex space-y-2 sm:space-x-4 items-start bg-white-400  sm:items-start">
            <div className="w-52 pl-2 bg-pink-400  tracking-widest space-y-1 h-[23rem]  ">
              <img className=" w-64" src="/Lahor.png" alt="lahor" />
              <p className="leading-loose">
                Lorem ipsum dolor sit amet conytltur adig elit. Nemo.
              </p>
              <div className=" ">
                <Buttion className="h-8" item="Watch" />
              </div>
            </div>

            <div className="w-52  pl-2 bg-pink-400 space-y-1 h-[24rem]  ">
              <img className="h-52 w-52 " src="/islambad.png" alt="tech" />
              <p className="leading-7 ">
                Lorem ipsum dolor sit amet consectetur adsdssicing elit.
                Achito,imdit expabo ducims maies rum suscipi tipsam!
              </p>
              <Buttion item="watch" />
            </div>

            <div className="w-52  pl-2 space-y-1 bg-pink-400 h-[26rem]">
              <img className="h-48 w-48 " src="/c-tech (2).PNG" alt="tech" />
              <p className="leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                officiis tempora provident obcaecati,gtt. Commodi, odio!
              </p>
              <Buttion item="watch" />
            </div>

            <div className="w-52 h-[28rem] space-y-1  bg-pink-400">
              <img className="h-52 w-52   " src="/Rectangle 6.png" alt="tech" />
              <p className="leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                officiis tempora provident obcaecati,gtt. Commodi, odio!
              </p>
              <Buttion item="Watch" />
            </div>
          </div>
        </section>

        <div className="  h-screen flex flex-col  justify-around border-4 border-blue-400">
          <div className="flex justify-around items-center">
            {
              quarterDetail.map((item: any) => (
                (<>
                  <div className="flex bg-Anas-400">
                    <div className="w-44 h-44 text-center ">{item.name} {item.detail}</div>
                  </div>
                </>
                )))
            }
          </div>
          <div className=" flex items-center justify-around mt-4  ">
            {
              quarterinfo.map((item) => (
                (<>
                  <div>
                    <div className="sm:flex flex-col bg-Anas-400 w-44 h-44 text-center   "> {item.lable} {item.student}</div>
                  </div>
                </>
                )))
            }
          </div>

        </div>
      </div >
    </>
  );
}






{/* <div className="flex justify-around items-center">
{
  quarterinfo.map((item: any) => (
    (<>
    <div className="w-40 h-40 text-center mt-12 bg-yellow-300">{item.lable}{item.student}</div>
    </>
  )))
}
</div> */}






// let ArrayForAnas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let ReturnValue = "";
// ArrayForAnas.forEach((element, index, array) => {
  //   ReturnValue = element;
// });

// console.log(ReturnValue);

// export default function Home() {
//   return <div>This is array class</div>;
// } bg-Anas-400 onClick={()=>{setvalue (!value)}}