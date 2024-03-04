'use client';

import SphereButton from "@/components/Button/SphereButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; import { capitalize, formatToPascalCase } from "@/utils/strings";
import Image from "next/image";
import { useState } from "react";
import { HiPlusSmall, HiOutlineMinus } from "react-icons/hi2";

const Page = ({ params }) => {
  const [openFitGuide, setOpenFitGuide] = useState(false);
  const [openSizeGuide, setOpenSizeGuide] = useState(false);
  const FIT_GUIDE = 'Fit Guide';
  const SIZE_GUIDE = 'Size Guide';

  const renderImage = () => {
    return (
      <div className="lg:w-full lg:h-4/5">
        <Image
          width={800}
          height={800}
          alt={'detail-image'}
          src={'/glasses/glasses1.webp'}
        />
      </div>
    );
  }

  const renderButton = (name, width) => {
    return <div
      className="text-lg bg-gray-200 font-light text-gray-700 text-center align-middle px-3 py-2 h-12 border border-gray-200 rounded-2xl"
      style={{ width: width }}

    >
      <b>{name}</b>
    </div>
  }

  const renderFitGuideContent = () => {
    return (
      <div className="mt-4 flex flex-row justify-start space-x-3">
        {renderButton('Standard Fit', '12rem')}
        {renderButton('Small', '8rem')}
      </div>
    )
  }

  const renderSizeGuideContent = () => {
    const sizeGuide = {
      'frame Width': 13.7,
      'lens Width': 5.7,
      'bridge Length': 1.6,
      'temple Length': 14.2
    };
    return (
      <div className="mt-4 flex flex-col lg:flex-row justify-start space-y-3">
        <Image
          src={'/glasses/sizchartsunset.webp'}
          width={400}
          height={400}
          alt={'size chart'}
        />
        <div className="flex flex-col text-black space-y-8">
          {
            Object.entries(sizeGuide).map(([key, value], index) => {
              return (
                <p
                  key={`sizeGuide-${index}`}
                  className="border-gray border-b-2"
                >{formatToPascalCase(`${index + 1}.  ${key}: ${value}cm`)}</p>
              )
            })
          }
        </div>
      </div>
    )
  }

  const toogleContent = (title) => {
    if (title === FIT_GUIDE) {
      return setOpenFitGuide(!openFitGuide)
    }
    return setOpenSizeGuide(!openSizeGuide)
  }

  const renderPlusOrMinusIcon = (showContent) => {
    if (showContent) {
      return <HiOutlineMinus color="gray" size={'20'} />
    }
    return <HiPlusSmall color="gray" size={'20'} />
  }

  const expandContent = (title, showContent, content = () => { }) => {
    return (
      <div onClick={() => toogleContent(title)}>
        <div className="flex flex-column justify-between mt-4 border-t-2 pt-4 border-gray text-black">
          {title}
          {renderPlusOrMinusIcon(showContent)}
        </div>
        {showContent && content()}
      </div>
    )
  }

  const renderChooseColor = (color) => {
    return (
      <>
        <p>
          Color: {`${capitalize(color)}`}
        </p>
        <div className="flex flex-row justify-start space-x-3">
          <div className="border border-gray-300">
            <Image
              width={100}
              height={100}
              alt={'detail-image'}
              src={'/glasses/glasses1.webp'}
            />
          </div>
          <div className="border border-gray-300">
            <Image
              width={100}
              height={100}
              alt={'detail-image'}
              src={'/glasses/glasses1.webp'}
            />
          </div>
          <div className="border border-gray-800">
            <Image
              width={100}
              height={100}
              alt={'detail-image'}
              src={'/glasses/glasses1.webp'}
            />
          </div>
        </div>
      </>
    );
  }

  const renderContent = (title, price, description) => {
    return (
      <div>
        <h1 className="text-xl lg:text-4xl font-normal text-black">{title}</h1>
        <h1 className="text-lg lg:text-2xl font-light mt-2 text-black">{price}</h1>
        <p className="text-sm lg:text-lg mt-7 text-gray-600">
          {description}
        </p >
        <div className="my-4 flex flex-row justify-center">
          <SphereButton name={'Buy now'} width={'100%'} />
        </div>
        {renderChooseColor('black')}
        {expandContent(FIT_GUIDE, openFitGuide, renderFitGuideContent)}
        {expandContent(SIZE_GUIDE, openSizeGuide, renderSizeGuideContent)}
      </div >
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-2 my-2 lg:mt-8 lg:grid grid-cols-2">
        {renderImage()}
        {renderContent('Optical TRM 81296', 'Rp 80.000', 'The basic design of rectangle frame glasses is one of the most timeless styles available.')}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
