import img2 from '../assets/carrossel-1.png';
import img3 from '../assets/carrossel-2.png';
import img1 from '../assets/carrossel-3.png';

const TheManager = () => {
  return (
    <div className="bg-azul-escuro text-white py-[60px] px-[20.5px] flex flex-col gap-[49px] xl:flex xl:flex-col items-center overflow-hidden">
      <div
        className="h-[252px] flex flex-col gap-6 md:w-[656px] md:h-[216px] md:mx-auto xl:w-[1100px] xl:h-[192px] xl:flex xl:flex-col xl:gap-6 xl:mx-[170px]
      "
      >
        <h1 className="text-2xl leading-[48px] text-amarelo-claro md:text-[40px]">
          The Manager
        </h1>
        <p className="text-sm leading-6 md:text-base">
          Project Manager is a tool designed to make organizing and tracking
          your daily tasks easier than ever. With a clean, intuitive interface
          and powerful features, you can plan, prioritize, and keep tabs on your
          projects - whether you’re working solo or a with a team
        </p>
        <button className="mx-auto text-[15px] bg-white text-roxo w-[205px] rounded-lg h-9 f md:mx-0 md:w-[240px] md:text-base lg:w-[240px] lg:h-12 lg:font-semibold">
          Learn More
        </button>
      </div>
      <div className="flex gap-9 md:px-11 lg:gap-10">
        <div className="flex flex-col">
          <img
            src={img1}
            className="w-[307.85px] h-[307.85px] md:w-[340px] md:h-[340px]"
            alt="imagem de um notebook"
          />
          <div className=" w-[307.85px] h-[73.35px] flex flex-col justify-center px-[10.87px]">
            <p className="text[14.49px]">Manage Projects</p>
            <p>
              <strong className="text-[18.11px]">20+ projects</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src={img2}
            className="w-[307.85px] h-[307.85px] md:w-[340px] md:h-[340px]"
            alt="imagem de um notebook"
          />
          <div className=" w-[307.85px] h-[73.35px] flex flex-col justify-center px-[10.87px]">
            <p className="text[14.49px]">Track Tasks</p>
            <p>
              <strong className="text-[18.11px]">50+ tasks</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src={img3}
            className="w-[307.85px] h-[307.85px] md:w-[340px] md:h-[340px]"
            alt="imagem de um notebook"
          />
          <div className=" w-[307.85px] h-[73.35px] flex flex-col justify-center px-[10.87px]">
            <p className="text[14.49px]">Collaborate</p>
            <p>
              <strong className="text-[18.11px]">10+ team members</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheManager;
