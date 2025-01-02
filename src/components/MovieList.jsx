import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const {
    movies,
    handleAddStar,
    handleDecreaseStar,
    handleToggleFav,
    handleToggleCart,
  } = props;

  return (
    <div className="main">
      {movies
        ? movies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              addStar={() => handleAddStar(index)}
              decreaseStar={() => handleDecreaseStar(index)}
              toggleFav={() => handleToggleFav(index)}
              toggleCart={() => handleToggleCart(index)}
            />
          ))
        : "No movie"}
    </div>
  );
};

// export class MovieList extends Component {
//   render() {
//     const {
//       movies,
//       handleAddStar,
//       handleDecreaseStar,
//       handleToggleFav,
//       handleToggleCart,
//     } = this.props;

//     return (
//       <div className="main">
//         {movies
//           ? movies.map((movie, index) => (
//               <MovieCard
//                 key={index}
//                 movie={movie}
//                 addStar={()=>handleAddStar(index)}
//                 decreaseStar={()=>handleDecreaseStar(index)}
//                 toggleFav={()=>handleToggleFav(index)}
//                 toggleCart={()=>handleToggleCart(index)}
//               />
//             ))
//           : "No movie"}
//       </div>
//     );
//   }
// }

export default MovieList;
