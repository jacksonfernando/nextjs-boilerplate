import FeedCard from "@/components/Card/FeedCard";
import Image from "next/image";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,

} from "react-icons/bs";
const FeedCarousel = ({ contents }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const changeToPreviousSlide = () => {
    const LAST_SLIDE_INDEX = slideIndex.length - 1;
    if (slideIndex == 0) return setSlideIndex(LAST_SLIDE_INDEX);
    return setSlideIndex(slideIndex - 1);
  }

  const changeToNextSlide = () => {
    const LAST_SLIDE_INDEX = slideIndex.length - 1;
    if (slideIndex == LAST_SLIDE_INDEX) return setSlideIndex(0);
    return setSlideIndex(slideIndex + 1);
  }

  return (
    <div className='overflow-hidden relative'>
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${slideIndex * 100}%)`,
        }}
      >
        {contents.map((content, index) => {
          const { title, imageUrl } = content
          return <FeedCard
            key={`feed-${index}`}
            title={title}
            imageUrl={imageUrl}
          />
        })
        }
      </div>


      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={changeToPreviousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={changeToNextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

    </div>
  );
}

//<div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
//  {slides.map((_, index) => {
//    return (
//      <div
//        onClick={() => setCurrent(index)}
//        key={`circle-${index}`}
//        className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"
//          }`}
//      ></div>

//    );

//  })}
//</div>

export default FeedCarousel
