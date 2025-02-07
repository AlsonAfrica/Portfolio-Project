import React from 'react';
import { Github, Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';



const ContactPage = () => {
  
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [formData, setFormData] = useState({
    from_name:"",
    from_email:"",
    message:""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true); 

    emailjs
      .sendForm('service_i0qam8i', 'template_da2hh6j', form.current, {
        publicKey: '5rVThYqVMEGOGeeC_',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          alert('Message sent successfully');
          setFormData({ from_name: '', from_email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ) 
      .finally(()=>{
        setIsSending(false);
      });
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center text-black">
          Contacts
        </h1>
        
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
          <div className="border-t-4 border-t-purple-500">
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
              <h2 className="text-xl font-semibold text-purple-700">Get in Touch</h2>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} ref={form} className="space-y-4">
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
                    formData={formData.message}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 min-h-[120px]"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
          <div className="border-t-4 border-t-indigo-500 p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
                <Mail className="h-5 w-5" />
                <span>nhlakaniphoradebe337@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
                <Phone className="h-5 w-5" />
                <span>082 323 0382</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-600 hover:text-purple-600 transform hover:scale-110 transition-all duration-300">
            <Github className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600 transform hover:scale-110 transition-all duration-300">
            <MessageCircle className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 transform hover:scale-110 transition-all duration-300">
            <Mail className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-600 transform hover:scale-110 transition-all duration-300">
            <Instagram className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;