import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { logo } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
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
  <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4"> 
   {/*logo assigned to the left */}
    <a className="block w-[12rem] xl:mr-8" href="#hero">
      <img
        src={logo}
        width={150} // Default width for smaller screens
        height={40} // Default height for smaller screens, maintaining the aspect ratio
        alt="hacktoberfest'24"
        className="lg:w-[110px] lg:h-auto xl:w-[120px] xl:h-auto" // Reduced width for lg and xl screens, maintaining aspect ratio
      />
    </a>
      
    {/* Navigation aligned to the right */}
    <nav
    className={`${
      openNavigation ? "flex" : "hidden"
    } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:bg-transparent`}
  >
      <div className="relative z-2 flex flex-col items-center justify-center lg:flex-row lg:ml-auto">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={item.url}
            onClick={handleClick}
            className={`block relative font-code text-color-1 uppercase transition-colors hover:text-green-600 ${
              item.onlyMobile ? "lg:hidden" : ""
            } px-6 py-6 md:py-8 lg:text-base lg:font-semibold xl:text-lg xl:px-8`} // Default text-color-1 (purple), hover text-white (n-1)
          >
            {item.title}
          </a>
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
