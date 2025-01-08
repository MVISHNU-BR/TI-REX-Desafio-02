import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-azul-escuro w-screen flex items-center justify-center py-4 px-4 text-white">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    

    <div className="flex items-center justify-center gap-4">
      <a href="https://www.facebook.com" 
      className="w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition" 
      target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <img className="w-[1 rem] h-[1 rem] object-contain" src="src/assets/facebook.svg" alt="logo-facebook" />
      </a>

      <a href="https://www.instagram.com" 
      className="w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition" 
      target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <img className="w-[1 rem] h-[1 rem] object-contain" src="src/assets/instagram.svg" alt="logo-instagram" />
      </a>

      <a href="https://www.linkedin.com" 
      className="w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition" 
      target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <img className="w-[1 rem] h-[1 rem] object-contain" src="src/assets/linkedin.svg" alt="logo-linkedin" />
      </a>
    </div>

    
    <div className="flex items-center justify-center text-center text-md">
      <p>© 2024 Project Manager. All rights reserved.</p>
    </div>


    <div className="flex items-center justify-center gap-4">
      <a href="/privacy" className="text-md hover:underline">
        Privacy Policy
      </a>
      <a href="/terms" className="text-md hover:underline">
        Terms of Use
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
