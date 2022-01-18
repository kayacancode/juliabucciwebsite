import React from 'react'
import Image from 'next/image'
import j6 from '/public/j6.png'

const Project = (props) => {
  
    return (
        <div>
             <div class="container mx-auto flex flex-col flex-wrap items-center justify-between">
            <div class= "content-center  pb-20 font-['acumin-pro']  ">
                <h1 class = "text-center text-4xl py-10">{props.name}</h1>
                <h1 class = "text-center text-2xl">{props.year}</h1>
                <h1 class = "text-center text-2xl pt-10">{props.instructors}</h1>
                </div>
                <Image  src={props.img1} width={props.width1} height={props.height1}/>
                <div class ="border-b-2 border-[#F6882D]">
                <p class ="pb-10 font-['acumin-pro']" >{props.text1}</p>
                </div>



            </div>
        </div>
    )
}

export default Project
