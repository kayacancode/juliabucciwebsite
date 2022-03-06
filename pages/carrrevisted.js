import React from 'react'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Image from 'next/image'
import p1 from '../public/p1.jpg'
import ProjectFooter from '../components/ProjectFooter'

const carrrevisted = () => {
    return (
        <div>
            <Navbar />

                   
<Project name = "Carr Revisted"  year = "Fall 2021" instructors = "Professor name" img1 = "/p1.jpg" width1 = {1000} height1 = {500} />
<Project  img1 = "/p1.jpg" width1 = {1000} height1 = {500}  />
<Project  img1 = "/p2.jpg" width1 = {1000} height1 = {500}  />
<Project  img1 = "/p3.jpg" width1 = {2000} height1 = {500}  />


           <ProjectFooter />
        </div>
    )
}

export default carrrevisted
