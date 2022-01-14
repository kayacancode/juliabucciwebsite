import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
      };

    return (
        <>
            <head>
            <link rel="stylesheet" href="https://use.typekit.net/lvy3mfo.css"/>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Julia Bucci </title>
            </head>
            <nav className='flex items-center flex-wrap  p-3 font-["Circular Std"]'>
            <div className='block'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4  text-[48px]'>
             
            Julia Bucci   
                
          </a>
          
        </Link>
       
        <h3 class= "p-2 text-[#BBBBBB] text-[24px]">b.arch portfolio</h3>

        {/* <div class= "grid grid-cols-4 gap-4 align-middle w-10 h-10">
         
      <a href= "" >
          
          <svg version="1.1" class = "w-6 h-6 hover:text-[#F6882D] "id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 56.7 56.7" enable-background="new 0 0 56.7 56.7" >

	<path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
	<circle cx="41.5" cy="16.4" r="2.9"/>
	<path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>

</svg>

</a>

<a href= "">
<svg height="100%" class="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2; w-6 h-6 hover: text- " version="1.1" viewBox="0 0 512 512" width="100%"  xmlns="http://www.w3.org/2000/svg"  ><path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"/></svg>
</a>
<a href= "">
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="mail email e-mail letter" id="mail_email_e-mail_letter"><path d="M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z"/><path d="M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z"/></g></svg>
</a>

        </div> */}
        </div>
        <button
          className=' inline-flex p-3   lg:hidden text-[#F6882D] ml-auto hover:text-[#F6882D] outline-none'
          onClick={handleClick}
        >
         
         <svg
              class="w-6 h-6 text-white-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
		<path d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='#'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-20  text-[#231F20]  items-center justify-center text-center font-["acumin-pro"] text-2xl hover:text-[#F6882D]'>
                portfolio
              </a>
            </Link>
            <Link href='#'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2  text-[#231F20]font-bold items-center justify-center text-center text-2xl hover:text-[#F6882D]'>
                about
              </a>
            </Link>
            
            

          </div>

         
        </div>
      </nav>
        
        </>
    )
}

export default Navbar
