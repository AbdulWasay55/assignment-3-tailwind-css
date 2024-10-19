import React from 'react'
import Image from 'next/image'

const ProjectSection = () => {
   return (
     <div className="justify-center px-4 mb-10" id='project'>
       <p className="font-semibold text-blue-950 text-5xl mt-16 text-center">Projects</p>
       <div className="mt-20 flex flex-col md:flex-row flex-wrap justify-center gap-10">
         <div className="border-2 border-inherit w-full md:w-fit p-5 md:p-10 rounded-xl shadow-2xl">
           <Image
             src="/static.png"
             alt="Resume Project"
             width={300}
             height={300}
           />
           <a href="https://milestone-1-2-v8mv.vercel.app/" target="_blank">
             <p className="font-semibold text-blue-950 mt-7 text-center text-2xl border-blue-950 border-2 p-1 rounded-xl">Static Resume</p>
           </a>
         </div>
        
         <div className="border-2 border-inherit w-full md:w-fit p-5 md:p-10 rounded-xl shadow-2xl">
           <Image
             src="/count.png"
             alt="Count Down Timer"
             width={300}
             height={300}
           />
            <a href="https://1-project-count-down-timer.vercel.app/" target="_blank">
             <p className="font-semibold text-blue-950 mt-7 text-center text-2xl  border-blue-950 border-2 p-1 rounded-xl">Count Down Timer</p>
             </a>
         </div>
        
 
         <div className="border-2 border-inherit w-full md:w-fit p-5 md:p-10 rounded-xl shadow-2xl">
           <Image
             src="/weather.png"
             alt="Weather Widget App"
             width={300}
             height={300}
           />
           <a href="https://2-project-weather-widget.vercel.app/" target="_blank">
             <p className="font-semibold text-blue-950 mt-7 text-center text-2xl  border-blue-950 border-2 p-1 rounded-xl">Weather Widget App</p>
           </a>
         </div>
         <div className="border-2 border-inherit w-full md:w-fit p-5 md:p-10 rounded-xl shadow-2xl">
           <Image
             src="/birthday.png"
             alt="Birthday card"
             width={300}
             height={300}
           />
           <a href="https://birthday-wish-tawny.vercel.app/" target="_blank">
             <p className="font-semibold text-blue-950 mt-7 text-center text-2xl  border-blue-950 border-2 p-1 rounded-xl">Birthday Wish Card</p>
           </a>
         </div>
       </div>
     </div>
   );
 };
 
 export default ProjectSection;
 