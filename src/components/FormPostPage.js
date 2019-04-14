import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form } from 'formsy-semantic-ui-react';

import FormComponent from './FormComponent';

class FormPostPage extends React.Component {

  state = {
    toHome: false
  }

  onMainAction = () => {
    const { onMainAction } = this.props;
    onMainAction();

    this.setState(() => ({
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

    const { title, handleChange, category, categoryChange, body } = this.props;

    if (this.state.toHome === true)
      return <Redirect to='/' />

    return (
      <div>
        <FormComponent
          onMainAction={this.onMainAction}
          content={
            <>
              <Form.Input
                required
                label='Title:'
                name="title"
                maxLength="100"
                value={title}
                onChange={handleChange}
                validations='maxLength:100'
                validationErrors={{
                  isDefaultRequiredValue: 'Preenchimento obrigatório.',
                  maxLength: 'Número máximo de caracteres é 100.'
                }}
                errorLabel={<label />}
              />
              {(category !== undefined && categoryChange !== undefined) &&
                <Form.Dropdown
                  label='Category:'
                  name='category'
                  required
                  selection
                  attributes={{ id: "id", descricao: "nome" }}
                  value={category}
                  options={this.options}
                  setValue={categoryChange}
                  validationErrors={{ isDefaultRequiredValue: 'Preenchimento obrigatório.' }}
                  errorLabel={<label />}
                />
              }
              <Form.TextArea
                label="Post:"
                name="body"
                value={body}
                onChange={handleChange}
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