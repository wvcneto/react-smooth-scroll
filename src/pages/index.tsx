import React, { useState } from 'react';

import { Container } from './styles';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainSection from '../components/MainSection';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={handleToggle} />
      <Header toggle={handleToggle} />
      <MainSection />
    </Container>
  );
}

export default Home;