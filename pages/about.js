import React, {useState } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import ProjectFooter from '../components/ProjectFooter'

const about = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <Navbar />
            <div>
                
                <div class=" container mx-auto lg:flex flex-wrap items-center pl-10">
                        <div class = "md:shrink-0">
                    <div class = "flex items-center">
                    <Image class = "object-scale-down"src = "/biopic.jpg" width = {700} height = {960} />
                    <h1 class = "text-6xl p-5 whitespace-nowrap">Julia Bucci</h1>
                    </div>
                    </div>
                    <div class = "block">
                    <p class = " text-left pt-10 ">Hi! I’m a 1st  year Bachelors of Architecture student at Illinois  Insitute of Technology set to graduate in May 2026.</p>
                    
                    <h3 class = "pt-5 pb-5">CV available upon request </h3>
                    <button  type= "button" class="border-2 border-[#F6882D]  text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-[#F6882D]  transition duration-300" onClick= {() =>setShowModal(true)}>Contact</button>
                    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
                  <h3 className="text-3xl ">
                    Hello! 👋 Let's work together. 
                  </h3>
                  <button
                    className="p-1 ml-auto text-[#F6882D] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                      ×
                
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <div class="p-6 border border-[#F6882D] sm:rounded-md">
                  <form >
                      <label class = "block mb-6"> 
                        <span class ="text-gray-700">Your name *</span>
                        <input
                            type="text"
                            name="name"
                            class="
                                block
                                w-full
                                mt-1
                                border
                                border-[#F6882D]
            
                            "
                            placeholder="Julia Bucci"
                                />
                      </label>
                      <label class="block mb-6">
        <span class="text-gray-700">Email address *</span>
        <input
          name="email"
          type="email"
          class="
          block
                                w-full
                                mt-1
                                border
                                border-[#F6882D]
            
          "
          placeholder="jmbucci02@gmail.com"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Project Description *</span>
        <textarea
          name="message"
          class="
          block
          w-full
          mt-1
          border
          border-[#F6882D]

          "
          rows="3"
          placeholder="Project Details.."
        ></textarea>
      </label>
     
      <div></div> 
                  </form>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 ">
               
                  <button
                    className="bg-black text-white active:bg-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
                    </div>

                    </div>
                    </div>
                
        </div>
    )
}

export default about
