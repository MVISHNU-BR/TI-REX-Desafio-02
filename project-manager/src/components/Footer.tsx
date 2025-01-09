export default function Footer() {
  return (
    <footer className="bg-azul-escuro w-full flex items-center justify-center py-4 px-4 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-8">

        <div className="flex items-center justify-between gap-4">
          <a href="https://www.facebook.com" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition" 
            target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img className="w-6 h-6 object-contain" src="src/assets/facebook.svg" alt="logo-facebook" />
          </a>

          <a href="https://www.instagram.com" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition" 
            target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img className="w-6 h-6 object-contain" src="src/assets/instagram.svg" alt="logo-instagram" />
          </a>

          <a href="https://www.linkedin.com" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition" 
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img className="w-6 h-6 object-contain" src="src/assets/linkedin.svg" alt="logo-linkedin" />
          </a>
        </div>

        <div className="flex items-center justify-center text-center text-[20px]">
          <p>© 2024 Project Manager. All rights reserved.</p>
        </div>

        <div className="flex items-center justify-between gap-4 text-[20px]">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};
