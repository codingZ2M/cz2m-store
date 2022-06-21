import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';
import { urlFor } from '../lib/SanityClient';
import Image from 'next/image';

const Product = ({product}) => {
  return (
  
    <ProductContainer>
      
        <ProductDetails>
            <Link href={`/product/${product.slug.current}`}>
              <img src={urlFor(product.image  && product.image[0])}  />
            </Link> 
            <span className='text-base'>{product.name}</span>
            <span className='text-sm'>${product.price}.00</span>
        </ProductDetails>
     
    </ProductContainer>

  )
}

export default Product

const ProductContainer= tw.div`
  flex items-center justify-center my-4 sm:my-2
`;

const ProductDetails = tw.div`
  flex flex-col items-center justify-center 
`;