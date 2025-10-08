import React, { useState } from 'react';
import { Github, Mail, Phone, Instagram, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace with your Formspree endpoint
    const endpoint = "https://formspree.io/f/xblzawoq";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.from_name,
          email: formData.from_email,
          message: formData.message
        })
      });
      if (response.ok) {
        alert("Message sent successfully");
        setFormData({ from_name: '', from_email: '', message: '' });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Error sending message");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-black">
          Contacts
        </h1>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
          <div className="border-t-4 border-t-purple-500">
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
              <h2 className="text-xl font-semibold text-purple-700">Get in Touch</h2>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 min-h-[120px]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/AlsonAfrica?tab=repositories" className="text-gray-600 hover:text-purple-600 transform hover:scale-110 transition-all duration-300">
            <Github className="h-8 w-8" />
          </a>
          <a href="https://wa.me/27823230382" className="text-gray-600 hover:text-green-600 transform hover:scale-110 transition-all duration-300">
            <MessageCircle className="h-8 w-8" />
          </a>
          <a href="mailto:nhlakaniphoradebe337@gmail.com" className="text-gray-600 hover:text-red-600 transform hover:scale-110 transition-all duration-300">
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;