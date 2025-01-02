import { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import { movies } from './MovieData.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    }
    // this.addStar = this.addStar.bind(this);
  }
  // addStar() {
  //     this.setState({
  //         star: this.state.star + 0.5,
  //     })
  // }

  // addStar = (index) => {
  //   this.setState((prevState) => {
  //     const movies = [...prevState.movies];
  //     if (movies[index].star < 5) {
  //       movies[index].star += 0.5;
  //     }
  //     return { movies };
  //   });
  // };

  handleAddStar = (index) => {
    console.log(index);
    const { movies } = this.state;
    if (movies[index].star < 5) {
      movies[index].star += 0.5;
    }
    this.setState({
      movies
    })
  };

  // decreaseStar = (index) => {
  //   this.setState((prevState) => {
  //     const movies = [...prevState.movies];
  //     if (movies[index].star > 0) {
  //       movies[index].star -= 0.5;
  //     }
  //     return { movies };
  //   });
  // };

  handleDecreaseStar = (index) => {
    const { movies } = this.state;
    if (movies[index].star > 0) {
      movies[index].star -= 0.5;
    }
    this.setState({
      movies
    });
  }

  // toggleFav = (index) => {
  //   this.setState((prevState) => {
  //     const movies = [...prevState.movies];
  //     movies[index].fav = !movies[index].fav;
  //     //   movies[index].fav = !prevState.movies[index].fav;
  //     return { movies };
  //   });
  // };

  handleToggleFav = (index) => {
    const { movies } = this.state;
    movies[index].fav = !movies[index].fav;
    this.setState({ movies });
  }

  // toggleCart = (index) => {
  //   this.setState((prevState) => {
  //     const movies = [...prevState.movies];
  //     movies[index].isInCart = !movies[index].isInCart;
  //     console.log("Toggling isInCart:", movies[index].isInCart);
  //     return { movies };
  //   });
  // };

  handleToggleCart = (index) => {
    let { movies, cartCount } = this.state;
    movies[index].isInCart = !movies[index].isInCart;
    if (movies[index].isInCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    this.setState({ movies, cartCount });
  }

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <NavBar cartCount={cartCount} />
        <div className="App">
          <MovieList movies={movies}
            handleAddStar={this.handleAddStar}
            handleDecreaseStar={this.handleDecreaseStar}
            handleToggleFav={this.handleToggleFav}
            handleToggleCart={this.handleToggleCart} />
        </div>
      </>
    );
  }
}

export default App;
