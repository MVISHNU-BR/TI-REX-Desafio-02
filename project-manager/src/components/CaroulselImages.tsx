import img2 from '../assets/carrossel-1.png';
import img3 from '../assets/carrossel-2.png';
import img1 from '../assets/carrossel-3.png';
import Carousel from './Carousel';

const slides = [
  {
    image: img1,
    firstText: 'Manage Projects',
    secondText: '20+ projects',
  },
  {
    image: img2,
    firstText: 'Track Tasks',
    secondText: '50+ tasks',
  },
  {
    image: img3,
    firstText: 'Collaborate',
    secondText: '10+ team members',
  },
];

const CaroulselImages = () => {
  return (
    <div>
      <Carousel>
        {slides.map((i) => (
          <div key={i.image}>
            <img
              className="w-[307.85px] h-[307.85px] md:w-[340px] md:h-[340px]"
              src={i.image}
              alt=""
            />
            <div className=" w-[307.85px] h-[73.35px] flex flex-col justify-center px-[10.87px]">
              <p className="text[14.49px]">{i.firstText}</p>
              <p>
                <strong className="text-[18.11px]">{i.secondText}</strong>
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CaroulselImages;
