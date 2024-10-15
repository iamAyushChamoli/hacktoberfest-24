import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Section crosses className="!px-0 !py-10 bg-n-8 text-n-1">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4">
          HacktoberFest-2024, GEU x Vaunt
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={26} height={26} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <button 
          onClick={scrollToTop}
          className="bg-color-1 text-white px-6 py-2 rounded-full transition duration-300 hover:bg-color-2">
          Scroll to Top
        </button>
        <p className="text-sm mt-4">
          Privacy Policy | Terms of Service
        </p>
      </div>
    </Section>
  );
};

export default Footer;
