import styled from "styled-components";
import NavBar from "../components/Common/NavBar.jsx";
import Header from "../components/Common/Header.jsx";
import Footer from "../components/Common/Footer.jsx";

const LayOutContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
`;
const WrapperContainer = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ChildrenContainer = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E4E4E4;
`;
const Layout = ({ children, role }) => {
  return (
    <LayOutContainer>
      <NavBar role={role} />
      <WrapperContainer>
        <Header />
        <ChildrenContainer>{children}</ChildrenContainer>
        <Footer />
      </WrapperContainer>
    </LayOutContainer>
  );
};

export default Layout;
