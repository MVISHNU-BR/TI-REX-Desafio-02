import { useState, useEffect } from "react";

// Imagem do Figma estava perdendo qualidade e estragando o design no resize, então criei um grid similar, mas responsivo para servir de plano de fundo da página de Kanban

type ChildProps = {
  parentRef: React.RefObject<HTMLElement>;
}

const ResponsiveGrid: React.FC<ChildProps> = ({parentRef}) => {
  
  const [gridDimensions, setGridDimensions] = useState({
    rows: 0,
    columns: 0,
  });
  const tileSize = 30;

  // Função para calcular o número de linhas e colunas possíveis
  const calculateGridDimensions = (width: number, height: number) => {
    const columns = Math.floor(width / tileSize);
    const rows = Math.floor(height / tileSize);
    return { rows, columns };
  };

  // Função para atualizar as dimensões do grid
  const updateGridDimensions = () => {
    if(parentRef.current) {
      const { width, height } = parentRef.current.getBoundingClientRect();
      const newDimensions = calculateGridDimensions(width, height);
      setGridDimensions(newDimensions);
    }
  };

  // Configurar resize
  useEffect(() => {
    updateGridDimensions();
    window.addEventListener("resize", updateGridDimensions);

    return () => window.removeEventListener("resize", updateGridDimensions);
  }, []);

  const { rows, columns } = gridDimensions;
  const tileCount = rows * columns;

  // Tailwind não estava atualizando os estilos após resize, por isso atributo style.
  return (
    <div
      id="grid"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: "2px",
        width: "100%",
        height: "100%",
      }}
    >
      {Array.from({ length: tileCount }).map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#fff",
          }}
        />
      ))}
    </div>
  );
};

export default ResponsiveGrid;
