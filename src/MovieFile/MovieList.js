
import { Component } from "react";
import MovieCart from "./MovieCart";
class MovieList extends Component{
    
    render(){
      const{movie, addStar,subtractStar,cartButton,favButton }=this.props; 
     
        return(
          
            <>
                {movie.map((movie,i)=>{
                  return(
                  <MovieCart 
                     movie={movie} 
                     addStar={addStar}
                     subtractStar={subtractStar}
                     cartButton={cartButton}
                     favButton={favButton}
                      key={i}/>

                )})}
            </>
        )
    }
}

export default MovieList;