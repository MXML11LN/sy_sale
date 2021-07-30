import React from "react"
import "./../common/reset.css"
import "./../common/style.css"

import products from "./products"
import Product from "./Product"

const App = () =>{
    return(
        <>
            <div className="wrapper">
                <div className="products-container">
                    <div className="products-row">
                        {
                            products.map(({
                                id,
                                name,
                                description,
                                price,
                                image,
                                large,
                            })=>(
                                <Product key={id}
                                    id={id}
                                    name={name}
                                    description={description}
                                    price={price}
                                    image={image}
                                    large={large}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default App