import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux';

class Topic extends Component {
    render () {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className="topic-pic" src={item.get('imgUrl')} alt=""/>
                                {item.title}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    // list: state.get('home').get('topicList')
    list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic);