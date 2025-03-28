import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-2xl xl:max-w-4xl mx-auto px-5 md:px-1.5 lg:px-2 xl:px-4 py-5 lg:py-7 xl:py-10 text-black">
      <h1 className="text-[26px] md:text-[34px] lg:text-[42px] xl:text-[56px] font-semibold -tracking-[2.5px] leading-12 lg:leading-14 xl:leading-17 text-center mb-5 lg:mb-7 xl:mb-10">
        Get In Touch
      </h1>

      <form
        className="space-y-4 md:space-y-2.5 lg:space-y-4 xl:space-y-6 bg-white rounded-2xl p-4 md:p-5 lg:p-6 xl:p-8 border border-[#364afe]/20 shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="">
          <label
            htmlFor="name"
            className="block text-sm lg:text-base text-black font-medium mb-1 lg:mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-2.5 xl:px-4 py-3 font-cabin rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="">
          <label
            htmlFor="email"
            className="block text-black text-sm lg:text-base font-medium mb-1 lg:mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-2.5 xl:px-4 py-3 font-cabin rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="">
          <label
            htmlFor="message"
            className="block text-sm lg:text-base text-black font-medium mb-1 lg:mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Share your message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-2.5 xl:px-4 py-3 font-cabin rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-y"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-900 cursor-pointer font-cabin text-white font-medium py-3 md:py-2 xl:py-4 px-7 md:px-5 lg:px-6 xl:px-8 rounded-lg focus:outline-none hover:ring hover:ring-[#105418] hover:ring-offset-2 transition-colors duration-500 hover:bg-[#105418]/90 focus:ring focus:ring-[#105418] focus:ring-offset-2 text-base md:text-sm xl:text-base"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
