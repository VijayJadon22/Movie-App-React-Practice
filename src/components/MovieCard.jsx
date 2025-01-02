import React, { Component } from "react";

class MovieCard extends Component {

    render() {
        // console.log(this.props);
        const { title, description, poster, price, rating, star, fav, isInCart } = this.props.movie;
        const { addStar, decreaseStar, toggleFav, toggleCart } = this.props;
        return (
            <div className="main-container">
                <div className="left-container">
                    <img className="movie-poster" src={poster} alt="poster" />
                </div>
                <div className="right-container">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Rs: {price}</p>
                    <div className="card-footer">
                        <div>Rating: {rating}</div>
                        <div className="star-container">
                            <img onClick={decreaseStar} src="https://www.pngarts.com/files/3/Minus-PNG-Free-Download.png" alt="minus-sign" className="minus-sign" />
                            <img className="star-image" src="https://icon-library.com/images/rating-star-icon-png/rating-star-icon-png-8.jpg" alt="star-image" />
                            <img onClick={addStar} src="https://th.bing.com/th/id/R.6de1e0c57b8f64ed47f9aee9e5084f69?rik=Tqd1FJNFEFvdxA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-plus-sign-plus-sign-comments-980.png&ehk=1AcmQVGxFuJQaiuh85Nouw4b3dPsF0NbJmnU8XnmWJ4%3d&risl=&pid=ImgRaw&r=0" alt="plus-sign" className="plus-sign" />
                            <div className="star-count"> {star}</div>
                        </div>
                        <div className="btn-container">
                            <button onClick={toggleFav} className={fav ? "unfavourite" : "favourite"}>{fav ? "Unfavourite" : "Favourite"}</button>
                            <button onClick={toggleCart} className={isInCart ? "remove-cart-btn" : "add-to-cart-btn"}>{isInCart ? "Remove" : "Add to cart"}</button></div>
                    </div>
                </div>
            </div>
        )
    }
};

export default MovieCard;