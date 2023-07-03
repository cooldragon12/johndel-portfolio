
import BannerSection from '@/components/Homepage/Banner'
import Description from '@/components/Homepage/Description'
import Projects from '@/components/Homepage/Projects'
import NavBar from '@/components/Navigation/NavBar'




export default function Landingpage() {
    return (
        <>
            <nav className='lg:right-5 right-0 top-10 lg:top-1/4 fixed flex text-center lg:text-right lg:justify-center lg:items-center'>
                <NavBar />
            </nav>
            <section className='h-screen overflow-hidden flex items-center ' id="banner">
                <div className=' left-24 absolute h-[70%] w-1/4  z-[-4]'><div className='w-[4rem] h-[4rem] text-[4rem] text-slate-100 font-bold  lg:left-4 lg:top-1/2 sticky'>Me</div></div>
                <BannerSection />
            </section>
            <section className='h-screen overflow-hidden  flex items-center' id="description">
                <div className=' left-24 absolute h-[70%] w-1/4  z-[-3]' ><div className='w-[4rem] h-[4rem] text-[4rem] text-slate-100 font-bold  lg:left-4 lg:top-1/2 sticky'>About</div></div>
                <div>
                    <Description />
                </div>
            </section>
            <section className='h-screen overflow-hidden flex items-center' id="projects">
                <div className=' left-24 absolute h-[70%] w-1/4  z-[-2]'><div className='w-[4rem] h-[4rem] text-[4rem] text-slate-100 font-bold  lg:left-4 lg:top-1/2 sticky'>Projects</div></div>

                <Projects/>
            </section>
            <section className='h-screen overflow-hidden flex items-center' id="contact">

                <div className=' left-24 absolute h-[70%] w-1/4  z-[-1]'><div className='w-[4rem] h-[4rem] text-[4rem] text-slate-100 font-bold  lg:left-4 lg:top-1/2 sticky'>Contact</div></div>
            </section>
        </>

    )
}
