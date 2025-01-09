import table from '../assets/Table.png';
import circle from '../assets/Message circle.png';
import clock from '../assets/Clock.png';
import tool from '../assets/Tool.png';

const FeaturedTools = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[60px] py-[59px] px-[24px] md:py-[105px] md:px-[170px] bg-azul-dessaturado ">
      <div className="flex flex-col justify-center items-center text-center  gap-6 w-[1100px] h-[168px]">
        <h1 className="md:text-[40px] text-[25px] leading-[48px] text-amarelo-claro font-bold">
          Featured Tools
        </h1>
        <p className="text-white text-sm md:text-base">
          Tools to enhance your project management
        </p>
        <button className="mx-auto text-[15px] bg-white text-roxo w-[205px] rounded-lg h-9 f md:mx-0 md:w-[240px] md:text-base lg:w-[240px] lg:h-12 lg:font-semibold">
          View All
        </button>
      </div>
      <div className="flex flex-col xl:flex xl:flex-row gap-10">
        <div className="flex justify-center items-center flex-col gap-5 w-[245px] h-[204px]">
          <div className="rounded-full w-[100px] h-[100px] bg-white flex justify-center items-center text-green-300">
            <img src={tool} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center text-white">
            <p className="text-xl leading-7">Task Scheduler</p>
            <p>Plan and schedule tasks</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-5 w-[245px] h-[204px]">
          <div className="rounded-full w-[100px] h-[100px] bg-white flex justify-center items-center">
            <img src={clock} alt="clock's icon" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center text-white">
            <p className="text-xl leading-7">Deadline Tracker</p>
            <p>Keep track of project deadlines</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-5 w-[245px] h-[204px]">
          <div className="rounded-full w-[100px] h-[100px] bg-white flex justify-center items-center">
            <img src={circle} alt="message circle's icon" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center text-white">
            <p className="text-xl leading-7">Communication Hub</p>
            <p>Centralized team communication</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-5 w-[245px] h-[204px]">
          <div className="rounded-full w-[100px] h-[100px] bg-white flex justify-center items-center">
            <img src={table} alt="table's icon" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center text-white">
            <p className="text-xl leading-7">Progress Report</p>
            <p>Track project progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTools;
