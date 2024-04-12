import NavBar from './MovieFile/NavBar'
import { Component } from "react";
import movie from './MovieFile/MovieData'
import MovieList from './MovieFile/MovieList';
class App extends Component {
  constructor (){
    super();
    this.state={
      movie,
      TotalAddToCart:0,
      TotalAddToFav:0,

    }
  }
    
  addStar=(i)=>{ 
      const{movie}=this.state;
      const mid=movie.indexOf(i);
      if(movie[mid].Star>=5){
          return;
      }
      this.setState({Star:movie[mid].Star+=1});
  }
  subtractStar=(i)=>{ 
    const{movie}=this.state;
    const mid=movie.indexOf(i);
    if(movie[mid].Star<=0){
        return;
    }
    this.setState({Star:movie[mid].Star-=1});
}

favButton=(i)=>{
  let {movie,TotalAddToFav}=this.state;
   const mid=movie.indexOf(i);
   movie[mid].Fav=!movie[mid].Fav;
   if(movie[mid].Fav){
    TotalAddToFav+=1;
   }else{
    TotalAddToFav-=1;
   }
   this.setState({
    movie:movie,
    TotalAddToFav:TotalAddToFav
   })
}

cartButton=(i)=>{
  let {movie,TotalAddToCart}=this.state;

  const mid=movie.indexOf(i);
  movie[mid].Cart=!movie[mid].Cart;

    if(movie[mid].Cart){
      TotalAddToCart+=1;
    }else{
      TotalAddToCart-=1;
    }
    this.setState({
      movie:movie,
      TotalAddToCart:TotalAddToCart
    })

 
}
  render(){
    const{movie, TotalAddToCart, TotalAddToFav}=this.state;
    
      return (
          <>
              <NavBar TotalAddToCart={TotalAddToCart}
                    TotalAddToFav={TotalAddToFav}
              />
              <MovieList 
                addStar={this.addStar}
                subtractStar={this.subtractStar}
                favButton={this.favButton}
                cartButton={this.cartButton}
                movie={movie}
                />
          </>
        )
      }
}

export default App;
