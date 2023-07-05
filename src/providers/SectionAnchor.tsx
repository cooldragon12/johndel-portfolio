"use client"

import { useInView } from "framer-motion";
import { createContext, useRef } from "react";

type SectionAnchorContextType = {
    banner: React.MutableRefObject<null>;
    description: React.MutableRefObject<null>;
    project: React.MutableRefObject<null>;
    contact: React.MutableRefObject<null>;
    inViewBanner: boolean;
    inViewDescription: boolean;
    inViewProject: boolean;
    inViewContact: boolean;
};

export const SectionAnchorContext = createContext<SectionAnchorContextType>({} as SectionAnchorContextType);


export const SectionAnchorProvider = ({ children }:{children:React.ReactNode}) => {
    const banner = useRef(null);
    const description = useRef(null);
    const project = useRef(null);
    const contact = useRef(null);

    const inViewBanner = useInView(banner, {amount: 0.5})
    const inViewDescription = useInView(description, {amount: 0.5})
    const inViewProject = useInView(project, {amount: 0.5})
    const inViewContact = useInView(contact, {amount: 0.5})

    return (
        <SectionAnchorContext.Provider value={{
            banner,
            description,
            project,
            contact,
            inViewBanner,
            inViewDescription,
            inViewProject,
            inViewContact
        }}>
            {children}
        </SectionAnchorContext.Provider>
    );
}