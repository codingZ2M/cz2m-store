import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import {NavBar, Product} from '../../components';
import {client, urlFor} from '../../lib/SanityClient'
import {AiFillStar, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

import {useStateContext} from '..//../context/StateContext'

const ProductDetails = ({ bestSellingProduct, bestSellingProducts }) => {
    const {image, name, details, price} = bestSellingProduct
    const [index, setIndex] = useState(0);

    const {decQty, incQty, qty, onAdd} = useStateContext();
     
  return (
    <>
        <NavBar/>
    
    <ProductDetailsContainer >
      
        <ProductImageContainer>
            <div>
            <img src={urlFor(image && image[index])} />
            </div>
        </ProductImageContainer>
        <Thumbnails>
                {
                    image.map( (item, i) => (
                        <img src={urlFor(item)} 
                            onMouseEnter={()=>{setIndex(i)}}
                      />
                    ))
                }
          </Thumbnails>
        <ProductDescContainer>
                <span className='sm:text-2xl text-lg'>{name} </span>
              <StarIconContainer>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <span className='text-sm'>(21)</span>
              </StarIconContainer>
              <h1 className='text-sm font-medium'>Details:</h1>
              <span className='text-base'>{details} </span>
              <span className='text-base'>${price}.00 </span>
              <h1 className='text-sm font-medium'>Quantity:</h1>
              
              <CountContainer>
                <span onClick={decQty}><MinusIcon/></span>
                <span onClick={()=>{}}>{qty}</span>
                <span onClick={incQty}><PlusIcon/></span>
              </CountContainer>

              <ButtonContainer>
                    <CartButton onClick={ () => onAdd(bestSellingProduct,qty) }>Add To Cart</CartButton>
                    <BuyButton onClick={()=>{}}>Buy Now</BuyButton>
              </ButtonContainer>
             
        </ProductDescContainer>
    </ProductDetailsContainer>

    <SimilarProductsContainer>
        <h1 className='text-xl'>SIMILAR PRODUCTS</h1>
        <SimilarProducts>
                {
                  bestSellingProducts.map((product) => (
                    <Product key={product.id} product = {product}/>
                  ))
                }
        </SimilarProducts>
    </SimilarProductsContainer>
</>
  )
}

export default ProductDetails

export const getStaticPaths = async () => {
    const query = `*[_type == "bestselling"] {
        slug {
            current
        }
    }`

    const products  = await client.fetch(query);
    const paths = products.map( (product) => ({
    params: {
        slug: product.slug.current
        }  
    }))

    return {
        paths, 
        fallback: 'blocking'
    }
}

export  async function getStaticProps({params: {slug}}) {
    const  bestSellingProductQuery = `*[_type == "bestselling" && slug.current == '${slug}'][0]`;
    const bestSellingProductsQuery = '*[_type == "bestselling"]'

    const bestSellingProduct = await client.fetch(bestSellingProductQuery);
    const bestSellingProducts = await client.fetch(bestSellingProductsQuery);

    return {
      props: { bestSellingProduct, bestSellingProducts }
    }
  }

  const ProductDetailsContainer = tw.div`
    mt-40 sm:mt-20 flex flex-col sm:flex-row gap-6 sm:gap-40 justify-center 
    items-center z-0  bg-white h-96 w-full relative
  `;


const ProductImageContainer = tw.div`
    flex flex-col gap-2 z-1 text-black px-10  
  `;

  const Thumbnails = tw.div`
    flex gap-2 justify-center items-center w-12 mt-8
  `;

  const ProductDescContainer = tw(ProductImageContainer)``;

  const StarIconContainer = tw.div`
    flex gap-1
  `;

  const StarIcon = tw(AiFillStar)`
    w-4 h-4 text-red-500
  `;

  const CountContainer = tw.div`
    flex justify-center items-center gap-4 border-2 w-20 h-6
  `;

  const MinusIcon = tw(AiOutlineMinus)`
      text-red-500
  `;

  const PlusIcon = tw(AiOutlinePlus)`
  text-red-500
  `;

  const ButtonContainer = tw.div`
    flex justify-center items-center gap-4
  `;

  const CartButton = tw.div`
    flex justify-center items-center text-lg text-red-600
    border-2 w-32 h-8 border-red-300 h-12 sm:w-48 cursor-pointer mt-6
`;

const BuyButton = tw(CartButton)`
    bg-rose-600 text-white
`;


const SimilarProductsContainer = tw.div`
  flex flex-col justify-center items-center my-10
`;

const SimilarProducts = tw.div`
  flex justify-center items-center gap-12 mt-8
`;