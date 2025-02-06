import React from "react";
import Logo from "../assets/Logo.jpg";
import {
  Meta,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Globe,
  ChefHat,
  ExternalLink,
  Linkedin,
  Copy,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 space-x-4">
              <div className=" bg-orange-500 rounded-full flex items-center justify-center">
                <Link to="/">
                  <img
                    data-testid="logo"
                    className="md:h-16 md:w-16 sm:h-10 sm:w-10 rounded-full"
                    src={Logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <h3 className="text-2xl font-bold text-white">Food Mania</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              "People who love to eat are always the best people."
              <span className="block mt-2 text-sm italic">— Julia Child</span>
            </p>
            <div className="flex gap-4">
              <Link
                to="https://www.linkedin.com/in/agrim-gupta08"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                to="https://x.com/AgrimGupta0805"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to="https://www.instagram.com/_agrim_0008/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                to="https://medium.com/@agrimgupta0805"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Copy className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Special Offers
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Delivery Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/home"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <span>123 Sector 62, Noida</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <span>+91 7302420801</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <span>agrimgupta8105@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-orange-500" />
                </div>
                <span>
                  <Link
                    to={"https://agrim-portfolio.vercel.app/"}
                    className="hover:text-orange-500"
                  >
                    Website
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Food Mania. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/home"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Terms
              </Link>
              <Link
                to="/home"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                to="/home"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
