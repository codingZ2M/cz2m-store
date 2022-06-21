import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/SanityClient'
import tw from "tailwind-styled-components"

const PromotionalBanner = ({promotionalBanner}) => {
  return (
    <PromotionalBannerContainer>
        <PromotionalBannerSection>
              <span className='sm:text-5xl text-4xl'>{promotionalBanner.midText} </span>
              <span className='text-xl'>{promotionalBanner.largeText1} </span>
              <span className='text-lg'>{promotionalBanner.saleTime} </span>
        </PromotionalBannerSection>
        <PromotionalImageBox>
                <img src = {urlFor(promotionalBanner.image)}   height={450} width={450} alt="Banner"/>
        </PromotionalImageBox>
        <PromotionalBannerSection>
             <span className='sm:text-5xl text-4xl w-3/4 leading-tight'>{promotionalBanner.largeText2} </span>
             <Link href="/product/ID">
                    <ShopButton>{promotionalBanner.buttonText}</ShopButton>
             </Link>
        </PromotionalBannerSection>
   
    </PromotionalBannerContainer>
  )
}

export default PromotionalBanner

const PromotionalBannerContainer = tw.div`
  flex flex-col sm:flex-row gap-20 sm:gap-96 justify-center items-center z-0 my-8 bg-slate-900 h-96 w-full relative
`;
const PromotionalBannerSection = tw.div`
  flex flex-col gap-2 z-1 text-white px-10
`;

const ShopButton = tw.div`
    flex justify-center items-center text-lg text-white
    bg-white text-slate-900 h-12 w-32 sm:w-80 mt-6 rounded-sm cursor-pointer 
`;

const PromotionalImageBox = tw.div`
    absolute top-10 left-52 sm:left-80 z-1 px-6
`;
