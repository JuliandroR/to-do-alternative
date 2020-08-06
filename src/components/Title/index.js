import React from 'react';
import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 28px;
    font-weight: 600;
    color: var(--red);
    text-align: left;
    line-height: 30px;
`;


function Title(props) {
  return <H1>{props.children}</H1>;
}

export default Title;