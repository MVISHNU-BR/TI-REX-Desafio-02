import { useRef, useState } from "react";

interface TouchComponentProps {
  children: React.ReactNode;
}

const TouchComponent = ({children}: TouchComponentProps) => {
  const [activeTouches, setActiveTouches] = useState([]);
  const [zoom, setZoom] = useState(null);
  const [location, setLocation] = useState({x: 0, y: 0});
  const lastLocation = useRef({ x: 0, y: 0 });

  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastLocation.current = {
      x: e.clientX - location.x,
      y: e.clientY - location.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;

    const newLocation = {
      x: e.clientX - lastLocation.current.x,
      y: e.clientY - lastLocation.current.y,
    };

    setLocation(newLocation);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -10 : 10;
      setZoom((prevZoom) => Math.max(10, Math.min(500, prevZoom + delta)));
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touches = Array.from(e.touches).slice(0, 2).map((touch) => ({
      identifier: touch.identifier,
      clientX: touch.clientX,
      clientY: touch.clientY,
    }));
    setActiveTouches(touches);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touches = Array.from(e.touches).slice(0, 2).map((touch) => ({
      identifier: touch.identifier,
      clientX: touch.clientX,
      clientY: touch.clientY,
    }));
    
    if(touches.length === 2) {
      const newZoom = calculateZoom(touches);
      setZoom(Math.trunc(newZoom));

    } else {
      const { clientX: startX, clientY: startY } = activeTouches[0];
      const currX = touches[0].clientX;
      const currY = touches[0].clientY;

      const dx = currX - startX;
      const dy = currY - startY;

      const newLocation = {
        x: lastLocation.current.x + dx / 5,
        y: lastLocation.current.y + dy / 5,
      };

      setLocation(newLocation);
    }
  };

  const handleTouchEnd = () => {
    lastLocation.current = location;
    setActiveTouches([]);
  };

  const calculateZoom = (touches: React.TouchList) => {
    if (touches.length < 2) {
      return 0;
    }

    const [touch1, touch2] = touches;
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;

    return Math.sqrt(dx * dx + dy * dy);
  };



  return (
    <div
      id="pinchAndPan"
      className="absolute top-0 left-[50] max-w-none max-h-none h-full flex items-center justify-center touch-none"
      style={{
        transform: `scale(${zoom}%) translate(${location.x}%, ${location.y}%)`,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
    >
      <div className="flex justify-center gap-[5px] px-9 sm:gap-7 xl:py-10">
        {children}
      </div>
    </div>
  );
};

export default TouchComponent;
