import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import tiger from '../Assests/tiger.gif';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_5mewqci', // Replace with your EmailJS service ID
        'template_sygws5b', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'qtiNx0UgYxXZQAVLX' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <section className="py-12 bg-transparent" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl mt-32 mb-20 font-bold text-center text-white">
          {["C", "O", "N", "T", "A", "C", "T"].map((letter, index) => (
            <span
              key={index}
              className="contact-animation"
              style={{ animationDelay: `${index * 0.25}s` }}
            >
              {letter}
            </span>
          ))}{" "}
          {["M", "E"].map((letter, index) => (
            <span
              key={`me-${index}`}
              className="contact-animation"
              style={{ animationDelay: `${(index + 7) * 0.25}s` }}
            >
              {letter}
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left side: GIF */}
          <div className="flex justify-center mb-8 md:mb-0">
            <img
              src={tiger}
              alt="Contact Animation"
              className="rounded-lg shadow-lg w-[80%] md:w-[90%] lg:w-[60%]"
            />
          </div>

          {/* Right side: Contact form */}
          <form
            className="bg-transparent shadow-md rounded-2xl p-8 w-full max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-left text-gray-100 font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-[#00b3ff] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-left text-gray-100 font-medium mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-[#00b3ff] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-left text-gray-100 font-medium mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-[#00b3ff] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-left text-gray-100 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-transparent border border-[#00b3ff] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>

            {status && (
              <p className={`text-center mt-4 ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
