import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form } from 'formsy-semantic-ui-react';
import styled from 'styled-components';
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

    const { title, handleChange, category, categoryChange, body, text, icon } = this.props;

    if (this.state.toHome === true)
      return <Redirect to='/' />

    return (
      <div>
        <Title>
          {icon} {text}
        </Title>
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
                  isDefaultRequiredValue: 'Required field',
                  maxLength: 'Maximum number of characters is 100.'
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
                  validationErrors={{ isDefaultRequiredValue: 'Required field' }}
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
                  isDefaultRequiredValue: 'Required field.',
                  maxLength: "A maximum of 2000 characters is used for this field."
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

const Title = styled.span`
  font-size: 2em;
  font-weight: bold;
`;

function mapStateToProps({ categories }) {
  return { categories }
}

export default connect(mapStateToProps)(FormPostPage);