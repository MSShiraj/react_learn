import React from "react";

function Home(){

    return(
        <div className="Home">
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cartsmania.com/wp-content/uploads/2022/07/48_1_add0a267-dc12-46de-867f-a8ab3fef7b44.jpg" alt="iPhone 14" />
                </div>
                <div className="text-wrapper item">
                    <span>iPhone 14</span>
                    <span>Price $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;