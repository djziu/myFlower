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


const SLink = styled(Link)`
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Item = styled.div`
    width:50%;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
    font-size:  20px;
    transition: border-bottom 0.5s ease-in-out;
`;


const List = styled.div`
    display: flex;
    width: 100%;
`;

const responseFacebook = (response) => {
    console.log(response);
  }


  const AuthPresenter = ({children,pathname}) => (
    <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo to="/">FLOWER</Logo>
            </LogoWrapper>
            <Contents>
            <List>
                <Item>
                    <SLink to="/auth/login">로그인</SLink>
                </Item>
                <Item>
                    <SLink to="/auth/register">회원가입</SLink>
                </Item>
            </List>
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