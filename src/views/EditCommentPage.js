import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { message, Icon } from 'antd';
import { handleEditComment } from '../actions/comments';
import FormCommentPage from '../components/FormCommentPage';

//FIXME: If user accesses address through URL, I can not edit because comment is not in store

class EditCommentPage extends React.Component {
  state = {
    body: ''
  }

  componentDidMount() {
    const { comment } = this.props;
    if (comment)
      this.setState(() => ({ ...comment }));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }))
  }

  editComment = () => {
    const { dispatch, match } = this.props;
    dispatch(handleEditComment(this.state, match.params.id));
    this.setState(() => ({ body: '' }));
  }

  render() {
    const { comment, match } = this.props;

    if (!comment) {
      message.warning('Comment unavailable!');
      return <Redirect to={`/${match.params.category}/${match.params.id}`} />
    }

    return (
      <FormCommentPage
        icon={<Icon type='edit' />}
        text='EDIT COMMENT'
        onMainAction={this.editComment}
        body={this.state.body}
        handleChange={this.handleChange}
        category={match.params.category}
        postId={match.params.id}
      />
    );
  }
}

function mapStateToProps({ comments }, { match }) {
  const { id, idcomment } = match.params;
  const comment = (comments[idcomment] && comments[idcomment].parentId === id) ? comments[idcomment] : null;
  return { comment };
}

export default connect(mapStateToProps)(EditCommentPage);