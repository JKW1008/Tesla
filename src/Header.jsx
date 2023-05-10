import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  color: black;
`;

const GlobalNav = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      background-color: gray;
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <GlobalNav>
        <div>
          <img src={logo} width="160px" alt="logo" />
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
