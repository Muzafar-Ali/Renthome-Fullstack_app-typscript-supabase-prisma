import { AmenitiesType, CategoryType, OverViewType } from "./types";

import wifi from "@/utils/SVG_Amenities/wifi.svg";
import tv from "@/utils/SVG_Amenities/tv.svg";
import kitchen from "@/utils/SVG_Amenities/kitchen.svg";
import washer from "@/utils/SVG_Amenities/washer.svg";
import parking from "@/utils/SVG_Amenities/parking.svg";
import paidParking from "@/utils/SVG_Amenities/paidParking.svg";
import aircondition from "@/utils/SVG_Amenities/aircondition.svg";
import workspace from "@/utils/SVG_Amenities/workspace.svg";
import pool from "@/utils/SVG_Amenities/pool.svg";
import hotTub from "@/utils/SVG_Amenities/hotTub.svg";
import outdoorDining from "@/utils/SVG_Amenities/outdoorDining.svg";
import firepit from "@/utils/SVG_Amenities/firepit.svg";
import poolTable from "@/utils/SVG_Amenities/poolTable.svg";
import indoorFire from "@/utils/SVG_Amenities/indoorFire.svg";
import piano from "@/utils/SVG_Amenities/piano.svg";
import excerciseEquipment from "@/utils/SVG_Amenities/excerciseEquipment.svg";
import lakeAccess from "@/utils/SVG_Amenities/lakeAccess.svg";
import beachAccess from "@/utils/SVG_Amenities/beachAccess.svg";
import ski from "@/utils/SVG_Amenities/ski.svg";
import outdoorShower from "@/utils/SVG_Amenities/outdoorShower.svg";
import smokeAlarm from "@/utils/SVG_Amenities/smokeAlarm.svg";
import firstAid from "@/utils/SVG_Amenities/firstAid.svg";
import fireExtinguisher from "@/utils/SVG_Amenities/fireExtinguisher.svg";
import carboMonoOxideAlarm from "@/utils/SVG_Amenities/carboMonoOxideAlarm.svg";


export const categoryItems: CategoryType[] = [
    {
      id: 0,
      name: "beach",
      description: "This Property is close to the Beach.",
      title: "Beach",
      imageUrl: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
      id: 1,
      name: "trending",
      description: "This is a Property which is trending.",
      title: "Trending",
      imageUrl: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    },
    {
      id: 2,
      name: "beachfront",
      description: "This is a Property is close to the beachfront",
      title: "Beachfront",
      imageUrl: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    },
    {
      id: 3,
      name: "earthhome",
      description: "This Property is considerd a Earth Home",
      title: "Earth Home",
      imageUrl: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    },
    {
      id: 4,
      name: "luxe",
      description: "This Property is considerd Luxorious",
      title: "Luxe",
      imageUrl: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    },
    {
      id: 5,
      name: "hanoks",
      description: "Top of the world properties with breathtaking views.",
      title: "Hanoks",
      imageUrl: "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg",
    },
    {
      id: 6,
      name: "design",
      description: "This property puts a big focus on design ",
      title: "Design",
      imageUrl: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    },
    {
      id: 7,
      name: "pool",
      description: "This property has an amazing Pool",
      title: "Pool",
      imageUrl: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
    {
      id: 8,
      name: "tiny",
      description: "This property is considered a tiny home",
      title: "Tiny Home",
      imageUrl: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
    },
    {
      id: 9,
      name: "historic",
      description: "This Property is considered historic",
      title: "Historic Home",
      imageUrl: "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    },
    {
      id: 10,
      name: "countryside",
      description: "This Property is located on the countryside",
      title: "Countryside",
      imageUrl: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    },
    {
      id: 11,
      name: "omg",
      description: "This Property has a wow factor",
      title: "WOW!",
      imageUrl: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    },
    {
      id: 12,
      name: "surfing",
      description: "This Property is located near to a surfing spot",
      title: "Surfing",
      imageUrl:"https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    },
    {
      id: 13,
      name: "tropical",
      description: "This Property is located near to a tropical spot",
      title: "Surfing",
      imageUrl:"https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    },
    {
      id: 14,
      name: "castle",
      description: "This property is a majestic castle, offering a blend of history, architecture, and grandeur.",
      title: "Castle",
      imageUrl: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    },
    {
      id: 15,
      name: "amazingView",
      description: "This property has an amazing View",
      title: "Amazing View",
      imageUrl: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
     },
     {
      id: 16,
      name: "lakefront",
      description: "Direct lake access, perfect for water lovers.",
      title: "Lakefront",
      imageUrl: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
     },
     {
      id: 17,
      name: "islands",
      description: "Your private island getaway, perfect for unforgettable adventures.",
      title: "Islands",
      imageUrl: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
     },
     {
      id: 18,
      name: "rooms",
      description: "Comfy, cozy rooms for a restful stay. Ideal for solo travelers, couples, or small groups.",
      title: "Rooms",
      imageUrl: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
     },
     {
      id: 19,
      name: "iconicCities",
      description: "Experience the heart of iconic cities, each with its own unique charm and history.",
      title: "Iconic cities",
      imageUrl: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
     },
     {
      id: 20,
      name: "farms",
      description: "Relax in the countryside, close to nature.",
      title: "Farms",
      imageUrl: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
     },     
     {
      id: 21,
      name: "ski-in/out",
      description: "Relax in the countryside, close to nature.",
      title: "Ski-in/out",
      imageUrl: "https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg",
     }     
     
  ];
  
  export const overView: OverViewType[]  = [
    {
      id: 1,
      title: "Tell us about your place",
      description: "Share some basic info, like where it is and how many guests can stay.",
      imageUrl: "https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg"
    },
    {
      id: 2,
      title: "Make it stand out",
      description: "Add 5 or more photos plus a title and description—we’ll help you out.",
      imageUrl: "https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg"
    },
    {
      id: 3,
      title: "Finish up and publish",
      description: "Choose if you'd like to start with an experienced guest, set a starting price, and publish your listing.",
      imageUrl: "https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg"
    },
  ]

  export const amenities: AmenitiesType[]  = [
    {
      id: 1,
      name: "wifi",
      title: "Wifi",
      imageUrl: wifi,
    },
    {
      id: 2,
      name: "tv",
      title: "TV",
      imageUrl: tv,
    },
    {
      id: 3,
      name: "kitchen",
      title: "Kitchen",
      imageUrl: kitchen,
    },
    {
      id: 4,
      name: "washer",
      title: "Wahser",
      imageUrl: washer,
    },
    {
      id: 5,
      name: "freeParking",
      title: "Free parking on premises",
      imageUrl: parking,
    },
    {
      id: 6,
      name: "paidParking",
      title: "Paid parking on premises",
      imageUrl: paidParking,
    },
    {
      id: 7,
      name: "aircondition",
      title: "Air conditioning",
      imageUrl: aircondition,
    },
    {
      id: 8,
      name: "workspace",
      title: "Dedicated workspace",
      imageUrl: workspace,
    },
  ]

  export const standout_amenities: AmenitiesType[]  = [
    {
      id: 1,
      name: "pool",
      title: "Pool",
      imageUrl: pool,
    },
    {
      id: 2,
      name: "hotTub",
      title: "Hot tub",
      imageUrl: hotTub,
    },
    {
      id: 3,
      name: "OutdoorDining",
      title: "Outdoor dining area",
      imageUrl: outdoorDining,
    },
    {
      id: 4,
      name: "firePit",
      title: "Fire pit",
      imageUrl: firepit,
    },
    {
      id: 5,
      name: "poolTable",
      title: "Pool table",
      imageUrl: poolTable,
    },
    {
      id: 6,
      name: "indoorFireplace",
      title: "Indoor fireplace",
      imageUrl: indoorFire,
    },
    {
      id: 7,
      name: "piano",
      title: "Piano",
      imageUrl: piano,
    },
    {
      id: 8,
      name: "exerciseEquipment",
      title: "Exercise equipment",
      imageUrl: excerciseEquipment,
    },
    {
      id: 9,
      name: "lakeAccess",
      title: "Lake access",
      imageUrl: lakeAccess,
    },
    {
      id: 10,
      name: "beachAccess",
      title: "Beach access",
      imageUrl: beachAccess,
    },
    {
      id: 11,
      name: "Ski-in-out",
      title: "Ski-in/Ski-out",
      imageUrl: ski,
    },
    {
      id: 12,
      name: "outdoorShower",
      title: "Outdoor shower",
      imageUrl: outdoorShower,
    },

  ]

  export const safetyItems: AmenitiesType[]  = [
    {
      id: 1,
      name: "smokeAlarm",
      title: "Smoke alarm",
      imageUrl: smokeAlarm,
    },
    {
      id: 2,
      name: "FirstAidKit",
      title: "First aid kit",
      imageUrl: firstAid,
    },
    {
      id: 3,
      name: "fireExtinguisher",
      title: "Fire extinguisher",
      imageUrl: fireExtinguisher,
    },
    {
      id: 4,
      name: "carboMonoOxideAlarm",
      title: "Carbon monoxide alarm",
      imageUrl: carboMonoOxideAlarm,
    },
  ]


  