import React, { useState } from "react"

export const HamburgerMenuIcon: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen(!isOpen)

    return (
        <button
            onClick={handleClick}
            className='flex flex-col justify-center items-center z-50'>
            <span
                className={`hamburger-icon ${
                    isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}></span>
            <span
                className={`hamburger-icon my-0.5 ${
                    isOpen ? "opacity-0" : "opacity-100"
                }`}></span>
            <span
                className={`hamburger-icon ${
                    isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}></span>
        </button>
    )
}
