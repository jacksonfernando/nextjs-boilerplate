'use client';

import SphereButton from '@/components/Button/SphereButton';
import FeedCard from '@/components/Card/FeedCard';
import GlassesCard from '@/components/Card/GlassesCard'
import HeroCard from '@/components/Card/HeroCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import {
  FEED_CONTENT,
  FEED_DESCRIPTION,
  FEED_TITLE,
  HOME_GLASSES_TITLE,
  HOME_GLASSES_DESCRIPTION,
  OPTICAL,
  SUNGLASSES,
  FEED_3_LINK,
  FEED_2_LINK,
  FEED_4_LINK
} from '@/constants/global';
import { formatCurrencyToIDR } from '@/utils/currency';
import { useEffect, useState } from 'react';
import useFetchData from './hooks/useFetchData';

export default function Home() {
  const [products, setProducts] = useState([])

  const { data, loading, setHeader, header } = useFetchData(
    process.env.PRODUCT_ENDPOINT,
    {
      params: {
        offset: 0,
        limit: 9
      }
    }
  )

  useEffect(() => {
    if (!loading) {
      setProducts(prev => ([...prev, ...data]));
    }
  }, [loading, data]);

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

    return (
      <div className='mt-10 flex flex-row justify-center'>
        <SphereButton
          name={LOAD_MORE}
          onClick={() => {
            const newHeader = {
              params: { offset: header.params.offset + 1, limit: header.params.limit },
            }
            setHeader(newHeader)
          }}
        />
      </div>
    )
  }

  const renderFeedSection = () => {
    return (
      <div className='flex flex-col w-full justify-center justify-items-center text-center mt-12 border-gray border-t-2 text-black'>
        <div className='space-y-5 mt-10'>
          <h1 className='text-4xl font-normal'>{FEED_TITLE}</h1>
          <h3 className='font-light'>{FEED_DESCRIPTION}</h3>
        </div>
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 feed:grid-cols-4 gap-x-4 gap-y-8 place-items-center'>
          {
            FEED_CONTENT.map((feed, index) => {
              const { title, imageUrl } = feed

              return <FeedCard
                key={`feed-${index}`}
                title={title}
                imageUrl={imageUrl}
              />
            })
          }
        </div>
      </div>
    )
  }

  const renderHeroSection = () => {
    const heroesCard = {
      feed1: {
        backgroundImage: FEED_3_LINK,
        title: 'Discover your style',
        url: '#'
      },
      feed2: {
        backgroundImage: FEED_2_LINK,
        title: OPTICAL,
        url: '/opticals'
      },
      feed3: {
        backgroundImage: FEED_4_LINK,
        title: SUNGLASSES,
        url: '/glasses'
      }
    };

    return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4'>
        {Object.entries(heroesCard).map(([key, value], index) => {
          const { backgroundImage, title, url } = value;
          if (key === 'feed1') {
            return (
              <div
                className='lg:col-span-2'
                key={`heroesCard-${index}`}
              >
                <HeroCard
                  backgroundImage={backgroundImage}
                  title={title}
                  url={url}
                />
              </div>
            )
          }
          return (
            <HeroCard
              backgroundImage={backgroundImage}
              title={title}
              url={url}
              key={`heroesCard-${index}`}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className='min-h-screen'>
      <Navbar />
      {renderHeroSection()}
      <main className='h-full mb-14'>
        {renderGlassesSection()}
        {renderSphereButton()}
        {renderFeedSection()}
      </main >
      <Footer />
    </div>
  )
}
