import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const BorderedButton = styled(Link)`
    font-weight: 600;
    color: ${oc.cyan[6]};
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: .2s all;

    &:hover {
        background: ${oc.cyan[6]};
        color: white;
  
    }

    &:active {
        /* 마우스 클릭시 아래로 미세하게 움직임 */
        transform: translateY(3px);
    }


`;

const LoginButton = () => (
    <BorderedButton to="/logIn">
        로그인 / 가입
    </BorderedButton>
);

export default LoginButton;