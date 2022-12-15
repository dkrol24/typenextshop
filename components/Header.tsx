import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {SearchIcon,ShoppingBagIcon,UserIcon} from "@heroicons/react/outline"; 
import { selectBasketItems } from '../redux/basketSlice';
import { useSelector } from 'react-redux';
const Header = () => {
  const session = false;
  const items = useSelector(selectBasketItems)
  return (
    <header style={{position:'sticky', top:'0',zIndex:'30',width:'100%',alignItems:'center',justifyContent:'space-between',display:'flex', background:'#e2d8dd'}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Link href="/">
        <div style={{position:'relative',height:'40px',width:'120px',display:'flex',justifyContent:'center',alignContent:'center'}}>
            <Image alt='appleicons' src="https://rb.gy/vsvv2o" height={40} width={40} />
        </div>
      </Link>
      </div>
      <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <ul style={{padding:'0',display:'flex',width:'100%',alignItems:'center',justifyContent:'space-around',listStyleType:'none'}}>
          <li>Product</li>
          <li>Explore</li>
          <li>Support</li>
          <li>Business</li>
        </ul>
      </div>
      <div style={{display:'flex',width:'120px',alignItems:'center',justifyContent:'space-evenly'}}>
        <div>
      <ShoppingBagIcon style={{height:'20px'}}/>
      <div style={{position:'relative'}}><span style={{position:'absolute' ,right:'12px', top:'-11px', zIndex:'50',display:'flex', height:'15px',width:'15px', alignItems:'center',fontSize:'12px',justifyContent:'center', borderRadius:'50%', background:'yellow', color:'black'}}>{items.length}</span></div>
        </div>
        <Link href="/checkout">
      <SearchIcon style={{height:'20px'}}/>
        </Link>
        {!session ? (
          <Image alt='profileicon' src="https://www.w3schools.com/howto/img_avatar.png" width={20} height={20} 
          //onClick={()=>signOut()} 
          />

        ): ( <UserIcon style={{height:'20px'}} 
        //onClick={()=>signIn()} 
        />)}
      </div>
    </header>
  )
}

export default Header