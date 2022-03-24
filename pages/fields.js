import React from 'react'
import Project from '../components/Project'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import ProjectFooter from '../components/ProjectFooter'

const fields = () => {
    return (
        <div>
            <Navbar />
            <Project name = "Fields" year = "Fall 2021" instructors = " Professor name " img1 = "/bucci12.jpg" width1 = {4032} height1 = {3024} 
/>
            <ProjectFooter />
        </div>
    )
}

export default fields
