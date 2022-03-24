import React from 'react'
import Project from '../components/Project'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import ProjectFooter from '../components/ProjectFooter'

const precedent = () => {
  return (
    <div>
            
    <Navbar />

<Project name = "Precedent: Glass House, Lina Bo Bardi" year = "Spring 2022" instructors = "Professor name" img1 = "/g1.jpg" width1 = {1000} height1 = {500} 
/>
<Project img1 = "/g2.jpg" width1 = {1000} height1 = {500} 
/>
<Project img1 = "/g3.jpg" width1 = {4032} height1 = {3024} 
/>
<Project img1 = "/g4.jpg" width1 = {4032} height1 = {3024} 
/>
<Project img1 = "/g5.jpg" width1 = {4032} height1 = {3024} 
/>
<Project img1 = "/g6.jpg" width1 = {4032} height1 = {3024} 
/>

<Project img1 = "/g7.jpg" width1 = {4032} height1 = {3024} 
/>

<Project img1 = "/g8.jpg" width1 = {4032} height1 = {3024} 
/>

<Project img1 = "/g9.jpg" width1 = {4032} height1 = {3024} 
/>

<Project img1 = "/g10.jpg" width1 = {4032} height1 = {3024} 
/>


    <ProjectFooter />
</div>
  )
}

export default precedent