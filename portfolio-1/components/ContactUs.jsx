function ContactUs() {
    return (
        <>
        <div className="about p-32 pb-0 text-center">
      <div className="text-pink-500 text-lg">To</div>
      <div className="text-pink-900 text-5xl font-bold">
        Contact
      </div>
      <div className="flex justify-center items-center p-10">
        <div className="ring-1 rounded-3xl p-10 flex bg-red-100 gap-5">
          <div className="flex">
            <img src="email.png" className="h-10" />
            <div className="text-3xl text-semi-bold">sakshamnegi40069@gmail.com</div>
          </div>
          <div className="flex">
            <a href="https://www.linkedin.com/in/saksham-negi-2a019622a/">
            <img src="email.png" className="h-10" />
            </a>
            <div className="text-3xl text-semi-bold">Linkedin.com</div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-xl text-gray-600 text-center p-10 pb-32">
      Copyright @ 2024 Saksham Negi. All rights reserved!
    </div>
        </>
    )
}

export default ContactUs;