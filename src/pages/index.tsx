import React, { useState } from 'react';

import { Container } from './styles';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={handleToggle} />
      <Header toggle={handleToggle} />
    </Container>
  );
}

export default Home;