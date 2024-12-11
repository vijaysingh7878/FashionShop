import { cardContext } from "../context/MainContext";
import React, { useContext, useEffect } from "react";

const Footer = () => {
  const { cart, setCart, oldData, setOldData } = useContext(cardContext);
    return (
        <div>
             {
              oldData != "" ? (
              <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="space-y-4">
          {/* Footer Links */}
          <div className="flex justify-center space-x-6">
            <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
            <a href="#contact" className="hover:text-gray-400">Contact Us</a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
          
          {/* Copyright */}
          <div className="mt-6 text-sm text-gray-400">
            <p>&copy; 2024 MyCompany. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>):''}
        </div>
    );
}

export default Footer;
