import React from "react"
import { HamburgerMenuIcon } from "../components/HamburgerMenuIcon"
import logo from "/assets/svg/logo-no-background.svg"

const Header: React.FC = () => (
    <nav className='flex w-screen px-6 py-4 items-center justify-between z-50'>
        <img src={logo} alt='logo' className='max-w-8' />
        <HamburgerMenuIcon />
    </nav>
)

export default Header
