import React from "react";

const Contact = () => {
  const string3 =
    "//Submit the form below, or send me an email @ hassanshan675@gmail.com";

  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      {/* for getpost.io */}
      <form
        method="POST"
        action="https://getform.io/f/5e6ec90b-c8bc-4161-8693-62f8f064a4f6"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 mt-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">{string3}</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="mb-4 p-2 bg-[#ccd6f6]"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          name="Subject"
          className="my-4 p-2 bg-[#ccd6f6]"
          required
        />
        <textarea
          rows="7"
          placeholder="Message"
          name="message"
          className="my-4 p-2  bg-[#ccd6f6]"
          required
        ></textarea>
        <button
          className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center
                         hover:bg-pink-600 hover:border-pink-600"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
