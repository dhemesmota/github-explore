import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

interface Props {
  repository: {
    full_name: string;
    description: string;
    owner: {
      login: string;
      avatar_url: string;
    };
  };
}

const Repository: React.FC<Props> = ({ repository }) => {
  return (
    <Container to={`/repositories/${repository.full_name}`}>
      <img src={repository.owner.avatar_url} alt={repository.owner.login} />

      <div>
        <strong>{repository.full_name}</strong>
        <p>{repository.description}</p>
      </div>

      <FiChevronRight size={20} />
    </Container>
  );
};

export default Repository;
