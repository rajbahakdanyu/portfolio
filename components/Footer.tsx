import React from "react"

const Footer = () => (
    <footer className='bg-gray-800 text-gray-400 py-6'>
        <div className='container mx-auto px-6 text-center'>
            <p>
                &copy; {new Date().getFullYear()} Danyu Rajbahak. All rights
                reserved.
            </p>
        </div>
    </footer>
)

export default Footer
