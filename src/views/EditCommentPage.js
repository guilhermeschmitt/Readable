import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { message } from 'antd';
import { handleEditComment } from '../actions/comments';
import FormCommentPage from '../components/FormCommentPage';

//FIXME: Se o usuário vem pela URL, o comentário não aparece!

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
    const {comment, match} = this.props;

    if (!comment) {
      message.warning('Comentário indisponível!');
      return <Redirect to={`/${match.params.category}/${match.params.id}`} />
    }

    return (
      <FormCommentPage
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