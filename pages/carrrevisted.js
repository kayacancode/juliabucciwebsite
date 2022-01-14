import React from 'react'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Image from 'next/image'
import p1 from '../public/p1.jpg'

const carrrevisted = () => {
    return (
        <div>
            <Navbar />
            <Project 
            name = "Carr Revisted" 
            year="Fall 2021" 
            instructors = "Professior name" 
            img1 ="/p1.jpg"
            width1={700}
            height1={500}
            img2 ="/p2.jpg"
            width2={700}
            height2={500}
            />
           
        </div>
    )
}

export default carrrevisted
