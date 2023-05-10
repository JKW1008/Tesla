import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #111;
  color: #ccc;
`;
const GlobalFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  padding: 10px;
  margin-bottom: 20px;
  align-items: center;
`;
const SmallFooter = styled.div`
  width: 50%;
  text-align: center;
  font-size: 12px;
  span {
    margin-left: 15px;
  }
  p {
    width: 76%;
    margin: 0 auto;
    text-align: center;
    font-size: 10px;
  }
`;
export default function Footer() {
  return (
    <Container>
      <GlobalFooter>
        <SmallFooter>
          <span>Tesla © 2023</span>
          <span>개인정보 처리방침 및 법적고지</span>
          <span>이용 약관</span>
          <span>문의하기</span>
          <span>새 소식</span>
          <span>위치</span>
        </SmallFooter>
        <SmallFooter>
          <p>
            테슬라코리아 유한회사 | 사업자등록번호 : 777-77-77777 |
            데이비드존파인스타인, 케네스어니스트무어 | 통신판매업신고 :
            제1111-평양중앙-11111호 | 사업자정보확인 | 호스팅제공자 : Telsa Inc.
            | 주소 : 가나특별시 다라구 마바사로 111, 99층 | 대표전화 :
            123-456-7890 | southkorea@tesla.com{" "}
          </p>
        </SmallFooter>
      </GlobalFooter>
    </Container>
  );
}
