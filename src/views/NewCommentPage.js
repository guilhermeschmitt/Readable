import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { handleAddComment } from '../actions/comments';
import FormCommentPage from '../components/FormCommentPage';

class NewCommentPage extends React.Component {

  state = {
    body: ''
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }))
  }

  saveComment = () => {
    const { dispatch, match } = this.props;
    dispatch(handleAddComment(this.state, match.params.id));
    this.setState(() => ({ body: '' }));
  }

  render() {
    return (
      <FormCommentPage
        icon={<Icon type='plus' />}
        text='NEW COMMENT'
        onMainAction={this.saveComment}
        body={this.state.body}
        handleChange={this.handleChange}
        category={this.props.match.params.category}
        postId={this.props.match.params.id}
      />
    );
  }
}

export default connect()(NewCommentPage);