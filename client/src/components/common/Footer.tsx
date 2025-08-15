import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaDiscord, FaDribbble, FaFacebookF, FaGithub, FaLongArrowAltRight, FaTwitter } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { year } from "../sampleData/SampleData";

const Footer = () => {

  return (
    // TODO: Add dark mode support
    <footer className="bg-black dark:bg- text-gray-300 dark:text-gray-700 z-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold dark:text-gray-900 text-white mb-6">
              Krist
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <FiPhoneCall size={18} />
                <a href="tel:+17045550127" className="hover:underline">
                  (704) 555-0127
                </a>
              </li>
              <li className="flex items-center gap-2">
                <CiMail size={18} />
                <a href="mailto:krist@mail.com" className="hover:underline">
                  krist@mail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <CiLocationOn size={18} />
                <span>3811 Ranchiev, California 62395</span>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold dark:text-gray-900 text-white mb-4">
              Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Login</a></li>
              <li><a href="#" className="hover:underline">My Cart</a></li>
              <li><a href="#" className="hover:underline">My Wishlist</a></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-lg font-semibold dark:text-gray-900 text-white mb-4">
              Service
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold dark:text-gray-900 text-white mb-4">
              Subscribe
            </h3>
            <p className="text-sm mb-4">
              Enter your email below to be the first to know about new collections and product launches.
            </p>
            <div className="relative cursor-pointer">
              <CiMail className="absolute top-3 left-3 text-white dark:text-gray-700" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-10 pr-10 py-2 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
              />
              <FaLongArrowAltRight className="absolute right-3 top-3 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Payment icons */}
          <div className="flex gap-4 text-white">
            <FaCcVisa size={24} />
            <FaCcMastercard size={24} />
            <FaGooglePay size={24} />
            <FaPaypal size={24} />
          </div>

          {/* Copyright */}
          <span className="text-sm text-center">
            © {year} <a href="#" className="hover:underline">Krist™</a>. All Rights Reserved.
          </span>

          {/* Social icons */}
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-white"><FaDiscord size={18} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={18} /></a>
            <a href="https://github.com/shazin-v" target="_blank" className="hover:text-white"><FaGithub size={18} /></a>
            <a href="#" className="hover:text-white"><FaDribbble size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
