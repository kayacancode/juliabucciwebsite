import React from 'react'
import Project from '../components/Project'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import ProjectFooter from '../components/ProjectFooter'

const shelter = () => {
    return (
        <div>
            <Navbar />
            <Project name = "Shelter" year = "Fall 2021" instructors = " Professor name " img1 = "/k1.jpeg" width1 = {7200} height1 = {5400} 
/>
<Project img1 = "/k2.jpeg" width1 = {7200} height1 = {5400} 
 />

            <ProjectFooter />
        </div>
    )
}

export default shelter
