"use client"

import { useRef } from "react"
import Introduction from "./banner/Introduction"

const BannerSection = () => {
    const ref = useRef(null);

    return (
        <>
            <div className="m-0 select-none w-full lg:w-3/4 h-screen flex  xs:flex-col lg:flex-row  justify-center items-center">
                <Introduction/>
            </div>
        </>
    )
}
export default BannerSection;