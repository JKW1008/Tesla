import styled from "styled-components";
import Logo from "./logo.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: black;
`;

const GlobalNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 20px;
  height: 80px;
  align-items: center;
  position: fixed;
  background-color: none;
  z-index: 99;
`;

const SmallNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  div {
    height: 40px;
    padding: 0 15px;
    padding-top: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgba(100, 100, 100, 0.1);
      border-radius: 3px;
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <GlobalNav>
        <div id="logo">
          <img src={Logo} width="120px" alt="logo" />
        </div>
        <SmallNav>
          <div>Model S</div>
          <div>Model 3</div>
          <div>Model X</div>
          <div>Model Y</div>
          <div>Cybertruck</div>
          <div>Powerwall</div>
        </SmallNav>
        <SmallNav>
          <div>Shop</div>
          <div>계정</div>
          <div>메뉴</div>
        </SmallNav>
      </GlobalNav>
    </Container>
  );
}
