import { ReactNode, useState, useEffect } from 'react';

interface CarouselProps {
  children?: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 740);
      setCurr(0);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const next = () =>
    setCurr((curr) =>
      slides && slides.length > 0
        ? curr === slides.length - 1
          ? 0
          : curr + 1
        : curr
    );

  const prev = () =>
    setCurr((curr) =>
      slides && slides.length > 0
        ? curr === 0
          ? slides.length - 1
          : curr - 1
        : curr
    );

  const slideWidth = isMobile ? 80 : 20;

  return (
    <div className="overflow-hidden relative">
      <div
        className="pl-5  flex gap-9 transition-transform ease-out duration-500 lg:pl-0"
        style={{ transform: `translateX(-${curr * slideWidth}%)` }}
      >
        {slides}
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 lg:hidden">
        <button
          onClick={prev}
          className="bg-white p-2 rounded-full text-black h-7 w-7 flex text-center items-center justify-center"
        >
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-black lg:hidden">
        <button
          onClick={next}
          className="bg-white p-2 rounded-full h-7 w-7 flex text-center items-center justify-center"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
