import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailtoLink = `mailto:sana38790@gmail.com?subject=${encodeURIComponent(
      subject || "New portfolio contact"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="sana-contact-section">
        <div className="sana-contact-container">
          {/* LEFT – TEXT + SOCIALS */}
          <motion.div
            className="sana-contact-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="sana-contact-subtitle">
              <span className="dot"></span> Let’s Connect
            </p>

            <h2 className="sana-contact-title">
              Have an idea or project?
              <br />
              <span>Let’s talk about it.</span>
            </h2>

            <p className="sana-contact-desc">
              Whether it’s a full-stack web app, a custom dashboard, or
              performance improvements to an existing product, I’d love to hear
              from you. I’m open to full-time roles, remote opportunities, and
              freelance collaborations.
            </p>

            <div className="sana-contact-info">
              <div className="info-row">
                <Mail size={18} />
                <a href="mailto:sana38790@gmail.com">sana38790@gmail.com</a>
              </div>
              <div className="info-row">
                <Phone size={18} />
                <a href="tel:+9198125158">+91 98125 158</a>
              </div>
              <div className="info-row">
                <MapPin size={18} />
                <span>New Delhi, Delhi</span>
              </div>
            </div>

            <div className="sana-social-links">
              <a
                href="https://www.linkedin.com/in/sana-arif-8b791b214/"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href="https://github.com/muffin1601"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <Github size={16} />
                GitHub
              </a>

              <a href="mailto:sana38790@gmail.com" className="social-pill">
                <Mail size={16} />
                Email
              </a>
            </div>
          </motion.div>

          {/* RIGHT – CONTACT FORM */}
          <motion.form
            className="sana-contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project inquiry, opportunity, etc."
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project, idea, or role..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="sana-contact-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              <Send size={18} />
              Send Message
              <span className="btn-shine"></span>
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="sana-footer">
        <p>© {new Date().getFullYear()} Sana Arif • MERN Stack Developer</p>
      </footer>
    </>
  );
};

export default Footer;
