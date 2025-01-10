import { useState } from "react";

export default function Footer() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const items = [
    {
      id: "Facebook",
      defaultSrc: "src/assets/facebook.svg",
      hoverSrc: "src/assets/facebook-logoFill-colored.png.png",
    },
    {
      id: "Instagram",
      defaultSrc: "src/assets/instagram.svg",
      hoverSrc: "src/assets/instagran-logo-colored.png",
    },
    {
      id: "Linkedin",
      defaultSrc: "src/assets/linkedin.svg",
      hoverSrc: "src/assets/linkedin-logo-colored.png.png",
    },
  ];
  return (
    <footer className="bg-azul-escuro w-full min-h-[100px] flex items-center justify-center py-4 px-4 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-8">
        <div className="flex items-center justify-between gap-4">
          {items.map((item) => (
            <a
              key={item.id}
              href={`https://${item.id}.com`}
              className="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition"
              target="_blank"
              aria-label={item.id}
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <img
                className="w-3 h-3 object-contain"
                src={isHovered === item.id ? item.hoverSrc : item.defaultSrc}
                alt={`logo-${item.id}`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center text-center">
          <p className=" text-xl font-normal">
            © 2024 Project Manager. All rights reserved.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <a href="/privacy" className="hover:underline text-xl font-normal">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline text-xl font-normal">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
