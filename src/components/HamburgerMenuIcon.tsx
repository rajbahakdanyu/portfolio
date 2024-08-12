import React from "react"
import { useProvider } from "../providers/MainProvider"

export const HamburgerMenuIcon: React.FC = () => {
    const { isMenuOpen, toggleMenu } = useProvider()

    return (
        <button
            onClick={toggleMenu}
            className='flex flex-col justify-center items-center z-50'>
            <span
                className={`hamburger-icon ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}></span>
            <span
                className={`hamburger-icon my-0.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                }`}></span>
            <span
                className={`hamburger-icon ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}></span>
        </button>
    )
}
