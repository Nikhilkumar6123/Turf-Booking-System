import React from 'react'
import Navbar from '../Components/Navbar'
import HeroCarousel from '../Components/HeroCarousel'
import TurfCard from '../Components/TurfCard';

const HomePage = () => {
  const turfData = [
    {
      title: "Green Field Arena",
      location: "Mumbai, Maharashtra",
      price: 500,
      description:
        "Spacious turf with night lighting. Ideal for football and cricket. Nearby parking available.",
      image: "/images/turf1.jpg",
    },
    {
      title: "Elite Sports Ground",
      location: "Delhi, India",
      price: 650,
      description:
        "Top-class synthetic ground with coaching staff and amenities like locker rooms and refreshments.",
      image: "/images/turf2.jpg",
    },
    {
      title: "Legends Play Zone",
      location: "Bangalore, Karnataka",
      price: 450,
      description:
        "Fully netted turf. Long description to test card's scrollable content and ensure it doesn’t overflow. Supports evening matches with flood lights.",
      image: "/images/turf3.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100 ">
        {turfData.map((turf, index) => (
          <TurfCard key={index} {...turf} />
        ))}
      </div>
    </>
  );
}

export default HomePage