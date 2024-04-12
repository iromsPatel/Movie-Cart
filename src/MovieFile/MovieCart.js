import React from 'react'
class MovieCart extends React.Component{
    render(){
        const{Title,Plot,Price,Rating,Star,Fav,Cart, Poster}=this.props.movie;
        return(
        <>
            <div className='main'>
                <div className='movie-card'>
                <div className='left'>
                   <img src={Poster} alt='Poster'></img>
                </div>

                <div className='right'>
                   <div className='title'>{Title}</div> 
                   <div className='plot'>{Plot}</div>
                   <div className='price'>Rs:{Price}</div>
                   <div className='footer'>
                        <div className='rating'>{Rating}</div>

                        <div className='star-dis'>
                        
                            <img className='str-btn'  src='https://cdn-icons-png.flaticon.com/128/149/149163.png' alt='dec-btn' onClick={()=>this.props.subtractStar(this.props.movie)}/>

                            <img className='stars' src='https://cdn-icons-png.flaticon.com/128/477/477406.png' alt='stars'/>

                             {/* Bind Method 2 and 3*/}
                            <img className='str-btn'  src='https://cdn-icons-png.flaticon.com/128/814/814208.png' alt="ins-btn" onClick={()=> this.props.addStar(this.props.movie)} />

                            <span className='starCount'>{Star}</span>
                           
                        </div>

                        <button  onClick ={()=>this.props.favButton(this.props.movie)} className={Fav?'favourite-btn':'unfavourite-btn'}>
                            {Fav?"Favourite":"Un-Favourite"}</button>

                        <button className='cart-btn' onClick={()=>this.props.cartButton(this.props.movie)}>{Cart?"Remove the Cart":"Add the Cart"}</button>

                    </div>
                </div>
                </div>
            </div>
        </>
    )}
}

export default MovieCart;


