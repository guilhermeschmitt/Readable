import React from 'react';
import { Form } from 'formsy-semantic-ui-react';
import _ from 'lodash';
import { Button, message } from 'antd';

class FormComponent extends React.Component {
  onBeforeSubmit = () => {
    this.form.submit();
  }

  onSubmit = () => {
    const debouncedSubmit = _.debounce(this.submit, 2000, { leading: true, trailing: false });
    (this.props.beforeSubmit) ? this.props.beforeSubmit(debouncedSubmit) : debouncedSubmit();
  }

  submit = () => {
    return this.props.onMainAction();
  }

  generateErrorMessages = () => {
    this.form.formsyForm.inputs.forEach(element => {
      if (!element.isValid())
        message.error(`${element.props.label} - ${element.getErrorMessages()[0]}`);
    });
  }

  render() {
    return (
      <div>
        <Form
          ref={ref => this.form = ref}
          onInvalidSubmit={this.generateErrorMessages}
          onValidSubmit={this.onSubmit}
        >
          {this.props.content}
          <Button onClick={this.onBeforeSubmit} type='primary'>
            Salvar
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormComponent;