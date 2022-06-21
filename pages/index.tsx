import React from 'react'
import {NavBar, HeroBanner, Product, PromotionalBanner } from '../components';
import tw from "tailwind-styled-components"
import {client} from '../lib/SanityClient';

const Home = ( { bestProducts, bannerData, promotionalData }) => {
  return (
    <HomeContainer>
        <NavBar/>
        <HeroBannerContainer>
            <HeroBanner  bannerData={bannerData.length && bannerData[0]} />
        </HeroBannerContainer> 

        {console.log(bannerData)}

        <div className='mt-10 mb-2 sm:mb-6 flex justify-center'>
          <h1 className='text-2xl sm:text-3xl'>Best Selling Products</h1>
       </div>

      <ProductsGrid >
       
        {
          bestProducts.map( (product) => (
             <Product key={product.id} product = {product}/> 
          ))      
        }
      </ProductsGrid>
      <PromotionalBanner  promotionalBanner ={promotionalData && promotionalData[0]} />
    </HomeContainer>
  )
}

export default Home

export  async function getServerSideProps() {
  const query = '*[_type == "bestselling"]';
  const bestProducts = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const promotionalQuery = '*[_type == "promotional"]';
  const promotionalData = await client.fetch(promotionalQuery);

  return {
    props: { bestProducts, bannerData, promotionalData }
  }
}

const HomeContainer = tw.div`
   mt-0 flex flex-col min-h-screen w-full
`;

const HeroBannerContainer = tw.div`
  flex items-center justify-center
`;

const ProductsGrid = tw.div`
  mt-0 flex items-center justify-center px-8 grid grid-cols-1 gap-10 
  xl:grid-cols-4 lg:grid-cols-3
`;

