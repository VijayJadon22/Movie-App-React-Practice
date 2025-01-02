import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  height: 50px;
  width: 100%;
  background-color: rgb(70, 150, 197);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  position: fixed;
`;

const Title = styled.div`
  font-size: 25px;
  color: white;
  margin-left: 10px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const CartCount = styled.span`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: ${(props) => props.backgroundColor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  position: absolute;
  right: 35px;
  top: 4px;
  font-size: 10px;
  font-weight: 600;
`;

const CartContainer = styled.div`
  margin: 5px;
  padding-top: 5px;
  padding-right: 30px;
`;

const CartImage = styled.img`
  width: 40px;
`;

export class NavBar extends Component {
  render() {
    const { cartCount } = this.props;
    return (
      <Nav>
        <Title>Moviemania</Title>
        <CartContainer>
          <CartImage
            src="https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png"
            alt="cart-image"
          />
          <CartCount backgroundColor="orange" show={true}>
            {cartCount}
          </CartCount>
        </CartContainer>
      </Nav>
    );
  }
}

// const styles = {
//   nav: {
//     height: "60px",
//     width: "100%",
//     backgroundColor: "rgb(70, 150, 197)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0px 10px",
//   },
//   cartContainer: {
//     margin: "5px",
//     paddingRight: "30px",
//   },
//   cartCount: {
//     backgroundColor: "orange",
//     // width:"20px",
//     // height:"20px",
//     borderRadius: "50%",
//     padding: "2px 8px",
//   padding: 2px 7px;
//     textAlign: "center",
//     position: "fixed",
//     right: "30px",
//     top: "5px",
//   },
// };

export default NavBar;
