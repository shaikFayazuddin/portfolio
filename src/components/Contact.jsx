import React from "react";
import { CONTACT } from "../constants";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import CallButton from "./CallButton";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>

      <div className="text-center tracking-tighter space-y-6">
        {/* Address */}
        <p className="text-stone-300">{CONTACT.address}</p>

        {/* Phone + WhatsApp + Call */}
        <div className="flex items-center justify-center space-x-4 text-stone-300 text-lg">
          <CallButton />
          <a
            href="https://wa.me/917013938988"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp size={22} />
          </a>
          <span>{CONTACT.phoneNo}</span>
        </div>

        {/* Email + Gmail */}
        <div className="flex items-center justify-center space-x-3 text-stone-300 text-lg">
          <a
            href="mailto:shaikfayazuddin18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="hover:text-red-500 transition-colors"
          >
            <SiGmail size={20} />
          </a>
          <a href="mailto:shaikfayazuddin18@gmail.com" className="border-b border-stone-500 hover:text-white">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
