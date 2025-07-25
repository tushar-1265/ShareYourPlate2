const Contact = () => {
  return (
    <div
      className={`wrapper py-10 transition-all relative duration-300 px-2 mx-40 mt-10 mb-10 lg:mb-32 lg:-mt-7 `}
    >
      <div
        className={`contact relative transition-all duration-1000  backdrop-blur-3xl z-10 lg:top-24 top-10 lg:flex border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,1)] shadow-2xl shadow-black rounded-2xl m-1 lg:p-8 lg:mx-32`}
      >
        <div className="form p-6 lg:p-0 lg:w-full">
          <h1 className="text-2xl font-bold font-jost">Contact Us</h1>
          <form
            className="flex pt-8 pb-5 space-y-6 flex-col"
            action="https://formsubmit.co/agarwaltushar255@gmail.com"
            method="post"
          >
            <input
              required
              className={`outline-none transition-all duration-300 border-slate-400 drop-shadow-sm border-2 rounded-xl p-4`}
              type="text"
              placeholder="Enter Full Name*"
              name="clientname"
              id="clientname"
            />
            <input
              required
              className={`outline-none transition-all duration-300 border-slate-400 drop-shadow-sm border-2 rounded-xl p-4`}
              type="email"
              placeholder="Enter Email Address"
              name="email"
              id="email"
            />
            <textarea
              required
              className={` transition-all duration-300 outline-none border-slate-400 drop-shadow-sm border-2 rounded-xl p-4`}
              name="message"
              id=""
              placeholder="Tell Us About Your Suggestions or Enquiry"
              cols="30"
              rows="4"
            ></textarea>
            <input
              type="submit"
              value="Contact Us"
              className={`bg-[#E74A9F] text-white p-3 w-fit cursor-pointer rounded-sm transition-all duration-300 hover:-translate-y-1`}
            />
            <input type="hidden" name="_next" value="http://localhost:3000/" />
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
