import React, { useState } from 'react';

import Video from '../../assets/videos/video.mp4';

import { 
  Container, 
  Background, 
  BackgroundVideo,
  Content,
  Title,
  Text,
  ButtonWrapper,
  Button,
  ArrowForward,
  ArrowRight
} from './styles';

const MainSection: React.FC = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <Container id="main">
      <Background>
        <BackgroundVideo autoPlay loop muted src={Video} />
      </Background>
      <Content>
        <Title>Virtual Banking Made Easy</Title>
        <Text>
          Sign up for a new account today and receive $250 in credit towards your next payment.
        </Text>
        <ButtonWrapper>
          <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started { hover ? <ArrowRight /> : <ArrowForward />}
          </Button>
        </ButtonWrapper>
      </Content>
    </Container>
  );
}

export default MainSection;