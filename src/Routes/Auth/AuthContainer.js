import React from 'react';
import FacebookLogin from 'react-facebook-login';
import AuthPresenter from "./AuthPresenter";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../../redux/modules/base';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import { Login, Register } from '../Auth';

export  class AuthContainer extends React.Component {

       // 페이지에 진입 할 때 헤더를 비활성화
      componentWillMount() {
        this.props.BaseActions.setHeaderVisibility(false);
    }

    // 페이지에서 벗어 날 때 다시 활성화
    componentWillUnmount() {
        this.props.BaseActions.setHeaderVisibility(true);
    }
    render() {
        return(
            <AuthPresenter/>
        )
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(AuthContainer);