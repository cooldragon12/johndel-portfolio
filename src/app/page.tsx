"use client"

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
            <nav className='rounded-md p-2 z-10 lg:right-5 lg:backdrop-blur-none backdrop-blur-md right-1/2 lg:translate-x-0 translate-x-1/2 top-3 lg:top-1/4 fixed flex text-center lg:text-right lg:justify-center lg:items-center'>
                <NavBar />
            </nav>
            <section ref={banner} className='h-screen overflow-hidden flex items-center px-5 ' id="banner">
                <div className='left-0 lg:left-24 absolute w-full h-[70%] lg:w-1/4  z-[-4]'>
                    <div className='w-full h-[4rem] text-[5rem] text-neutral-200 font-bold top-1/4 text-center lg:left-4 lg:top-1/2 sticky'>
                        Me
                    </div>
                </div>
                <BannerSection />
            </section>
            <section ref={description} className='h-screen overflow-hidden flex-col gap-6 lg:flex-row flex justify-center items-center lg:px-5 ' id="description">
                <div className='left-0 lg:left-24 absolute w-full h-[70%] lg:w-1/4  z-[-3]' >
                    <div className='w-full h-[4rem] text-[5rem] text-neutral-200 font-bold top-1/4 text-center  lg:left-4 lg:top-1/2 sticky'>
                        About
                    </div>
                </div>
                <Description />
            </section>
            <section ref={project} className='h-screen overflow-hidden flex items-center px-5 ' id="projects">
                <div className='left-0 lg:left-24 absolute w-full h-[70%] lg:w-1/4  z-[-2]'>
                    <div className='w-full h-[4rem] text-[5rem] text-neutral-200 font-bold top-1/4 text-center  lg:left-4 lg:top-1/2 sticky'>
                        Projects
                    </div>
                </div>
                <Projects />
            </section>
            <section ref={contact} className='h-screen overflow-hidden flex items-center px-5 justify-center ' id="contact">
                <div className='left-0 lg:left-24 absolute w-full h-[70%] lg:w-1/4  z-[-1]'>
                    <div className='w-full h-[4rem] text-[5rem] text-neutral-200 font-bold top-1/4 text-center lg:left-4 lg:top-1/2 sticky'>
                        Contact
                    </div>
                </div>
                <div className='flex h-fit w-fit  bg-neutral-100 border border-primary p-7 gap-7 flex-col lg:flex-row'>
                    <Contact />
                </div>
            </section>
        </>

    )
}
