"use client"

import { createContext, useRef } from "react";

type SectionAnchorContextType = {
    banner: React.MutableRefObject<null>;
    description: React.MutableRefObject<null>;
    project: React.MutableRefObject<null>;
    contact: React.MutableRefObject<null>;
};

export const SectionAnchorContext = createContext<SectionAnchorContextType>({} as SectionAnchorContextType);


export const SectionAnchorProvider = ({ children }:{children:React.ReactNode}) => {
    const banner = useRef(null);
    const description = useRef(null);
    const project = useRef(null);
    const contact = useRef(null);
    return (
        <SectionAnchorContext.Provider value={{
            banner,
            description,
            project,
            contact,
        }}>
            {children}
        </SectionAnchorContext.Provider>
    );
}