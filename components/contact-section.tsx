"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-md">
              Interested in working with us? We'd love to hear from you. Fill
              out the form or contact us directly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin size={24} className="mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Offices</h3>
                  <p className="text-gray-600">Paris • New York • Shanghai</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail size={24} className="mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-didot">
                    Email Us
                  </h3>
                  <p className="text-gray-600">contact@OLIVER CRAFT.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone size={24} className="mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
