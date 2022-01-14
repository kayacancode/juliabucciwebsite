import React from 'react'
import Link from 'next/link';
const Footer = () => {
    return (
        <div>
               <footer class="flex flex-wrap items-center justify-between p-3 m-auto">
        <div class="container mx-auto flex flex-col flex-wrap items-center justify-between">
          
            <div class="block mx-auto text-[#F6882D] text-center">
                <Link href = "/">
                <a >back to top </a>
                        
                        </Link>
                    
                    <p>© 2022 Julia Bucci</p>
            </div>
            
        </div>
    </footer>
        </div>
    )
}

export default Footer
