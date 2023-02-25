import React, {useState,useEffect} from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import './shop.css'



export const Shop = () => {

  /*  const [ dataShop, setDataShop ] = useState([]) 
      useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=')
        .then(res=>res.json())
        .then(data=>setDataShop(data.result))
    }, [])
*/

    return(
        <div className="shop">
        {/*{setDataShop.map()}*/}
            <div className="products">
            {PRODUCTS.map((product) => ( <Product data={product}/>)
           )}
            </div>
        </div>
    )
}