import React from 'react'
import Link from 'next/link'
import tw from "tailwind-styled-components"
import {BiPhone} from "react-icons/bi";
import {BiCart} from "react-icons/bi";
import Cart from './Cart'

import { useStateContext } from '../context/StateContext';

const NavBar = () => {

  const {showCart, setShowCart, totalQuantities} = useStateContext();

  return (
    <>
    <NavBarContainer>
        <CallOrder>
            <Call/>
            <span>Order Now:</span>
            <span>113-444-999</span>
       </CallOrder>
       <MenuCenter> 
            <Link href= "/">Home</Link>
            <Link href= "/Headphones">Headphones</Link>            
            <Link href= "/mobiles">Shoes</Link>
            <Link href= "/SmartWatches">Watches</Link>
            <Link href= "/Cameras">Cameras</Link>
            <Link href= "/gaming">Gaming</Link>
            <Link href= "/blog">Blog</Link>
        </MenuCenter>
           
        <MenuRight>
            <CartItem>
                <CartIcon onClick={ ()=> setShowCart(true) } />
                <CounterCircle>
                    <span className='text-sm text-white'>{totalQuantities}</span>
                </CounterCircle>
            </CartItem>
            <CartContainer>
              {
                showCart &&  <Cart/>
              }
              
            </CartContainer>
        </MenuRight>
      
    </NavBarContainer>
   
   </>
  )
}

export default NavBar

const NavBarContainer = tw.div`
    bg-black h-16 py-0 px-10 flex items-center justify-between sticky top-0 left-0 right-0 
    z-10 
`;
const CallOrder = tw.div`
    flex w-52 justify-between
    span {
        text-white
       }
`;

const Call = tw(BiPhone)`
   h-6 w-6 text-white
`;

const MenuCenter = tw.div`
  flex items-center justify-between gap-10 text-small text-white
  a {
    font-normal
  }
  @media (max-width: 768px) {
    hidden sm:flex
    }
`;  

const MenuRight = tw.div`
  flex items-center justify-between gap-2 text-small
  a {
    font-normal
  }
  @media (max-width: 768px) {
    flex justify-end gap-5
    }
`;
const CartItem = tw.div`
    flex 
`;
const CounterCircle = tw.div`
    flex items-center justify-center bg-black w-4 h-4 rounded-full
    absolute right-8 top-4
`;

const CartIcon = tw(BiCart)`
   h-6 w-6 text-white
`;


const CartContainer  = tw.div`
    flex absolute right-21 top-12
`;