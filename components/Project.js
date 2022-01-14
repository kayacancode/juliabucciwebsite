import React from 'react'
import Image from 'next/image'
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
                <div class ="divide-y divide-black">
                <p>This project explores...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div>
                <Image  src={props.img2} width={props.width2} height={props.height2}/>
                </div>
                
                </div>
        </div>
    )
}

export default Project
