import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import LanguageSwitch from "../LanguageSwitch";
import LoginButton from "../LoginButton";
import { FormattedMessage } from "react-intl";
import React from 'react'
import ReactDOM from 'react-dom'

const HmRight = styled.div`
float:right;
font-size:13px;
padding-left:20px;
z-index:11;
`;

const LogInDiv = styled.div`
position: absolute;
top:0;
right:10;
width:180px;
height: 400px;
text-align: center;
font-size:  20px;
${LogInBtn}:hover {
    after {
          opacity: 0.4 
        };
}
`;


const ResigterDiv = styled.div`

width:180px;
height: 150px;
text-align: center;
padding-top:30%;
background-color:#ffff;
font-size:  20px;
z-index:-99999;
opacity: 0;
box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.8);
${LogInBtn}:hover {
    ${ResigterDiv} {
        opacity:1;
        z-index:0;
    }
}
`;


const LogInBtn = styled.div`
width:180px;
height: 50px;
margin-top:45px;
text-align: center;
font-size:  20px;
border-bottom: 1px solid black;
&:hover + ${ResigterDiv} {
    opacity:1;
    z-index:0;
}

`;

const SLink = styled(Link)`
height:50px;
display: flex;
align-items: center;
justify-content: center;
`;

const SButton = styled.button`
height: 44px;
width:40%
background: #FF4747;
border: 0;
margin: 3px;
border-radius: 3px;
font-size: 14px;
line-height:44px;
text-transform: uppercase;
color:#fff;
padding:0;
font-weight:400;
`;

const Account = ({children, pathname}) =>{
    return(
        <HmRight>  
        <LogInDiv>
        <LanguageSwitch />
            <LogInBtn current={pathname === "/logIn"} >
                <SLink to="/logIn"><FormattedMessage id="account" /></SLink>
            </LogInBtn>
            <ResigterDiv>
                <LoginButton/>
            </ResigterDiv>
            </LogInDiv>
        </HmRight>    
    )
}

export default Account;