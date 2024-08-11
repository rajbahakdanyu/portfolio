import React from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"

const Landing: React.FC = () => (
    <div className='min-h-screen dark:bg-slate-800 text-white p-2 no-scrollbar overflow-y-auto'>
        <Header />

        <HeroSection />

        <div>
            <h2>About Me</h2>
        </div>

        <div>
            <h2>Projects</h2>
        </div>

        <footer>
            <h2>Footer</h2>
        </footer>
    </div>
)

export default Landing
