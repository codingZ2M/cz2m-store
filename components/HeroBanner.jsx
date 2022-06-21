import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw from "tailwind-styled-components";
import { urlFor } from '../lib/SanityClient';

const HeroBanner = ({ bannerData }) => {
  return (
    <HeroBannerContainer>
        
            <ProductInfo>
                <p className='text-2xl'>{bannerData.smallText}</p>
                <p className='sm:text-4xl text-3xl'>{bannerData.midText}</p>
                <p className='sm:text-3xl text-xl'>{bannerData.largeText1}</p>
                <p className='sm:text-5xl text-3xl text-rose-600'>{bannerData.discount}</p>
                <p className='text-2xl'>{bannerData.saleTime}</p>
            </ProductInfo>
            <HeroImageBox>
                <img src = {urlFor(bannerData.image)}   height={450} width={450} alt="Banner"/>
            </HeroImageBox>
            <ShopDescriptionBox>
                <span className='text-xl sm:text-4xl'>{bannerData.desc}</span>
                <Link href="/product/ID">
                    <ShopButton>{bannerData.buttonText}</ShopButton>
                </Link>
            </ShopDescriptionBox>
        
    </HeroBannerContainer>
  )
}

export default HeroBanner

const HeroBannerContainer = tw.div`
    mt-2 sm:mt-6 flex justify-center items-center z-0 h-96 w-11/12  
    rounded-lg bg-zinc-200 
`;
const ProductInfo = tw.div`
    absolute top-24 left-8 sm:top-52 sm:left-24 flex flex-col gap-1 z-1
`;
const HeroImageBox = tw.div`
    absolute top-36 left-52 sm:left-96 z-1 px-6
`;

const ShopDescriptionBox = tw.div`
    flex flex-col gap-2 sm:gap-8 absolute top-80 sm:top-72 left-48 sm:left-2/3
    z-1 items-center mt-6
`;

const ShopButton = tw.div`
    flex justify-center items-center text-lg text-white
    bg-rose-600 h-12 w-52 sm:w-80  rounded-sm cursor-pointer 
`;