 'use client'
 import Image from "next/image"
 const ExploreBtn = () => {
   return (
     <button type="button" id="explore-btn" className="mt-7 mx-auto text-white" onClick={()=> console.log("clicked")}>
       <a href="#events">
        Explore events
       <Image src="/icons/arrow-down.svg" alt="arrow-down" width={23} height={23}/>
       </a>
     </button>
   )
 }
 
 export default ExploreBtn