import React, { useState } from 'react';
import {
    ChevronDown,
    ChevronUp
} from "lucide-react";
interface SidebarGroupProps {
    icon: React.ReactElement; // Icon as a React component
    children: React.ReactNode; // Grouped icons or content to show/hide
    text: string // Text to be shown besides icon
    nested?: boolean // nested flag
}

function SidebarGroup({ icon, children, text, nested = false }: SidebarGroupProps) {
    const [isOpen, setIsOpen] = useState(false); // State to manage visibility

    const toggleGroup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <a onClick={toggleGroup} style={{ cursor: 'pointer' }} className={`${isOpen ? 'bg-accent rounded-t-md' : 'hover:rounded-md'} ${nested ? 'pl-4' : 'px-4'} 
                justify-between whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none 
                disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9  py-2 flex items-center gap-3`}>

                <span className='flex gap-[0.75rem]'>
                    {React.cloneElement(icon, { onClick: toggleGroup })}
                    {text}
                </span>

                {!isOpen ? (<ChevronDown></ChevronDown>) : (<ChevronUp></ChevronUp>)}
            </a>
            <div className={`${isOpen ? 'block bg-accent' : 'hidden'} ${nested ? 'pl-4' : 'px-4'} bg-black pb-2 rounded-b-md`} style={{ marginTop: 0 }}>
                {
                    isOpen &&
                    <div className='flex flex-col'>
                        {children}
                    </div>
                }
            </div>
        </>
    );
}

export default SidebarGroup;