import Footer from "@/components/Footer"
import Header from "@/components/Header"

const Home = () => (
    <div className='font-[family-name:var(--font-alice)] min-h-screen flex flex-col bg-gray-900 text-gray-100'>
        <Header />

        <main className='flex-grow container mx-auto px-6 py-12'>
            <section id='about' className='mb-20'>
                <h1 className='text-5xl font-bold mb-6 text-purple-400'>
                    Your Name
                </h1>
                <p className='text-xl text-gray-300 max-w-2xl'>
                    A brief introduction about yourself and your expertise. Make
                    it engaging and highlight your key skills.
                </p>
            </section>

            <section id='projects' className='mb-20'>
                <h2 className='text-3xl font-semibold mb-8 text-purple-400'>
                    Projects
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                        <h3 className='text-xl font-semibold mb-3 text-purple-300'>
                            Project 1
                        </h3>
                        <p className='text-gray-400'>
                            Description of your first project. Highlight key
                            features and technologies used.
                        </p>
                    </div>
                </div>
            </section>

            <section id='contact' className='mb-20'>
                <h2 className='text-3xl font-semibold mb-6 text-purple-400'>
                    Get in Touch
                </h2>
                <p className='text-xl text-gray-300'>
                    Feel free to reach out at:{" "}
                    <a
                        href='mailto:your.email@example.com'
                        className='text-purple-400 hover:underline'>
                        your.email@example.com
                    </a>
                </p>
            </section>
        </main>

        <Footer />
    </div>
)

export default Home
