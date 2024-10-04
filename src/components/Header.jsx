import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { logo } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => {
      if (prev) {
        enablePageScroll();
      } else {
        disablePageScroll();
      }
      return !prev;
    });
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <ScrollLink to="hero" smooth={true} duration={500}>
          <img src={logo} width={150} height={40} alt="hacktoberfest'24" />
        </ScrollLink>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              item.url.startsWith("http") ? ( // Check if the URL is external
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Security measures
                  onClick={handleClick} // Close navigation
                  className={`block relative font-code text-2xl uppercase transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash ? "text-white" : "text-n-1/50" // Change active link color to white
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ) : (
                <ScrollLink
                  key={item.id}
                  to={item.url.replace("#", "")} // Remove '#' for the ID
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash ? "text-white" : "text-n-1/50" // Change active link color to white
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                  activeClass="text-white" // Active link color
                >
                  {item.title}
                </ScrollLink>
              )
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
