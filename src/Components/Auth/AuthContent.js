import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Title = styled.div`
 
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;
const Content = styled.div`
    position: absolute;
    top: 30%;
    left: 30%
    width:40%;
`;

const AuthContent = ({title, children}) => (
    <Content>
        <Title>{title}</Title>
        {children}
    </Content>
);

export default AuthContent;