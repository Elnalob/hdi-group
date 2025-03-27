import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-black">
      <h1 className="text-[56px] font-semibold -tracking-[2.5px] leading-17 text-center mb-10">
        Get In Touch
      </h1>

      <form
        className="bg-white rounded-2xl p-8 border border-[#364afe]/20 shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-800 font-medium mb-2"
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
            className="w-full px-4 py-3 font-cabin rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-800 font-medium mb-2"
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
            className="w-full px-4 py-3 font-cabin rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-800 font-medium mb-2"
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
            className="w-full px-4 py-3 font-cabin rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-y"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-900 font-cabin hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
