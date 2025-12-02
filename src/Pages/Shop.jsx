import React from 'react'
import Products from '../Componant/Productitem/Products'

const Shop = () => {
  const product=[{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e18e58b3bbd76ee7e61bd8b41f4c3d3e",
    proname:"Samudra Veg (Saras Baug)",
    desc:"North Indian, South Indian, Biryani, Indian, Desserts, Punjabi, Beverages, Maharashtrian, Chinese Swargate",
    price:"50"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2jeywla2n5b8h25ey1p",
    proname:"SP's Biryani House",
    desc:"Biryani, Indian, Maharashtrian Sadashiv Peth",
    price:"230"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hazbzc5jngf17ir70jrr",
    proname:"Hotel Shreyas",
    desc:"Maharashtrian Deccan Gymkhana",
    price:"120"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gu4pv9hocafeeymyfkmk",
    proname:"Darshan",
    desc:"Italian, Chinese, Continental, Desserts, Chaat, Indian, Juices, Mexican Deccan Gymkhana",
    price:"200"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/15/b962745d-4e26-4b55-9497-57483b3f4cd8_803512.JPG",
    proname:"Third Wave Coffee",
    desc:"Beverages, Bakery, Continental Shivajinagar",
    price:"245"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/6/fff74e3b-53e8-4afe-abf2-d3fc73e27b3c_558832.JPG",
    proname:"HRX by EatFit",
    desc:"Healthy Food, Salads, Burgers Shivajinagar",
    price:"330"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/11/321322d1-10f3-40e6-b9c5-32a79e9ca122_1053725.JPG",
    proname:"Honest Bowl",
    desc:"North Indian, High Protein, Biryani Shaniwar Peth",
    price:"190"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/9/65a84d8b-bd49-4e1f-834e-a14094e6df03_362543.jpg",
    proname:"Fish Curry Rice",
    desc:"Indian Sadashiv Peth",
    price:"130"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sqmfi1mtywlijrclu57y",
    proname:"Banglore Iyanger Bakery",
    desc:"Bakery, Desserts Senapati Bapat Road",
    price:"530"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vnl8qkwxzeejwacwdjxx",
    proname:"Ishan Pure Veg",
    desc:"North Indian, South Indian, Beverages, Chinese Shivaji Nagar",
    price:"270"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/seac55qi9szg91qp7skw",
    proname:"Oregano",
    desc:"North Indian, Punjabi Shivaji Nagar",
    price:"170"
  },{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a4ffed13eb197c6df43dfe1c756560e5",
    proname:"Behrouz Biryani",
    desc:"Biryani, North Indian, Kebabs, Mughlai, Beverages, Dessert Shaniwar Peth",
    price:"430"
  },{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/emfusvdhyjo1axlpd4na",
    proname:"Kok Pa Chinese",
    desc:"Chinese, Asian Deccan Gymkhana",
    price:"249"
  },{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/1/20/f4e2f76e-9d17-461c-a6cf-15c10e159bc9_e5ce18f4-775f-48f7-b6aa-37170abf0b89.jpg",
    proname:"Panchali Restaurant",
    desc:"Indian JM Road",
    price:"330"
  }, {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/6f47bc5a-30e4-4152-938d-a79912ae2acf_18808.JPG",
    proname:"Faasos - Wraps, Rolls & Shawarma",
    desc:"Kebabs, Fast Food, Snacks, American, Healthy Food, Desserts, Beverages Shaniwar Peth",
    price:"249"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/7/17/b47cad4c-ddec-4e6f-81f5-0501d2983b5e_b404f5bc-5a7d-4e14-9c24-0b1a8a4c6043.png_compressed",
    proname:"Rolls On Wheels - Shawarma & Wraps",
    desc:"Rolls & Wraps, Snacks, Fast Food, North Indian Prabhat Road",
    price:"300"
  },{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/23/6e51c639-2eb2-4f21-9d2a-e95c9bc7c5b7_047ce6b4-0446-4b49-8c22-9feddc719d08.jpg",
    proname:"Home Plate by EatFit",
    desc:"North Indian, Punjabi, Home Food Shivaji Nagar",
    price:"300"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/1dd908ae-b81d-4896-8b59-80b70d76b4b0_750338.jpg",
    proname:"Daily Kitchen - Everyday Home",
    desc:"Home Food, Indian, North Indian, Thalis SB Road",
    price:"280"
  }, {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/7/21/c6423d8f-d586-4c69-b1b3-6b55fe36d9e0_f24f8744-786f-4a19-a69c-baad9f8b611d.jpg",
    proname:"EatFit",
    desc:"Chinese, Healthy Food, Tandoor, Pizzas, North Indian, Thalis, Biryani Shivajinagar",
    price:"300"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/12/05c329d4-be4a-4aa2-910c-3094436f93d6_8718f1b2-93f2-40f4-afd4-dd83821d061e.jpg",
    proname:"Madras Curd Rice Company",
    desc:"South Indian, Indian Shivaji Nagar",
    price:"280"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e24989a56528ee8b18f2b642fcb25c1e",
    proname:"Global Punjab",
    desc:"North Indian, Mughlai, Tandoor, Chinese, Beverages Kothrud",
    price:"289"
  },{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/10/cb2243ad-5c8f-477a-849e-593703c08edd_3ed7e565-a2db-4e25-81fc-e4c7ce19cc4a_compressed",
    proname:"Third Wave Coffee",
    desc:"Beverages, Fast Food, Snacks Kothrud",
    price:"249"
  },{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/1c3eb36c-0620-466f-be6f-c95ae65a74e1_288388.JPG",
    proname:"Starbucks Coffee",
    desc:"Beverages, Cafe, Snacks, Desserts, Bakery, Ice Cream F.C. Road",
    price:"289"
  }, {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fyg9qf4t8vuzpa5fvyn8",
    proname:"Yenna Dosa",
    desc:"South Indian Bibwewadi",
    price:"30"
  }, {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/5/27/6ff213eb-bdcd-4060-96ab-1c6e63a7bdbc_6071d35b-9987-411c-9c1a-e9f257ee3a03.jpg",
    proname:"Tea Post",
    desc:"Tea, Coffee, Snacks, Gujarati Patil Road",
    price:"249"
  },{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/2/15/3cae2d26-ea17-422e-9b03-ab5147d979e4_cc59542f-9895-4499-9bb4-25027158e20a.jpg",
    proname:"Madras Curd Rice Company",
    desc:"South Indian, Indian Shivaji Nagar",
    price:"115"
  },{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/16/7437fe30-bb70-4404-83f2-a3f411c1cc59_625857.JPG",
    proname:"Haldiram's Sweets and Namkeen",
    desc:"Sweets, Desserts, indian snacks, Snacks Deccan Gymkhana",
    price:"559"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/4/13472f65-adaf-43c2-9ecf-3df9b9632882_695670.JPG",
    proname:"Ovenfresh Cakes And Desserts",
    desc:"Bakery, Desserts, Beverages, Ice Cream, Sweets, Juices, Bengali, Pizzas Shivaji Naga",
    price:"530"
  }, {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/1dd908ae-b81d-4896-8b59-80b70d76b4b0_750338.jpg",
    proname:"Daily Kitchen - Everyday Home",
    desc:"Home Food, Indian, North Indian, Thalis SB Road",
    price:"280"
  },{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/4f389302-1f17-40fa-883a-4d1c53f84b02_21001.JPG",
    proname:"Pizza Hut",
    desc:"Pizzas Shivajinagar",
    price:"300"
  }, {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/12/30/f8761cbd-bf2c-4a66-ae8c-555ea41aea73_691b1885-e101-4d25-86e6-240cd7ee0d4f.png",
    proname:"B Burger - Bigger Burger",
    desc:"Burgers, Fast Food, American, Beverages Kothrud",
    price:"150"
  },{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/1e52e80b-d514-46e4-ab51-c4a6d5174393_402930.JPG",
    proname:"Itminaan Matka Biryani - Slow Cooked",
    desc:"Biryani, Kebabs, North Indian Prabhat Road",
    price:"530"
  },
]
  return (
    <div>
     <Products data={product} description={`Best products options near you.`}
            itemname="All Items"
            total={product.length} time="true"></Products>
    </div>
  )
}

export default Shop
