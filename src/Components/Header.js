import  React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import {FocusEvent} from 'react';
import Home from '../Routes/Home';
import LanguageSwitch from "./LanguageSwitch";
import { IntlProviderWrapper } from "../IntlContext";
import { FormattedMessage } from "react-intl";



const Header = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:150px;
    display:flex;
    align-items:center;
    z-index:990;
    background-color:#fff;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const HmLeft = styled.div `
    position: relative;
    width:30%;
    float:left;
    z-index:11;
    
`;
const HmMiddle = styled.div`
    position: relative;
    padding-top:13px;
    width:50%;
    z-index:11;
   
`;

const HmRight = styled.div`
    position:relative;
    float:right;
    font-size:13px;
    padding-left:20px;
    z-index:11;

`;

const List = styled.div`
    display: flex;
    width: 70%;
`;

const SearchBox = styled.div`
    position:relative;
    overflow:hidden;
    width:80%;
    border: 2px solid #FF4747;
    border-right:0 none;
    border-radius: 4px 0 0 4px;
`;

const SearchCate = styled.div`
    position: relative;
    float:right;
    border-bottom:2px solid #FF4747;
    box-sizing:border-box;
    height:36px;
`;

const SearchInputBox = styled.div`
    position: relative;
    width:90%;
    height:36px;
    float:left;
`;

const SearchInput = styled.input`
    position: relative;
    display: block;
    width:100%;
    height:100%;
    border:none;
    line-height: 18px;
    font-size:17px;
    outline: none;
    color: ${props => props.inputColor || "palevioletred"}
`;

const SearchBtn = styled.button`
    position: absolute;
    z-index:5;
    top:0;
    right:0;
    width:40px;
    height: 36px;
    background-color:#FF4747;
    border-radius: 0 4px 4px 0;
    cursor:pointer;
`;

const Item = styled.div`
    width:180px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
    font-size:  20px;
    transition: border-bottom 0.5s ease-in-out;
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
    position: absolute;
    top:500;
    right:10;
    width:180px;
    height: 150px;
    text-align: center;
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
    text-align: center;
    font-size:  20px;
    background-color:red;
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




export default withRouter(({location:{pathname}}) =>(
    <IntlProviderWrapper>
    <Header>
        <HmLeft>
        
      <div className="App">
        <FormattedMessage id="header" tagName="h1" />
        <FormattedMessage id="title" tagName="h2" />
        
      </div>
    
        </HmLeft>
        <HmMiddle>
            <List>
                <Item current={pathname === "/"}>
                    <SLink to="/"><FormattedMessage id="flower" /></SLink>
                </Item>
                <Item current={pathname === "/pot"}>
                    <SLink to="/pot"><FormattedMessage id="pot" /></SLink>
                </Item>
                <Item current={pathname === "/gift"}>
                    <SLink to= "/gift"><FormattedMessage id="gift" /></SLink>
                </Item>
            </List>
     
            <SearchBox>
                <SearchInputBox>
                    <SearchInput inputColor="rebeccapurple"></SearchInput> 
                </SearchInputBox>
                <SearchCate>
                    <SearchBtn></SearchBtn>
                </SearchCate>
            </SearchBox>
           

        </HmMiddle>
        <HmRight>  
            <LogInDiv>
            <LanguageSwitch />
                <LogInBtn current={pathname === "/logIn"} >
                    <SLink to="/logIn">계정</SLink>
                </LogInBtn>
                <ResigterDiv>
                    <SButton>가입</SButton>
                    <SButton>로그인  </SButton>
                </ResigterDiv>
            </LogInDiv>
         
        </HmRight>    
    </Header>
    </IntlProviderWrapper>

));