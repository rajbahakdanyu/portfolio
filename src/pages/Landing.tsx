import { HamburgerMenuIcon } from "../components/HamburgerMenuIcon"
import logo from "/assets/svg/logo-no-background.svg"

const Landing: React.FC = () => (
    <div className='min-h-screen dark:bg-slate-800 text-white p-2 no-scrollbar overflow-y-auto'>
        <nav className='flex w-screen px-6 py-4 items-center justify-between'>
            <img src={logo} alt='logo' className='max-w-8' />
            <HamburgerMenuIcon />
        </nav>

        <section className='flex w-screen items-center justify-center text-center'>
            <h1 className='font-semibold text-2xl'>Welcome to my portfolio</h1>
            <h2 className='font-semibold text-xl'>Have a look around</h2>
        </section>

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
