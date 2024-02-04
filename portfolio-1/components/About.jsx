function About() {
    return (
        <>
        <div className="about p-10 text-center" id="about">
      <div className="text-pink-500 text-lg">Get to Know</div>
      <div className="text-pink-900 text-5xl font-bold">About Me</div>
      <div className="flex justify-between items-center">

        {/* <img src="535902.jpg" className="h-[400px] w-[400px] rounded-3xl" /> */}
        <div className="border-none p-20 px-32 flex flex-col gap-10">
          <div className="grid grid-cols-2 gap-5">
            <div className="ring-1 rounded-lg p-10 flex flex-col gap-3 justify-center items-center bg-red-100">
              <img src="education.png" className="h-20" />
              <div className="text-3xl font-bold text-pink-900">Qualifications</div>
              <div className="text-xl font-semibold text-pink-600">Full Stack Development</div>
              <div className="text-md font-semibold text-pink-600">Competitive Programmer</div>
            </div>

            <div className="ring-1 rounded-lg p-10 flex flex-col gap-3 justify-center items-center bg-red-100">
              <img src="experience.png" className="h-20" />
              <div className="text-3xl font-bold text-pink-900">3+ Years</div>
              <div className="text-xl font-semibold text-pink-600">Pursuing B.Tech. NSUT</div>
              <div className="text-md font-semibold text-pink-600">Avid Competitive Programmer</div>
            </div>
          </div>
          <div className="text text-start text-2xl text-gray-500">
            I'm a highly competitive person who loves to get better everyday. I enjoy spending time involving myself with Data Structures and Algorithms, Development and Mathematics.
            <br />
            I'm currently pursuing B.Tech. in Netaji Subhas University of Technology and ranked 3 in my department.
            Everyday is a chance for me to do better than yesterday and I utilise it to the best of my ability. God bless.
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default About;