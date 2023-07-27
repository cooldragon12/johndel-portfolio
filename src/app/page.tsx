"use client"

import BackgroundPattern from '@/components/Homepage/BackgroundPattern'
import BannerSection from '@/components/Homepage/Banner'
import Contact from '@/components/Homepage/Contact'
import Description from '@/components/Homepage/Description'
import Projects from '@/components/Homepage/Projects'
import NavBar from '@/components/Navigation/NavBar'
import { SectionAnchorContext } from '@/providers/SectionAnchor'
import { useContext } from 'react'




export default function Landingpage() {
    const { banner, description, project, contact } = useContext(SectionAnchorContext)
    return (
        <>
            <img src="/icons/logo.svg" alt="JE" className='absolute top-[20%] left-[45%] lg:top-10 lg:left-10 w-[4rem] h-[4rem] lg:w-[3rem] lg:h-[3rem] mix-blend-exclusion object-cover opacity-90 z-[-5]' />
            <nav className='rounded-md p-2 z-10 lg:right-5 lg:backdrop-blur-none backdrop-blur-md right-1/2 lg:translate-x-0 translate-x-1/2 top-3 lg:top-1/4 fixed flex text-center lg:text-right lg:justify-center lg:items-center'>
                <NavBar />
            </nav>
            <section ref={banner} className='border-b border-primary border-dashed  h-screen overflow-hidden flex items-center justify-center px-5 snap-y  ' id="banner">
                <div className='left-0 lg:left-24 absolute w-full h-[90%] lg:w-1/4  z-[-4]'>
                    <div className='w-full h-[4rem] text-[3rem] lg:text-[5rem] text-neutral-200 font-bold top-1/4 text-center lg:left-4 lg:top-1/2 sticky'>
                        Me
                    </div>
                </div>
                <BackgroundPattern />
                <div className="m-0 select-none w-full lg:w-3/4 h-screen flex  xs:flex-col lg:flex-row  justify-center items-center">
                    <BannerSection />
                </div>
            </section>
            <section ref={description} className=' h-screen overflow-hidden  snap-y' id="description">
                <div className='px-24 flex-col lg:block flex justify-center items-center'>
                    <div className='right-44 absolute w-full h-[70%]   z-[-3]' >
                        <div className='w-full h-[4rem] text-[3rem] lg:text-[5rem] text-neutral-200 font-bold top-1/4 text-right  right-100 lg:top-1/2 sticky'>
                            About
                        </div>
                    </div>
                    <div className='lg:w-3/4 w-screen h-screen flex justify-center items-center flex-wrap'>
                        <Description />
                    </div>
                </div>

            </section>
            <section ref={project} className='h-screen overflow-hidden px-5 snap-y' id="projects">
                <div className='px-24'>
                    <div className='left-0 absolute w-full h-[70%]  z-[-2]'>
                        <div className='w-full h-[4rem] text-[3rem] lg:text-[5rem] text-neutral-200 font-bold top-1/4 text-center  lg:left-4 lg:top-1/2 sticky'>
                            Projects
                        </div>
                    </div>
                    <div className='h-screen '>
                        <Projects />
                    </div>
                </div>
            </section>
            <section ref={contact} className='h-screen overflow-hidden flex items-center px-5 justify-center snap-y' id="contact">
                <div className='left-0 lg:left-24 absolute w-full h-[70%] lg:w-1/4  z-[-1]'>
                    <div className='w-full h-[4rem] text-[3rem] lg:text-[5rem] text-neutral-200 font-bold top-1/4 text-center lg:left-4 lg:top-1/2 sticky'>
                        Contact
                    </div>
                </div>
                <div className='flex h-fit w-fit  bg-neutral-100 border border-dotted border-primary p-7 gap-7 flex-col lg:flex-row'>
                    <Contact />
                </div>
            </section>
        </>

    )
}
