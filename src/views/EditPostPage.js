import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { message } from 'antd';
import FormPostPage from '../components/FormPostPage';
import { handleEditPost } from '../actions/posts';

class EditPostPage extends React.Component {

  state = {
    title: '',
    body: '',
  }

  componentDidMount() {
    const { post } = this.props;
    if (post)
      this.setState(() => ({...post }));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }))
  }

  editPost = () => {
    const { dispatch } = this.props;
    dispatch(handleEditPost(this.state));

    this.setState(() => ({
      title: '',
      body: '',
    }));
  }


  render() {
    if (!this.props.post) {
      message.warning('No posts with this id!');
      return <Redirect to={'/'} />
    }

    return (
      <FormPostPage
        onMainAction={this.editPost}
        title={this.state.title}
        handleChange={this.handleChange}
        body={this.state.body}
      />
    );
  }
}

function mapStateToProps({ posts }, { match }) {

  const { category, id } = match.params;
  const post = (posts[id] && posts[id].category === category) ? posts[id] : null;

  return { post };
}

export default connect(mapStateToProps)(EditPostPage);