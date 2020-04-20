import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

const Repository: React.FC = () => {
  return (
    <Container to="/">
      <img
        src="https://avatars0.githubusercontent.com/u/26680031?s=460&u=a909bfb11e423eb271e07a420fe551621ac19409&v=4"
        alt="Profile"
      />

      <div>
        <strong>rockeseat/Unform</strong>
        <p>Descrição</p>
      </div>

      <FiChevronRight size={20} />
    </Container>
  );
};

export default Repository;
