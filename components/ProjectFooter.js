import React from 'react'
import Link from 'next/link';
const ProjectFooter = () => {
    return (
        <div>
                         <footer class="flex flex-wrap items-center justify-between p-3 m-auto">
        <div class="container mx-auto flex flex-col flex-wrap items-center justify-between">
          
            <div class="flex mx-auto text-[#F6882D] text-center">
                <Link href = "/">
                <a class = "p-5 hover:text-[#BBBBBB]">All </a>
                        
                        </Link>
                        <Link href = "/carrrevisted">
                <a class = "p-5 hover:text-[#BBBBBB]">carr revisited </a>
                        
                        </Link>

                        <Link href = "/spacethenextfrontier">
                <a class = "p-5 hover:text-[#BBBBBB]">space the next Frontier</a>
                        
                        </Link>
                        
                        <Link href = "/shelter">
                <a class = "p-5 hover:text-[#BBBBBB]">shelter</a>
                        
                        </Link>
                        <Link href = "/fields">
                <a class = "p-5 hover:text-[#BBBBBB]">fields</a>
                        
                        </Link>
                        <Link href = "/precedent">
                <a class = "p-5 hover:text-[#BBBBBB]">Precedent: Glass House, Lina Bo Bardi</a>
                        
                        </Link>
            </div>
            
        </div>
    </footer>
        </div>
    )
}

export default ProjectFooter
