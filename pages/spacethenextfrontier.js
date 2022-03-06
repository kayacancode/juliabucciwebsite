import React from 'react'
import Project from '../components/Project'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import ProjectFooter from '../components/ProjectFooter'

const spacethenextfrontier = () => {
    return (
        <div>
            
            <Navbar />
       
<Project name = "Space the Next Frontier" year = "Fall 2021" instructors = "Professor name" img1 = "/j1.jpg" width1 = {1000} height1 = {500} 
/>
<Project img1 = "/j2.jpg" width1 = {1000} height1 = {500} 
 />
 <Project img1 = "/j3.jpg" width1 = {4032} height1 = {3024} 
 />
 <Project img1 = "/j4.jpg" width1 = {4032} height1 = {3024} 
 />
  <Project img1 = "/j5.png" width1 = {4032} height1 = {3024} 
 />
  <Project img1 = "/j6.png" width1 = {4032} height1 = {3024} 
 />

            <ProjectFooter />
        </div>
    )
}

export default spacethenextfrontier
