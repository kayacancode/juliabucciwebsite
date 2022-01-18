import React from 'react'
import Project from '../components/Project'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import ProjectFooter from '../components/ProjectFooter'

const fields = () => {
    return (
        <div>
            <Navbar />
            <Project name = "Fields" year = "Fall 2021" instructors = " Professor name " img1 = "/bucci12.jpg" width1 = {4032} height1 = {3024} text1 ="This project explores...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
/>
            <ProjectFooter />
        </div>
    )
}

export default fields
