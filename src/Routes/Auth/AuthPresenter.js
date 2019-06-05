import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const responseFacebook = (response) => {
    console.log(response);
  }

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