

"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Container } from "@/layout/Container";

export default function ContactPage() {
  type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Add your form submission logic here
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-amber-600" />,
      title: "Email Us",
      description: "Have questions? We're here to help",
      details: "info@mamahogbepageant.com",
      href: "mailto:info@mamahogbepageant.com"
    },
    {
      icon: <Phone className="w-8 h-8 text-amber-600" />,
      title: "Call Us",
      description: "Speak directly with our team",
      details: "024 511 7519",
      href: "tel:+233245117519"
    },
    {
      icon: <MapPin className="w-8 h-8 text-amber-600" />,
      title: "Visit Us",
      description: "Our office location",
      details: "Keta-Vui, Togbi Axorlu's Residence",
      href: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-600" />,
      title: "Working Hours",
      description: "When we're available",
      details: "Mon-Fri: 9AM - 5PM\nSat: 10AM - 2PM",
      href: "#"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
      <Container>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20 text-center"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#7c3700] mb-4">
              Get in <span className="text-amber-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;d love to hear from you! Contact the Mama Hogbe team for inquiries, partnerships, or media requests.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <motion.section 
        className="py-13"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-amber-50 rounded-full mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  {method.href === "#" ? (
                    <div className="text-gray-700 whitespace-pre-line">{method.details}</div>
                  ) : (
                    <a 
                      href={method.href} 
                      className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                      {method.details}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        className="py-13 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#7c3700] mb-4">
              Send Us a <span className="text-amber-600">Message</span>
            </h2>
            <p className="text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                id="subject"
                type="text"
                {...register("subject", { required: "Subject is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message as string}</p>}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </form>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="py-13 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#7c3700] mb-4">
              Find Us on <span className="text-amber-600">the Map</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755036937166!2d-0.4735409248897096!3d5.603823594393042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuOCJOIDDCsDI4JzIwLjgiVw!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>
      </Container>
    </div>
  );
}