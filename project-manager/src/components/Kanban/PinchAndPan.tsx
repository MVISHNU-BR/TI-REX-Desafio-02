import { useState, useRef } from "react";

const PinchAndPan = ({ children }) => {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState({
    scale: 1,
    translateX: 0,
    translateY: 0,
  });

  const [lastTouches, setLastTouches] = useState(null);

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      setLastTouches(e.touches);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && lastTouches) {
      const [touch1, touch2] = e.touches;
      const [lastTouch1, lastTouch2] = lastTouches;

      // Distância inicial e final entre os dedos
      const prevDistance = Math.hypot(
        lastTouch1.pageX - lastTouch2.pageX,
        lastTouch1.pageY - lastTouch2.pageY
      );
      const currDistance = Math.hypot(
        touch1.pageX - touch2.pageX,
        touch1.pageY - touch2.pageY
      );

      // Calcula o zoom baseado na mudança de distância
      const scaleChange = currDistance / prevDistance;

      // Atualiza escala
      setTransform((prev) => ({
        ...prev,
        scale: Math.min(Math.max(prev.scale * scaleChange, 1), 3), // Limita entre 1x e 3x
      }));

      // Calcula o movimento do centro do pinch
      const centerX =
        (touch1.pageX + touch2.pageX) / 2 - containerRef.current.offsetLeft;
      const centerY =
        (touch1.pageY + touch2.pageY) / 2 - containerRef.current.offsetTop;

      setTransform((prev) => ({
        ...prev,
        translateX: prev.translateX + (centerX - prev.translateX) * (scaleChange - 1),
        translateY: prev.translateY + (centerY - prev.translateY) * (scaleChange - 1),
      }));

      setLastTouches(e.touches);
    } else if (e.touches.length === 1 && lastTouches) {
      // Movimento de pan (com um dedo)
      const touch = e.touches[0];
      const lastTouch = lastTouches[0];

      setTransform((prev) => ({
        ...prev,
        translateX: prev.translateX + touch.pageX - lastTouch.pageX,
        translateY: prev.translateY + touch.pageY - lastTouch.pageY,
      }));

      setLastTouches(e.touches);
    }
  };

  const handleTouchEnd = () => {
    setLastTouches(null); // Limpa os toques após o gesto
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-full touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute"
        style={{
          transform: `scale(${transform.scale}) translate(${transform.translateX}px, ${transform.translateY}px)`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PinchAndPan;
