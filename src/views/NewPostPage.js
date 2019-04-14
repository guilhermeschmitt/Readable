import React from 'react';
import { connect } from 'react-redux';
import { handleAddPost } from '../actions/posts';
import FormPostPage from '../components/FormPostPage';

class NewPostPage extends React.Component {

  state = {
    title: '',
    category: '',
    body: '',
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }))
  }

  categoryChange = category => {
    this.setState(() => ({ category }))
  }

  savePost = () => {
    const { dispatch } = this.props;
    dispatch(handleAddPost(this.state));

    this.setState(() => ({
      title: '',
      category: '',
      body: '',
    }));
  }

  render() {
    return (
      <FormPostPage
        onMainAction={this.savePost}
        title={this.state.title}
        handleChange={this.handleChange}
        category={this.state.category}
        categoryChange={this.categoryChange}
        body={this.state.body}
      />
    );
  }

}

export default connect()(NewPostPage);