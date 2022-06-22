import React, {useRef} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {TiDeleteOutline}  from "react-icons/tb";
import {BsChevronLeft} from "react-icons/bs";
import {BiCart} from "react-icons/bi";
import toast from 'react-hot-toast';


import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/SanityClient';
import Product from './Product';


const Cart = () => {

    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart} = useStateContext ();

  return (
    <CartWrapper ref={cartRef}>

        <Button onClick={()=> setShowCart(false) }>
             <BackIcon/> Cart
             <span>( {totalQuantities} items) </span>
        </Button>
        {
            cartItems.length < 1 && (
                <div className='flex flex-col items-center justify-center'>
                    <CartIcon/>
                    <h3> Shopping cart is empty </h3>
                    <Link href="/">
                        <ContinueButton onClick={()=>setShowCart(false) }>Continue Shopping</ContinueButton>
                    </Link>
                </div>
            )
        }

        <ProductsContainer>
            {
                cartItems.length >=1 && cartItems.map( (item) => (
                    <ProductBox key={item._id} >
                        <img src={urlFor(item.image[0])} width={50} height={50} />
                        <span className='text-sm'> {item.name}</span>
                        <span className='text-sm font-semibold'> ${item.price}.00</span>
                        <span className='text-sm font-semibold'> Qty: {item.quantity}</span>
                    </ProductBox>
                ))
            }
        </ProductsContainer>


    </CartWrapper>
  )
}

export default Cart


const CartWrapper= tw.div`
    bg-white text-black w-96 h-96 z-10 
`;

const Button = tw.button`
    flex p-4  items-center justify-center gap-1 text-rose-600 
`;

const BackIcon = tw(BsChevronLeft)`
   h-4 w-4 
`;

const CartIcon = tw(BiCart)`
   h-40 w-40 text-black
`;

const ContinueButton = tw.div`
flex justify-center items-center text-lg bg-rose-600 text-white
 w-32 h-8  h-12 sm:w-48 cursor-pointer mt-6
`;

const ProductsContainer = tw.div`
    flex flex-col gap-4 items-center justify-center
`;

const ProductBox = tw.div`
    flex items-center justify-center gap-2
`;