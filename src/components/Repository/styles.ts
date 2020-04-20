import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled(Link)`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: transform 0.2s;

  & + a {
    margin-top: 10px;
  }

  &:hover {
    transform: translateX(10px);
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 16px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
