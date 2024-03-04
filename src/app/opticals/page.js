'use client';

import GlassesCard from "@/components/Card/GlassesCard";
import ProductHeroCard from "@/components/Card/ProductHeroCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import SphereButton from "@/components/Button/SphereButton";
import { formatCurrencyToIDR } from "@/utils/currency";
import { SUNGLASSES_TYPE, HOME_GLASSES_DESCRIPTION, HOME_GLASSES_TITLE, OPTICAL_TYPE, PRODUCT_OFFSET, PRODUCT_LIMIT } from "@/constants/global";

const Page = () => {
  const [products, setProducts] = useState([])

  const { data, loading, setHeader, header } = useFetchData(
    process.env.PRODUCT_ENDPOINT,
    {
      params: {
        offset: PRODUCT_OFFSET,
        limit: PRODUCT_LIMIT,
        type: OPTICAL_TYPE
      }
    }
  )

  useEffect(() => {
    if (!loading) {
      setProducts(prev => ([...prev, ...data]));
    }
  }, [loading, data]);

  const renderHeroSection = () => {
    const HERO_SECTION_TITLE = 'Opticals'
    const HERO_SECTION_DESCRIPTION = 'Stay on trend with our latest styles of opticals collection.'

    return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4'>
        <div className='lg:col-span-2'>
          <ProductHeroCard
            backgroundImage='/feed/feed3.jpg'
            title={HERO_SECTION_TITLE}
            description={HERO_SECTION_DESCRIPTION}
          />
        </div>
      </div>
    )
  }

  const renderGlassesSection = () => {
    return (
      <>
        <div className='flex flex-col items-center space-y-5 mt-10 text-black'>
          <h1 className='text-4xl font-normal'>{HOME_GLASSES_TITLE}</h1>
          <h3 className='font-light'>{HOME_GLASSES_DESCRIPTION}</h3>
        </div>
        <div className='px-24 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 place-items-center'>
          {products?.map((glasses, index) => {
            const { name, price, images, _id } = glasses;
            const firstImageUrl = images[0]?.imageUrl;

            return (
              <GlassesCard
                key={`glasses-${index}`}
                name={name}
                price={formatCurrencyToIDR(price)}
                imageUrl={firstImageUrl}
                linkUrl={`/glasses/${_id}`}
              />
            )
          })}
        </div>
      </>
    )
  }

  const renderSphereButton = () => {
    const LOAD_MORE = 'Load More'

    const paginateToNextOffset = () => {
      const newHeader = {
        params: {
          offset: header.params.offset + 1,
          limit: header.params.limit,
          type: OPTICAL_TYPE
        },
      }
      setHeader(newHeader)
    }

    return (
      <div className='mt-10 mb-10 flex flex-row justify-center '>
        <SphereButton
          name={LOAD_MORE}
          onClick={paginateToNextOffset}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      {renderHeroSection()}
      {renderGlassesSection()}
      {renderSphereButton()}
      <Footer />
    </div>
  );
}

export default Page;
