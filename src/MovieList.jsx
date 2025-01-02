import React, { Component } from "react";
import MovieCard from "./MovieCard";

export class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "The Avengers",
          description:
            "The Asgardian Loki encounters the Other, the representative of an extraterrestrial race known as the Chitauri. In exchange for obtaining the Tesseract, a powerful energy source of unknown potential.",
          price: 199,
          poster:
            "https://th.bing.com/th/id/OIP.zNDZbJ1vd_HW_D_3F1zaYgHaLH?rs=1&pid=ImgDetMain",
          rating: 8.5,
          star: 0,
          fav: false,
          isInCart: false,
        },
        {
          title: "The Shawshank Redemption",
          description:
            "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
          price: 99,
          poster:
            "https://th.bing.com/th/id/OIP.yobjBRMMdekQvZwGHeebKgHaLH?rs=1&pid=ImgDetMain",
          rating: 9.0,
          star: 0,
          fav: false,
          isInCart: false,
        },
        {
          title: "The Dark Knight",
          description:
            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          price: 299,
          poster:
            "https://th.bing.com/th/id/OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH?rs=1&pid=ImgDetMain",
          rating: 8.0,
          star: 0,
          fav: false,
          isInCart: false,
        },
      ],
    };
    // this.addStar = this.addStar.bind(this);
  }
  // addStar() {
  //     this.setState({
  //         star: this.state.star + 0.5,
  //     })
  // }

  addStar = (index) => {
    this.setState((prevState) => {
      const movies = [...prevState.movies];
      if (movies[index].star < 5) {
        movies[index].star += 0.5;
      }
      return { movies };
    });
  };

  decreaseStar = (index) => {
    this.setState((prevState) => {
      const movies = [...prevState.movies];
      if (movies[index].star > 0) {
        movies[index].star -= 0.5;
      }
      return { movies };
    });
  };

  toggleFav = (index) => {
    this.setState((prevState) => {
      const movies = [...prevState.movies];
      movies[index].fav = !movies[index].fav;
      //   movies[index].fav = !prevState.movies[index].fav;
      return { movies };
    });
  };

  toggleCart = (index) => {
    this.setState((prevState) => {
      const movies = [...prevState.movies];
      movies[index].isInCart = !movies[index].isInCart;
      console.log("Toggling isInCart:", movies[index].isInCart);
      return { movies };
    });
  };

  render() {
    const movies = this.state.movies;
    return (
      <div className="main">
        {movies
          ? movies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
                addStar={() => this.addStar(index)}
                decreaseStar={() => this.decreaseStar(index)}
                toggleFav={() => this.toggleFav(index)}
                toggleCart={() => this.toggleCart(index)}
              />
            ))
          : "No movie"}
      </div>
    );
  }
}

export default MovieList;
