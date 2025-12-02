import React from 'react'
import './Dinneoutpge.css'
import Products from '../Componant/Productitem/Products'
import FoodPage from '../Itemspage/FoodPage'
import Nav from '../Componant/NavSec/Nav'
import Foote from '../Componant/Footer/Foote'
const Dinneoutpge = () => {

    const dinneout=[{image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1695703679/eed0705b0755d7adfb77f07b17ddfc06.webp",
    proname:"Moti Mahal Delux Restaurant",
    desc:"Sitabuldi, Nagpur",
    price:"800"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1702476136/457e5b06a12405197229d3df953b71c2.jpg",
    proname:"Skylite Lounge",
    desc:"Fortune Mall, Sitabuldi, Nagpur",
    price:"900"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1702476141/8270b6b9ac96f21d634ea78bb5b15c32.jpg",
    proname:"The Opera House",
    desc:"Sitabuldi, Nagpur",
    price:"1000"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/4/27/17ddea1a-f9e3-4626-a805-597ce84462fd_image151b7af1cb05f49d1811af975a7e26778.JPG",
    proname:"Nanking's",
    desc:"Civil Lines, Nagpur",
    price:"2000"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/4/27/f5d99f07-398a-4e64-a273-d112ccf6bf96_image11542c5151a6f145e1b14710528cbd55cc.JPG",
    proname:"Hotel Dwarkamai",
    desc:"Sri Sainath Enclave, Gandhibagh, Nagpur",
    price:"1200"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/5/30/87365ffb-7bc3-4545-9524-1072ad45568e_20240530T123529867.jpg",
    proname:"Amaira",
    desc:" VCA Stadium Complex, Civil Lines, Nagpur",
    price:"1300"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/5/30/cb5c37f7-7ec7-4bdb-9f70-5d9e6877461c_20240530T123528217.jpg",
    proname:"Moksh - The Restro lounge",
    desc:"Sitabuldi, Nagpur",
    price:"1500"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/10/20/0b4935af-0335-4134-b838-6852939f75ae_image241fdb66e2cfc143e7bf02bd198a0f8fd1.JPG",
    proname:"The Salt - All Day Brew",
    desc:"Fast Food Shivaji Nagar",
    price:"1000"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/10/20/1c3919d5-58fd-4b98-9a80-bcca6ca9aef6_image27cff2436a2a3f4a899e0ab28892b35a4e.JPG",
    proname:"The East India Company - The Restro Lounge",
    desc:"Sadar, Nagpur",
    price:"1100"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/27/5e4a48bf-c0cd-4f1c-950e-601b291be388_2c1063d3433b466e97fabb3531b4ca42.JPG",
    proname:"Acp Express Restaurant by Airport Centre Point",
    desc:"Kamptee, Nagpur",
    price:"3000"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/26/1c46c944-6058-4518-b198-9e589b777771_image1680077c0a1ac646ecb4b397d896c0381a.JPG",
    proname:"Krishnum Food Plaza",
    desc:"Wardha Road, Nagpur",
    price:"1700"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/5/34ee8a18-ade2-48cc-b8a6-a9f8fce17b7b_image15e45659d91ec842c095b274a0ddc8db93.JPG",
    proname:"Penthaus By Hotel Brijin",
    desc:"Ganespeth Nagpur",
    price:"1800"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/5/b124aec1-3a0a-4a7d-83c7-ca73367e4b3a_image84cf8dcacc039464cb65b6b59beb290f4.JPG",
    proname:"Tds Restro Lounge",
    desc:"Milestone Building, Ramdaspeth, Nagpur",
    price:"3000"
  },
  {image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/5/c853e2a7-c347-47a4-9d79-4bba37333739_image95fc05b4294a74f0eb845bf0472bcbc25.JPG",
    proname:"KNS",
    desc:"Wadi, Nagpur",
    price:"1000"
  },
]
  return (
    <>
    <nav>
        <Nav></Nav>
    </nav>
    <section>
        <div className='dinneoutpge-sec'>
      <div className="template-sec">
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png'></img>
      </div>
      <Products data={dinneout}  description={`Best Dinnout options near you.`}
            itemname="Dinneout"
            total={dinneout.length}></Products>
    </div>
    </section>
    <footer>
        <Foote></Foote>
    </footer>
    </>
    
  )
}

export default Dinneoutpge
