import styled, { keyframes } from 'styled-components';
import heroImage from './hero-image.jpg';


const slideIn = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
  font-family: 'Roboto', sans-serif;
`;

const LeftSide = styled.div`
  width: 30%;
  animation: ${slideIn} 8s ease-in-out both;
  animation-iteration-count: infinite;
  animation-delay: 2s;
`;

const Text = styled.p`
  font-size: 2.5rem;
  opacity: 0;
  animation: ${slideIn} 8s ease-in-out both;
  animation-iteration-count: infinite;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;
const Text1 = styled.p`
  font-size: 2.5rem;
  opacity: 0;
  animation: ${slideIn} 8s ease-in-out both;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
`;

const Button = styled.button`
  background: DodgerBlue;
  font-size: 1em;
  margin: 1em;
  padding: 1em 3.5em;
  border: 2px;
  border-radius: 3px;
  animation-iteration-count: infinite;
  opacity: 0;
  animation: ${slideIn} 8s ease-in-out both;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;

const RightSide = styled.div`
  width: 30%;
  animation: ${slideIn} 8s ease-in-out both;
  animation-iteration-count: infinite;
  animation-delay: 2s;
`;

const Image = styled.img`
  max-width: 35rem;
  max-height: 35rem;
`;

const App = () => {
  return (
    <Container>
      <LeftSide>
        <Text>
          <h4> Become A </h4>
        </Text>
        <Text1>
        <h1> JS Ninja</h1>
        </Text1>
        <Button>kill the web</Button>
      </LeftSide>
      <RightSide>
        <Image src={heroImage}>
        </Image>
      </RightSide>
    </Container> 
    
  );
};

export default App;
