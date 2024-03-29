import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://divakar.tk/static/media/self.a9ec1e6c0212f555f9b8.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
Hi, This is TheWakar. I am hosted this Kamals shopping template for this Cart page. I did more and more web pages but its likes me so good.Thanks to Mr. Kamal. Gearing up for web design adventures!  Join my journey as I navigate the exciting world of code, pixels, and user experiences. Watch me learn, explore, and build from scratch, from mastering the basics to tackling design challenges. Get ready for insights, discoveries, and maybe even a few mishaps along the way – all in the pursuit of crafting beautiful and functional websites! It's a good chance to show my skills and i awiting for my page be huge success. As learner its too hard to make this page but finally i did. And some are other pages and more about me in www.divakar.tk</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">TheWakar</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://thewakar.github.io/shop/img/beauty.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">
A UI developer is the magician behind the curtain, breathing life into the beautiful designs you see on your screen. They're a blend of artist and engineer, translating creative concepts into interactive interfaces that are both visually stunning and intuitive to use. They code the magic tricks that make buttons dance, menus unfurl, and information flow seamlessly. Their focus is on the front-end, wielding languages like HTML, CSS, and JavaScript to bring static mockups to life. But they're not just code-slingers; they understand the user's journey, ensuring every click and scroll feels effortless. In essence, UI developers are the bridge between design and functionality, the invisible heroes shaping the digital worlds we navigate every day.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">ReactJS, the rising star of web development, isn't just a tool - it's a revolution. Imagine building UI like Lego, snapping together reusable components, each a self-contained world brimming with logic and flair. React lets you focus on small, well-defined pieces, then effortlessly assemble them into dynamic, interactive interfaces. It embraces change, updating only what needs refreshing, keeping your app nimble and performant. Declarative coding makes your intentions clear, leading to predictable, debuggable code. Its vibrant community constantly innovates, pouring out libraries and frameworks that empower you to tackle any UI challenge.ReactJS isn't just a library; it's a paradigm shift, transforming web development from rigid frameworks to playful creation, empowering you to sculpt the digital experiences of tomorrow.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
