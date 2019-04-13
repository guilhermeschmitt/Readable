import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form } from 'formsy-semantic-ui-react';
import FormComponent from '../components/FormComponent';
import { handleAddComment } from '../actions/comments';

class FormCommentPage extends React.Component {

  state = {
    body: '',
    toPost: false,
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }))
  }

  saveComment = () => {
    const { dispatch, match } = this.props;
    dispatch(handleAddComment(this.state, match.params.id));
    
    this.setState(() => ({
      body: '',
      toPost: true,
    }));
  }

  render() {
    const { category, id } = this.props.match.params;

    if (this.state.toPost === true)
      return <Redirect to={`/${category}/${id}`} />

    return (
      <div>
        <FormComponent
          onMainAction={this.saveComment}
          content={
            <Form.TextArea
              label="Comment:"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              required
              maxLength={2000}
              validations="maxLength:2000"
              validationErrors={{
                isDefaultRequiredValue: 'Preenchimento obrigatório',
                maxLength: "Utiliza-se, no máximo, 2000 caracteres para o campo descrição"
              }}
              errorLabel={<label />}
            />
          }
        />

      </div>
    );
  }
}

export default connect()(FormCommentPage);