import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`; 

const ShadowedBox = styled.div`
    width: 500px;
`;

const LogoWrapper = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled(Link)`
    color: black;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: pink;
    padding: 2rem;
    height: auto;
`;



const responseFacebook = (response) => {
    console.log(response);
  }


  const AuthPresenter = ({children}) => (
    <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo to="/">HEURM</Logo>
            </LogoWrapper>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
);

export default AuthPresenter;
/*
export default () => (
    <Wrapper>
        <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
    />
  </Wrapper>
);
*/