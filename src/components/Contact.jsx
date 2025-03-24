import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { ClipLoader } from 'react-spinners';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);  
    emailjs.send(
      'service_ny52i58', 
      'template_xki2ks6', 
      formData,
      'IPGm04UKgYejOvTYF' 
    )
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Email Sent!',
        text: 'Your message has been sent successfully!',
        confirmButtonColor: '#4CAF50',  
      });
      setFormData({ name: '', email: '', subject: '', message: '' });  
      setLoading(false);  
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was an error sending your email. Please try again later.',
        confirmButtonColor: '#F44336',  
      });
      setLoading(false); 
    });
  };

  return (
    <section className="min-h-screen px-6 md:px-12 bg-black text-white font-jetbrains flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-12">Contact</h2>
      <p className="text-lg text-center text-gray-300 mb-8">Interested in working together? Let's talk! Feel free to send me an email: muhamadaziz564@gmail.com</p>
      <div className="relative w-full max-w-3xl mx-auto bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="name" className="block text-lg text-white mb-2">Enter your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#333333] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-white mb-2">Enter your email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#333333] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-lg text-white mb-2">Enter subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#333333] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg text-white mb-2">Enter your message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#333333] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-400 text-white text-lg font-semibold rounded-lg hover:bg-green-500 transition-all"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <ClipLoader
                  size={30}
                  color="#ffffff"
                  loading={loading}
                />
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
