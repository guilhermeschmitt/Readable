import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form } from 'formsy-semantic-ui-react';
import { handleAddPost } from '../actions/posts';
import FormComponent from '../components/FormComponent';

class FormPostPage extends React.Component {

  state = {
    title: '',
    category: '',
    body: '',
    toHome: false
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
      toHome: true,
    }));
  }

  get options() {
    return Object.values(this.props.categories).map(category => ({
      text: category.name,
      value: category.name
    }));
  }

  render() {
    if (this.state.toHome === true)
      return <Redirect to='/' />

    return (
      <div>
        <FormComponent
          onMainAction={this.savePost}
          content={
            <>
              <Form.Input
                required
                label='Title:'
                name="title"
                maxLength="100"
                value={this.state.title}
                onChange={this.handleChange}
                validations='maxLength:100'
                validationErrors={{
                  isDefaultRequiredValue: 'Preenchimento obrigatório.',
                  maxLength: 'Número máximo de caracteres é 100.'
                }}
                errorLabel={<label />}
              />
              <Form.Dropdown
                label='Category:'
                name='category'
                required
                selection
                attributes={{ id: "id", descricao: "nome" }}
                value={this.state.category}
                options={this.options}
                setValue={this.categoryChange}
                validationErrors={{ isDefaultRequiredValue: 'Preenchimento obrigatório.' }}
                errorLabel={<label />}
              />
              <Form.TextArea
                label="Post:"
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
            </>
          }
        />

      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return { categories }
}

export default connect(mapStateToProps)(FormPostPage);