
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionsCreator from '../actions'
import {Button} from 'antd'

const getImages = actionsCreator().getImages;
const MoreButtom = (props) => {
    return (
        <div className="_namespace btn-div">
            <Button type="primary" onClick={() => props.actions.getImages(props.data.page)}> 加载更多 </Button>
        </div>
    )
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actionsCreator(), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MoreButtom)
