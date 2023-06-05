import React, { useState } from "react";
// import logoNavbar from "../img/logonavbar.png"
function Navbar(){

    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
      };

    React.useEffect(() => {
        // navbar fixed
        window.addEventListener('scroll', function(){
            const header = document.querySelector('header');
            const fixedNav = header.offsetTop
            if(window.pageYOffset > fixedNav){
                header.classList.add('navbar-fixed');
            }else{
                header.classList.remove('navbar-fixed');
            }
        })
    }, [])

    return (
        <header className="bg-transparent absolute w-full top-0 left-0 flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative py-2">
                    <div className="px-4">
                        <a href="/" className="block">
                            {/* <img src={logoNavbar} width="80" className="lg:w-[130px]" alt="" /> */}
                            <p className="lg:w-[150px] font-gothamBlack text-xl text-primary">Triyono Rifan</p>
                        </a>
                    </div>
                    <div className="flex items-center px-4 py-6">
                        <button id="humberger" name="humberger" type="button" className={`block absolute right-4 lg:hidden ${isActive ? "humberger-active": ""}`} onClick={handleClick}>
                            <span className="humbergerline-1 transition duration-300 ease-in-out origin-top-left "></span>
                            <span className="humbergerline-2 transition duration-300 ease-in-out"></span>
                            <span className="humbergerline-1 transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>
                    </div>

                    <nav className={`font-gotham font-normal navbar-menu absolute top-full mt-1 rounded w-full lg:block lg:static lg:text-dark  ${isActive ? "bg-primary": "hidden"}`}>
                        <ul className="block lg:flex lg:text-dark">
                            <li className="m-2 mx-2 group transition duration-300 ease-in-out lg:ml-auto">
                                <a href="/" className=" lg:text-dark  text-white block p-1 px-2 group-hover:bg-white rounded group-hover:text-primary">Home</a>
                            </li>
                            <li className="m-2 mx-2 group transition duration-300 ease-in-out">
                                <a href="#/" className=" lg:text-dark text-white block p-1 px-2 group-hover:bg-white rounded group-hover:text-primary">Portofolio</a>
                            </li>
                            <li className="m-2 mx-2 group transition duration-300 ease-in-out">
                                <a href="#/" className=" lg:text-dark text-white block p-1 px-2 group-hover:bg-white rounded group-hover:text-primary">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar;