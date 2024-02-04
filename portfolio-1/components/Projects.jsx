function Projects() {
    return (
        <>
        <div className="p-32 text-center">
        <div className="text-pink-500 text-lg">Browse my recent</div>
        <div className="text-pink-900 text-5xl font-bold">Projects</div>
        <div className="grid grid-cols-3 space-x-5 py-5">
          <div className="ring-1 rounded-3xl p-10 flex gap-10 flex-col bg-red-100">
            <img src="flappyBirdie.png" className="rounded-3xl" />
            <div className="text-pink-900 text-4xl font-bold">Project One</div>
            <div className="grid px-2 grid-cols-2">
              <a href="https://github.com/snmath-pi/Flappy-Gojo.github.io" target="_blank">
              <button className="ring-1 rounded-full p-5 text-xl hover:text-white
              hover: bg-pink-200 transition">Github Files</button>
              </a>
              <a href="https://snmath-pi.github.io/Flappy-Gojo.github.io/" target="_blank">
              <button className="ring-1 rounded-full p-5 text-xl hover:text-white
              hover: bg-pink-200 transition">Live Demo</button>
              </a>
            </div>
            
          </div>
          <div className="ring-1 rounded-3xl p-10 flex gap-10 flex-col bg-yellow-100">
            <img src="747.jpeg" className="rounded-3xl h10" />
            <div className="text-pink-900 text-4xl font-bold">Project Two</div>
            <div className="grid px-2 grid-cols-2">
              <a href="https://github.com/snmath-pi/3Dportfoilio1.github.io" target="_blank">
              <button className="ring-1 rounded-full p-5 text-xl hover:text-white
              hover: bg-pink-200 transition">Github Files</button>
              </a>
              <a href="https://mathpiportfolio3d.netlify.app/" target="_blank">
              <button className="ring-1 rounded-full p-5 text-xl hover:text-white
              hover: bg-pink-200 transition">Live Demo</button>
              </a>
            </div>
            
          </div>
          <div className="ring-1 rounded-3xl p-10 flex gap-10 flex-col bg-red-100">
            <img src="doodle.jpg" className="rounded-3xl" />
            <div className="text-pink-900 text-4xl font-bold">Project Three</div>
            <div className="grid px-2 grid-cols-2">
              <a href="https://github.com/snmath-pi/www.ShinchanJump.github.io" target="_blank">
              <button className="ring-1 rounded-full p-5 text-xl hover:text-white
              hover: bg-pink-200 transition">Github Files</button>
              </a>
              <a href="https://snmath-pi.github.io/www.ShinchanJump.github.io/" target="_blank">
              <button className="ring-1 rounded-full p-5 text-xl hover:text-white
              hover: bg-pink-200 transition">Live Demo</button>
              </a>
            </div>
            
          </div>

        </div>
      </div>
        </>
    )
}

export default Projects;