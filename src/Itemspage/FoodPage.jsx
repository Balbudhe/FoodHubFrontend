import React from 'react'
import Nav from '../Componant/NavSec/Nav'
import Products from '../Componant/Productitem/Products'
import Foote from '../Componant/Footer/Foote'
import { useParams } from 'react-router-dom'
import foods from './Foods';

const FoodPage = () => {
    const {foodname}=useParams();
    const data=foods[foodname];

  //   if (!data) {
  //   return <h2 style={{ textAlign: "center", marginTop: "40px" }}>No items found 😕</h2>
  // }
    const displayName=foodname.charAt(0).toUpperCase() + foodname.slice(1);
  return (
    <div>
      <nav>
        <Nav></Nav>
      </nav>
      <section>
        {
          !data ?
          <h2 style={{ textAlign: "center", marginTop: "55px",paddingBottom:"4rem" }}>No items found 😕</h2>
          :
          <Products data={data}  description={`Best ${displayName} options near you.`}
            itemname={displayName}
            total={data.length} time="true" ></Products>
        }
        
      </section>
      <footer>
        <Foote></Foote>
      </footer>
    </div>
  )
}

export default FoodPage
