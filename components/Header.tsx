import React from "react"
import Link from "next/link"

const Header = () => (
    <header>
        <nav className='container mx-auto px-6 py-4'>
            <ul className='flex space-x-6 justify-end'>
                <li>
                    <Link
                        href='#about'
                        className='text-gray-300 hover:text-white transition-colors duration-200'>
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href='#projects'
                        className='text-gray-300 hover:text-white transition-colors duration-200'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href='#contact'
                        className='text-gray-300 hover:text-white transition-colors duration-200'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header
