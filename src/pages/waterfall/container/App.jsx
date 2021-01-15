import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import actionsCreator from '../actions'
import {App as View} from '../components'


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionsCreator(), dispatch)
    };

    // return {
    //     chageLoading: dispatch(acrtions.chageLoading)
    // }
};

export default connect(mapStateToProps, mapDispatchToProps)(View)

