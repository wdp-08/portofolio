import hero from "../img/hero.png"
function Banner(){
    const nama = "Triyono Rifan"
    return (
        <section id="home" className="pt-32">
            <div className="container">
                <div className="flex flex-wrap">

                    <div className="w-full self-start px-5 md:w-1/2 lg:w-1/2 lg:mb-0 mb-10">
                        <div className="relative mx-auto mt-10 lg:left-0">
                            <img src={hero} width="350" className="max-w-full rounded-full mx-auto" alt="My Hero" />
                            <span className="absolute -bottom-16 -z-10 left-1/2 -translate-x-1/2 blur mx-auto">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="500">
                                    <path fill="#FFE194" d="M40,-3.7C40,25,20,49.9,-4.2,49.9C-28.5,49.9,-56.9,25,-56.9,-3.7C-56.9,-32.4,-28.5,-64.9,-4.2,-64.9C20,-64.9,40,-32.4,40,-3.7Z" transform="translate(100 100) scale(1.1)" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="w-full self-center px-5 md:w-1/2 lg:w-1/2 mb-5">
                        <h1 className="text-xl font-semibold text-primary lg:text-2xl">Hello There 🤩 <span className="block font-bold text-dark text-4xl pt-2 lg:text-5xl mb-2 font-gothamBlack">I'm {nama}</span></h1>
                        <h2 className="font-medium text-slate-600 text-lg mb-5 md:text-lg lg:text-2xl">Undergraduate Informatika UPN Veteran Jawa Timur</h2>
                        <p className="font-medium text-slate-400 leading-relaxed mb-9 lg:text-lg">Tidur lanjutkan mimpi, atau Bangun untuk wujudkan mimpi!</p>
                        <a href="#/" className="font-semibold text-base text-white bg-primary px-5 py-2 hover:bg-opacity-90 shadow-xl transition duration-100 ease-in-out focus:border-none rounded-full">Contact Me</a>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Banner;