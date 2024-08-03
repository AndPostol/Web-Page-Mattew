// import { useState } from 'react'
import photo from './assets/perfil-02.jpeg'
// Icons
import pdfIcon from './assets/pdfIcon.svg'
import excelIcon from "./assets/excel.svg";
import pythonIcon from "./assets/python.svg";
import sqlIcon from "./assets/sql.svg";
import tableulIcon from "./assets/tableau.svg";
import tableuWhite from "./assets/tableauIcon.svg"
import pdf from "./assets/Profile.pdf";
import linkedInIcon from "./assets/linkedin.svg";

import './App.css'
import CardButton from './components/CardButton'
import ActionButton from "./components/ActionButton";
function App() {

  return (
    <section className="min-w-[95vw] min-h-[100vh] w-full h-full bg-[#080808] flex flex-col items-center justify-around my-auto">
      <div></div>
      <div className='w-full pb-12 md:w-2/3 h-2/4 flex sm:flex-col md:flex-row justify-center  items-center'>
        <div className='text-white md:block flex flex-col items-center'>
          <h1 className='font-["Raleway"] pt-10 text-center md:text-start font-bold text-6xl'>Matthew Tabola</h1>
        <img src={photo} alt="Matt" className='w-2/3 p-4 md:py-6 h-full rounded-full md:hidden '/>
          <h2 className='text-xl w-3/4 font-semibold'>Shift Assistant at Amazon / <br /> Data Analytics Fellow</h2>
          <h3 className='py-10 w-3/4'>
          Hello! I am formerly an <span className='font-bold'>Assistant Manager</span> at Amazon, also enrolled in a <span className='font-bold'> Data Analytics Program</span>. 
          <br />
          <br />
          {"You'll"} find me to be extremely dependable as well as versatile, eager to adapt to any new situation or challenge that arises. I also love amateur radio, and you can often catch me on the air!
          </h3>
          <div className='w-3/4 flex flex-wrap  gap-5 justify-between'>
          <ActionButton icon={tableuWhite} url="https://public.tableau.com/app/profile/matthew.tabola/vizzes" text="Tableau" className="bg-[#3F8E00] border border-[#62BA1B] drop-shadow-lg"/>
          <ActionButton icon={pdfIcon} url={pdf} text="Resume" className="bg-[#3F8E00] border border-[#62BA1B] drop-shadow-lg"/>
          <ActionButton icon={linkedInIcon} url="https://www.linkedin.com/in/matthew-tabola-844141190/" text="LinkedIn" classImg="mb-[9px]" className="bg-[#0e76a8] border grow border-[#0e76a8] drop-shadow-lg justify-center"/>
          </div>
        </div>
        <img src="https://media.licdn.com/dms/image/D4D03AQEF62FmRtnnPw/profile-displayphoto-shrink_800_800/0/1719950910219?e=1727913600&v=beta&t=ozZABO3vDRhoPeGQOLK3kv9laGbL_JVmEpiDxb1LldQ" alt="Matt" className='w-2/5 h-full rounded-full hidden md:block'/>
      </div>
      <div className='w-3/4 mb-10'>
      <h4 className='text-white font-["IBM Plex Mono"] text-lg pb-5'>I Work with</h4>
      <div className='w-full flex flex-wrap gap-5 lg:flex-nowrap'>
        <CardButton icon={excelIcon} text="Excel" altIcon="Exel Icon"  />
        <CardButton icon={pythonIcon} text="Python" altIcon="Exel Icon"  />
        <CardButton icon={sqlIcon} text="SQL" altIcon="Exel Icon"  />
        <CardButton icon={tableulIcon} text="Tableau" altIcon="Exel Icon"  />
      </div>

      </div>
    </section>
  )
}

export default App
