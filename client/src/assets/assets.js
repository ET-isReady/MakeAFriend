import kind from '../assets/kind.webp'
import dropdown_icon from '../assets/dropdown_icon.png'
import profile_pic from '../assets/Mangione.jpg'
import group_profiles from '../assets/group_profiles.png'
import header_img from '../assets/header_img.jpg'
import right_arrow from '../assets/right_arrow.png'
import round_logo from '../assets/round_logo.png'
import Lion from '../assets/lion.png'
import Tiger from '../assets/tiger.png'
import Bear from '../assets/bear.png'
import Trex from '../assets/trex.png'
import Alien from '../assets/alien.png'
import Children from '../assets/children1.jpg'
import Woman from '../assets/woman.png'
import verified_icon from '../assets/verified_icon.png'
import info_icon from '../assets/info_icon.png'
import defaultImage from '../assets/default_profile.webp'
import menu_icon from '../assets/menu_icon.png'
import cross_icon from '../assets/cross_icon.png'
import upload_icon from '../assets/upload_icon.png'


export const assets = {
   kind,
   defaultImage,
   dropdown_icon,
   profile_pic,
   group_profiles,
   header_img,
   right_arrow,
   round_logo,
   Lion,
   Tiger,
   Bear,
   Trex,
   Alien,
   Children,
   Woman,
   verified_icon,
   info_icon,
   menu_icon,
   cross_icon,
   upload_icon
}


export const specialityData = [
   {
       speciality: 'Lion',
       image: Lion
   },
   {
       speciality: 'Tiger',
       image: Tiger
   },
   {
       speciality: 'Bear',
       image: Bear
   },
   {
       speciality: 'Trex',
       image: Trex
   },
   {
       speciality: 'Alien',
       image: Alien
   },
   {
       speciality: 'Children',
       image: Children
   }
]




export const servicesData = [
   {
       _id: 'lion',
       name: 'Mr. Lion',
       speciality: 'Lion',
       image: Lion,
       service: 'Lion that roars.',
       degree: 'MBBS',
       experience: '4 Years',
       about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, for...',
       fees: 50,
       address: {
           line1: '17th Cross, Richmond',
           line2: 'Circle, Ring Road, London'
       }
   },
   {
       _id: 'tiger',
       name: 'Miss Tiger',
       speciality: 'Tiger',
       image: Tiger,
       service: 'Tiger that hunts.',
       degree: 'MBBS',
       experience: '3 Years',
       about: 'Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...',
       fees: 60,
       address: {
           line1: '17th Cross, Richmond',
           line2: 'Circle, Ring Road, London'
       }
   },
   {
       _id: 'bear',
       name: 'Dr. Bear',
       speciality: 'Bear',
       image: Bear,
       service: 'Bear that eats.',
       degree: 'Likes hugs',
       experience: '1 Year',
       about: 'Has a strong commitment to delivering hugs, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...',
       fees: 30,
       address: {
           line1: '17th Cross, Richmond',
           line2: 'Circle, Ring Road, London'
       }
   },
   {
       _id: 'trex',
       name: 'Sir T-Rex',
       speciality: 'Trex',
       image: Trex,
       service: 'T-Rex that rises from extinction.',
       degree: 'MBBS',
       experience: '1 Years',
       about: 'Dr. Patel has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...',
       fees: 30,
       address: {
           line1: '17th Cross, Richmond',
           line2: 'Circle, Ring Road, London'
       }
   },
   {
       _id: 'alien',
       name: 'Xotaru',
       image: Alien,
       speciality: 'Alien',
       service: 'Alien that abducts.',
       degree: 'MBBS',
       experience: '1 Years',
       about: 'Dr. Patel has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...',
       fees: 30,
       address: {
           line1: '17th Cross, Richmond',
           line2: 'Circle, Ring Road, London'
       }
   },
   {
       _id: 'children',
       name: 'Party of Friends',
       speciality: 'Children',
       image: Children,
       service: 'Schedule a party!',
       degree: 'MBBS',
       experience: '4 Years',
       about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...Dr. Larson has a strong commitment to delivering comprehensive medical care, for...',
       fees: 50,
       address: {
           line1: '17th Cross, Richmond',
           line2: 'Circle, Ring Road, London'
       }
   }
]
