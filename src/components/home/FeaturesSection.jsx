import React from 'react'
import VerticalCard from './VerticalCard';
import shipping from './../../assets/icons/shipping.svg';
import refund from './../../assets/icons/Group11.svg';
import support from './../../assets/icons/support.svg';

export const FeaturesSection = () => {
  const data = [
    {
      image: shipping,
      title: "FREE SHIPPING",
      text: 'Free shipping with a gift package for customers who have purchased from our online shop service for the first time.'
    },
    
    {
      image: refund,
      title: "100% REFUND",
      text: 'Free shipping with a gift package for customers who have purchased from our online shop service for the first time.'
    },
    {
      image: support,
      title: "SUPPORT 24/7",
      text: 'Free shipping with a gift package for customers who have purchased from our online shop service for the first time.'
    }

  ]
  return (
    <div className='container flex gap-5 justify-around my-15 flex-wrap'>
      <VerticalCard {...data[0]}/>
      <VerticalCard {...data[1]}/>
      <VerticalCard {...data[2]}/>
    </div>
  )
}
