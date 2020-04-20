import React from 'react';

import logoImg from '../../assets/logo.svg';
import Repository from '../../components/Repository';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explore" />
      <Title>Explore respositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="button">Pesquisar</button>
      </Form>

      <Repositories>
        <Repository />
        <Repository />
        <Repository />
      </Repositories>
    </>
  );
};

export default Dashboard;
