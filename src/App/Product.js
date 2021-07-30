import React,{ useState } from "react";

const Product = ({
                id,
                name,
                description,
                price,
                image,
                large,
                })=>{

                    const [count, setCount] = useState(1);

                    const buyProductOnClick = (name,price,count) => {
                        let prodPrice = price.slice(0,3)
                        return alert(`total price = ${count * (+prodPrice)} of good ${name}`);
                    }
                    return(
                        <>
                            <div className="product-item" >
                                            <div className="product-status">NEW</div>
                                            <button className="add-to-cart"></button>
                                            <div className="image-container">
                                                <img src={image} alt={image} />
                                            </div>
                                            <div className="product-description">
                                                <h3 className="product-header">{name}</h3>
                                                <p className="product-info">{description}</p>
                                            </div>
                                            <form  className="product-specs"action="#">
                                                <div className="specs-row">
                                                    <div className="product-color">
                                                    <div class="menu">
                                                        <span class="title" onClick={}>Цвет</span>
                                                            <ul>
                                                                <li>Красный</li>
                                                                <li>Синий</li>
                                                                <li>Жедтий</li>
                                                            </ul>
                                                        </div>
                                                        <span className="color-select"></span></div>
                                                    <div className="product-price">{price}</div>
                                                </div>
                                                <div className="specs-row">
                                                    <div className="product-volume">
                                                        <label className="custom-radio">
                                                            <input id="volume100cl" name="volume" value="100" type="radio" defaultChecked/>
                                                            <span className= "product-price">100 мл </span>
                                                        </label>
                                                        <label className="custom-radio">
                                                            <input  id="volume200cl" name="volume"  value="200" type="radio"/>
                                                            <span className= "product-price">200 мл </span>
                                                        </label>
                                                        <label className="custom-radio">
                                                            <input  id="volume200cl" name="volume"  value="300" type="radio"/>
                                                            <span className= "product-price">300 мл </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="specs-row">
                                                    <div className="product-quantity"> 
                                                            <button className="quantity-plus"
                                                                disabled ={count<= 1 }
                                                                onClick={() => setCount(count - 1)}
                                                            >-</button>
                                                            <input type="text" className="quantity-value" readOnly
                                                                value={count}
                                                            />
                                                            <button className="quantity-minus"
                                                                disabled ={count>= 10 }
                                                                onClick={() => setCount(count + 1)}
                                                                >+</button>
                                                        </div>
                                                    <button 
                                                        onClick={()=> buyProductOnClick(name,price,count)}
                                                    className="product-buy">Купить</button>
                                                </div>
                                            </form>
                                        </div>
                        </>
                    )
                }

export default Product