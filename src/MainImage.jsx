import styled from "styled-components";

const ContainerImage = styled.div`
width: 100%:
height: 80vh;
overflow: hidden;
position: relative;
#box {
    position: relative;
}
`;

const MainImages = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`;

const MainTitle = styled.div`
  position: absolute;
  color: black;
  padding: 10px;
  font-size: 35px;
  z-index: 9999;
  top: -600px;
`;

const SubTitle = styled.div`
  position: absolute;
  color: black;
  padding: 10px;
  font-size: 15px;
  left: 23%;
  text-decoration: underline;
`;

const TextBox = styled.div`
  width: 300px;
  position: absolute;
  left: 45%;
  &:hover {
    background-color: rgba(125, 125, 125, 0.1);
  }
`;

export default function MainImage() {
  return (
    <ContainerImage>
      <div id="box">
        <MainImages src="./images/bgImg1.jpg" />
        <TextBox>
          <MainTitle>
            <div>Model Y</div>
            <SubTitle>
              <div>시승 신청</div>
            </SubTitle>
          </MainTitle>
        </TextBox>
      </div>
      <div id="box">
        <MainImages src="./images/bgImg2.jpg" />
        <TextBox>
          <MainTitle>
            <div>Model 3</div>
            <SubTitle>
              <div>시승 신청</div>
            </SubTitle>
          </MainTitle>
        </TextBox>
      </div>
      <div id="box">
        <MainImages src="./images/bgImg3.jpg" />
        <TextBox>
          <MainTitle>
            <div>Model X</div>
            <SubTitle>
              <div>시승 신청</div>
            </SubTitle>
          </MainTitle>
        </TextBox>
      </div>
      <div id="box">
        <MainImages src="./images/bgImg4.jpg" />
        <TextBox>
          <MainTitle>
            <div>Model S</div>
            <SubTitle>
              <div>시승 신청</div>
            </SubTitle>
          </MainTitle>
        </TextBox>
      </div>
      <div id="box">
        <MainImages src="./images/bgImg5.jpg" />
        <TextBox>
          <MainTitle>
            <div>Powerwall</div>
            <SubTitle>
              <div>전력 공급</div>
            </SubTitle>
          </MainTitle>
        </TextBox>
      </div>
    </ContainerImage>
  );
}
