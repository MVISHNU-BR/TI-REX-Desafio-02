import { useState, useRef, useEffect } from "react";
import menuIcon from "../assets/menu.svg"; 
import searchIcon from "../assets/ic-search.svg";

export default function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const searchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const ClickOutside = (event: MouseEvent) => {
   
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsSearchOpen(false);
    }
    
    
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", ClickOutside);
    return () => {
      document.removeEventListener("mousedown", ClickOutside);
    };
  }, []);

  return (
    <nav className="w-full h-20 px-5 flex justify-end items-center font-roboto text-lg">
      <div className="hidden lg:flex items-center gap-10">
        <a href="#home" className="text-white">Home</a>
        <a href="#about" className="text-white">About</a>
        <a href="#settings" className="text-white">Settings</a>
        <a href="#profile" className="text-white">Profile</a>
        <div className="border border-white border-opacity-10 rounded-[6px] w-[200px] px-2 py-2 flex items-center">
          <input
            type="text"
            placeholder="Search in site"
            className="outline-none text-white bg-transparent w-full"
          />
          <button className="p-1">
          
          </button>
        </div>
      </div>

    
      <div className="flex lg:hidden items-center gap-4">
        <button
          onClick={toggleMenu}
          className="w-[36px] h-[36px] p-[8px] rounded-[6px]"
        >
          <img src={menuIcon} alt="Menu Icon" className="w-full h-full" />
        </button>

        <button
          onClick={searchOpen}
          className="w-[36px] h-[36px] p-[8px] rounded-[6px] border border-white"
        >
    
        </button>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-20 right-0 w-full bg-azul-escuro p-5 flex flex-col gap-4 lg:hidden transition-transform transform"
        >
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <a href="#settings" className="text-white">Settings</a>
          <a href="#profile" className="text-white">Profile</a>
        </div>
      )}

      {isSearchOpen && (
        <div
          ref={searchRef} 
          className="absolute top-20 right-0 w-full bg-azul-escuro p-5 border border-white border-opacity-10 rounded-[6px] w-full px-2 py-2 flex items-center lg:hidden transition-transform transform"
        >
          <input
            type="text"
            placeholder="Search in site"
            className="outline-none text-white placeholder-white bg-transparent w-full"
            
          />
          
          <button className="p-1">
            <img src={searchIcon} alt="" />
          </button>
        </div>
      )}
    </nav>
  );
}
