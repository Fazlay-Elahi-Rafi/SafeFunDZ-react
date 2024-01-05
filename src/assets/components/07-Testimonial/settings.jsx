import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function ArrowRight({ parentClass, className, style, onClick }) {
  return (
    <div className={`${parentClass}`}>
      <FaArrowRight className="global__arrow-default" onClick={onClick} />
    </div>
  );
}
function ArrowLeft({ parentClass, className, style, onClick }) {
  return (
    <div className={`${parentClass}`}>
      <FaArrowLeft className="global__arrow-default" onClick={onClick} />
    </div>
  );
}

// --> This setting use for HomePage
export const settings = {
  centerMode: false,
  arrows: true,
  slidesToShow: 2,
  draggable: true,
  prevArrow: (
    <ArrowLeft parentClass="global__arrow testimonial__arrow-left justify-content-end" />
  ),
  nextArrow: (
    <ArrowRight parentClass="global__arrow testimonial__arrow-right justify-content-start" />
  ),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
      },
    },
  ],
};

// --> This setting use for AboutPage
export const settingTwo = {
  centerMode: false,
  arrows: true,
  slidesToShow: 3,
  prevArrow: (
    <ArrowLeft parentClass="global__arrow testimonial__arrow-two--left position-absolute justify-content-end" />
  ),
  nextArrow: (
    <ArrowRight parentClass="global__arrow testimonial__arrow-two--right position-absolute justify-content-start" />
  ),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: true,
        dots: false,
        centerMode: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
};
// --> This setting use for HomePage-2
export const settingThree = {
  centerMode: true,
  arrows: true,
  slidesToShow: 3,
  prevArrow: (
    <ArrowLeft parentClass="global__arrow testimonial__arrow-two--left position-absolute justify-content-start" />
  ),
  nextArrow: (
    <ArrowRight parentClass="global__arrow testimonial__arrow-two--right position-absolute justify-content-start" />
  ),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: true,
        dots: false,
        centerMode: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
};
