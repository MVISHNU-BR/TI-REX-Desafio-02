import CaroulselImages from './CaroulselImages';

const TheManager = () => {
  return (
    <div className="bg-azul-escuro text-white lg:items-center py-[60px] flex flex-col gap-[49px] xl:flex xl:flex-col overflow-hidden">
      <div
        className="h-[252px] px-[20.5px] flex flex-col gap-6 md:w-[656px] md:h-[216px] md:mx-auto xl:w-[1100px] xl:h-[192px] xl:flex xl:flex-col xl:gap-6 xl:mx-[170px]
      "
      >
        <h1 className="text-2xl leading-[48px] text-amarelo-transparente md:text-[40px] ">
          The Manager
        </h1>
        <p className="text-sm leading-6 md:text-base">
          Project Manager is a tool designed to make organizing and tracking
          your daily tasks easier than ever. With a clean, intuitive interface
          and powerful features, you can plan, prioritize, and keep tabs on your
          projects - whether you’re working solo or a with a team
        </p>
        <button className="mx-auto text-[15px] bg-white text-roxo w-[205px] rounded-lg h-9 f md:mx-0 md:w-[240px] md:text-base lg:w-[240px] lg:h-12 lg:font-semibold hover:bg-azul-dessaturado hover:text-white transition duration-200 ease-in-out">
          Learn More
        </button>
      </div>
      <CaroulselImages />
    </div>
  );
};

export default TheManager;
