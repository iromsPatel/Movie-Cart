import { Component } from "react";
class NavBar extends Component{
    
    render(){
        const{TotalAddToCart, TotalAddToFav}=this.props;
        return(
            <>
              {/* <h1> {TotalAddToCart}</h1>  */}

              <div className="nav">
                    <h1 className="nav_title"> Movie World </h1>
                    <div>
                        <img  className="imgView"src="https://cdn.iconscout.com/icon/premium/png-512-thumb/favorite-cart-8698260-7009897.png?f=webp&w=256" alt="FavMoive" />
                        <span className="valDisplay"> {TotalAddToFav}</span>
                        <img className="imgView"src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-9-87301.png?f=webp&w=256" alt="TotalCart" />
                        <span className="valDisplay">{TotalAddToCart} </span>   
                    </div>
              </div>
            </>
        )
    }
}

export default NavBar;