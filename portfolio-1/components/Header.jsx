function Header() {
    return (
        <>
        <header className="grid grid-cols-2">
        <div className="border-none p-12 flex justify-center items-center"> 
        {/* padding (p-10) 2.5 rem 40 px */}
          <img src="/first.png" className="h-[500px]" />
        </div>
        <div className="border-none p-12 flex justify-center items-center flex-col gap-3"> 

          <div className="text-3xl font-bold text-pink-700">Hello I'm </div>
          <div className="text-5xl font-bold text-pink-900">Saksham Negi</div>
          <div className="text-3xl font-bold text-pink-700">C++ and Full Stack Developer</div>
          <div className="flex gap-3">
            <a href="https://drive.google.com/file/d/16W9ccmnjN9eU2awO0c4yJYo92rBHptPm/view?usp=sharing" target="_blank">
            <button className="ring-1 p-3 rounded-full px-6 hover:bg-pink-700 hover:text-white transition">Download CV</button>
            </a>
            <button className="bg-pink-700 text-white p-3 rounded-full px-6  hover:bg-pink-900 transition">Contact Info</button>
          </div>

          <div className=" flex gap-2">
            <a href="https://www.linkedin.com/in/saksham-negi-2a019622a" target="_blank">
              <img src="public\linkedin.png" className="h-10" />
            </a>
            <a href="https://github.com/snmath-pi" target="_blank"> 
            <img src="public\github.png" className="h-10" />
            </a>
            
          </div>
        </div>
      </header>
        </>
    )
}

export default Header;