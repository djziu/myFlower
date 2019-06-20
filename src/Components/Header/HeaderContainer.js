import React, { Component } from 'react';
import Header from './Header';
import Account from './Account';
import { connect } from 'react-redux';
import LoginButton from "../LoginButton";
class HeaderContainer extends Component {
   
    render() {
        const { visible } = this.props;
    //    if(!visible) return null;

        if(visible){
        return (
           
           <Header> 
              <Account/>   
            </Header>
          
        )
        }else{
            return (
                <Header/> 
            )
        }
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible'])
    }),
    (dispatch) => ({

    })
)(HeaderContainer);