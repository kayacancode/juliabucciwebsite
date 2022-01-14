import React from 'react'
import Image from 'next/image'
import {useState, useEffect} from 'react';
import Link from 'next/link';

const Gridofphotos = () => {
   
    return (
        <div>
            {/* container grid grid-cols-3 gap-2 mx-auto  */}
            <div class = "flex flex-wrap items-center justify-between p-3 m-auto">
            <div class="container mx-auto flex flex-col flex-wrap items-center justify-between">
            <div class=" ">
                <Link href = "/carrrevisted">
        
            <div class="w-full rounded object-contain drop-shadow-md ">
                <div class="w-64 h-64 relative ">
                    
                
       <a>
           <div class = "absolute inset-0 bg-cover bg-center z-0 ">
           <Image src= "/p1.jpg" 
            width={306} 
            height={296} 
            class = "object-contain  "
           
        />
        <p class = "opacity-0 hover:opacity-100 bg-white duration-300 cursor-pointer absolute inset-0 z-10 flex justify-center text-center items-center text-4xl text-[#F6882D]  ">Carr revisted</p>
        </div>
        </a>
       
        </div>
    </div>
    </Link>
          </div>

          <div class="px-20 ">
                <Link href = "/carrrevisted">
        
            <div class="w-full rounded object-contain drop-shadow-md ">
                <div class="w-64 h-64 relative ">
                    
                
       <a>
           <div class = "absolute inset-0 bg-cover bg-center z-0 ">
           <Image src= "/j1.jpg" 
            width={306} 
            height={296} 
            class = "object-contain  "
           
        />
        <p class = "opacity-0 hover:opacity-100 bg-white duration-300 cursor-pointer absolute inset-0 z-10 flex justify-center text-center items-center text-4xl text-[#F6882D]  ">Space: the next frontier</p>
        </div>
        </a>
       
        </div>
    </div>
    </Link>
          </div>
          <div class="px-20 ">
                <Link href = "/carrrevisted">
        
            <div class="w-full rounded object-contain drop-shadow-md ">
                <div class="w-64 h-64 relative ">
                    
                
       <a>
           <div class = "absolute inset-0 bg-cover bg-center z-0 ">
           <Image src= "/k1.jpeg" 
            width={306} 
            height={296} 
            class = "object-contain  "
           
        />
        <p class = "opacity-0 hover:opacity-100 bg-white duration-300 cursor-pointer absolute inset-0 z-10 flex justify-center text-center items-center text-4xl text-[#F6882D]  ">Shelter</p>
        </div>
        </a>
       
        </div>
    </div>
    </Link>
          </div>
          <div class="px-20 ">
                <Link href = "/carrrevisted">
        
            <div class="w-full rounded object-contain drop-shadow-md ">
                <div class="w-64 h-64 relative ">
                    
                
       <a>
           <div class = "absolute inset-0 bg-cover bg-center z-0 ">
           <Image src= "/bucci12.jpg" 
            width={306} 
            height={296} 
            class = "object-contain  "
           
        />
        <p class = "opacity-0 hover:opacity-100 bg-white duration-300 cursor-pointer absolute inset-0 z-10 flex justify-center text-center items-center text-4xl text-[#F6882D]  ">fields</p>
        </div>
        </a>
       
        </div>
    </div>
    </Link>
          </div>
          </div>
        </div>
        </div>
    )
}

export default Gridofphotos
