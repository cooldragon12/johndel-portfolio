
import BannerSection from '@/components/Homepage/Banner'
import Description from '@/components/Homepage/Description'
import NavBar from '@/components/Navigation/NavBar'




export default function Landingpage() {
    return (
        <>
            <nav className='lg:right-5 right-1/2 top-0 lg:top-1/4 fixed flex text-center lg:text-right justify-center items-center'>
                <NavBar />
            </nav>
            <section className='h-screen overflow-hidden  ' id="banner">
                <div className=' left-24 absolute h-[140%] w-1/4 bg-white z-[-4]'><div className='w-4 h-4 text-[4rem] text-slate-100 font-bold  lg:left-4 lg:top-1/2 sticky'>Me</div></div>
                <BannerSection />
            </section>
            <section className='h-screen overflow-hidden  ' id="description">

                <div className=' left-24 absolute h-[140%] w-1/2 bg-white z-[-3]' ><div className='w-4 h-4 text-[4rem] text-slate-100 font-bold  lg:left-4 lg:top-1/2 sticky'>About</div></div>
                <Description />
            </section>
            <section className='h-screen overflow-hidden' id="projects">

                {/* <Projects/> */}
                <div className=' left-24 absolute h-[140%] w-1/2 bg-white z-[-2]'><div className='w-4 h-4 text-[4rem] text-slate-100 font-bold  lg:left-4 lg:top-1/2 sticky'>Projects</div></div>
            </section>
            <section className='h-screen overflow-hidden4] ' id="contact">

                {/* <Projects/> */}
                <div className=' left-24 absolute h-[140%] w-1/2 bg-white z-[-1]'><div className='w-4 h-4 text-[4rem] text-slate-100 font-bold  lg:left-4 lg:top-1/2 sticky'>Contact</div></div>
            </section>
        </>

    )
}
