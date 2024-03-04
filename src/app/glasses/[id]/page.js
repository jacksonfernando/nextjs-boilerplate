'use client';

import SphereButton from "@/components/Button/SphereButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; import { formatCurrencyToIDR } from "@/utils/currency";
import { camelCaseToWords, capitalize } from "@/utils/strings";
import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { HiPlusSmall, HiOutlineMinus } from "react-icons/hi2";

const Page = ({ params }) => {
  const [isHydrated, setIsHydrated] = useState(false)
  const [product, setProduct] = useState({});
  const [productImage, setProductImage] = useState({});
  const [openFitGuide, setOpenFitGuide] = useState(false);
  const [openSizeGuide, setOpenSizeGuide] = useState(false);
  const FIT_GUIDE = 'Fit Guide';
  const SIZE_GUIDE = 'Size Guide';

  const fetchProductById = useCallback(async () => {
    const { data } = await axios.get(process.env.PRODUCT_ENDPOINT, { params });
    setProduct(data);
    setProductImage(data.images[0]);
  }, [params]);


  useEffect(() => {
    setIsHydrated(true)
    if (isHydrated) {
      fetchProductById()
    }
  }, [isHydrated, fetchProductById]);

  const renderImage = () => {
    return (
      <div className="lg:w-full lg:h-4/5">
        {productImage && <Image
          width={800}
          height={800}
          alt={'main-image'}
          src={productImage.imageUrl}
        />}
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
        {product && product.fitGuide.map(content => {
          return (
            renderButton(content, '12rem')
          )
        })}
      </div>
    )
  }

  const renderSizeGuideContent = () => {
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
            product?.sizeGuide && Object.entries(product.sizeGuide)
              .map(([key, value], index) => {
                const sizeGuideDescription = camelCaseToWords(key);
                return (
                  <p
                    key={`sizeGuide-${index}`}
                    className="border-gray border-b-2"
                  >{`${index + 1}.  ${sizeGuideDescription}: ${value}cm`}</p>
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

  const renderChooseColor = () => {
    const productImages = product?.images;
    return productImages?.length > 0 && (
      <>
        <p className="text-black">
          Color: {`${capitalize(productImage?.color)}`}
        </p>
        <div className="flex flex-row justify-start space-x-3">
          {productImages.map((product, index) => {
            let borderColor = 'lightgray';
            if (product._id.toString() == productImage._id.toString()) borderColor = 'black';
            return <div
              className="border"
              style={{ borderColor }}
              key={`detail-image-color-${index}`}
              onClick={() => setProductImage(product)}
            >
              <Image
                width={100}
                height={100}
                alt={`detail-image-${index}`}
                src={product.imageUrl}
              />
            </div>
          })}
        </div>
      </>
    );
  }

  const renderContent = () => {
    const { name, price, description } = product;
    const formattedPrice = price && formatCurrencyToIDR(price);

    return (
      <div>
        <h1 className="text-xl lg:text-4xl font-normal text-black">{name}</h1>
        <h1 className="text-lg lg:text-2xl font-light mt-2 text-black">{formattedPrice}</h1>
        <p className="text-sm lg:text-lg mt-7 text-gray-600">
          {description}
        </p >
        <div className="my-4 flex flex-row justify-center">
          <SphereButton name={'Buy now'} width={'100%'} />
        </div>
        {renderChooseColor()}
        {expandContent(FIT_GUIDE, openFitGuide, renderFitGuideContent)}
        {expandContent(SIZE_GUIDE, openSizeGuide, renderSizeGuideContent)}
      </div >
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-2 my-2 lg:mt-8 lg:grid grid-cols-2 gap-x-2">
        {product && renderImage()}
        {product && renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
