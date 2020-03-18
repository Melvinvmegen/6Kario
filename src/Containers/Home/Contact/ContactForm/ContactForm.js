import React, { Fragment, Component } from 'react';
import Button from '../../../../Components/FormSubmit/FormSubmit'
import Input from '../../../../Components/Input/Input'
import classes from './ContactForm.module.css'
import Spinner from '../../../../Components/Spinner/Spinner';

class ContactForm extends Component {
  state = {
    loading: false,
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Nom complet'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email@gmail.com'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      request: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Demande'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
      checkbox: {
        elementType: 'checkbox',
        elementConfig: {
          type: 'check',
          placeholder: 'Demande'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
    },
    formIsValid: false
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const form = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...form[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    form[inputIdentifier] = updatedFormElement
    let formIsValid = true;
    for (let inputIdentifier in form) {
      formIsValid = form[inputIdentifier].valid && formIsValid;

    }
    this.setState({ orderForm: form, formIsValid: formIsValid })
  }

  contactHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }
    const contact = {
      contactData: formData
    }
    // axios.post('/contacts.json', contact)
    //   .then(response => {
    //     this.setState({ loading: false }, () => {
    //       this.props.modalClosed();
    //     })
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false }, () => {
    //       this.props.modalClosed();
    //     })
    //   });
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }
    return isValid
  }

  render() {
    const formElementsArray = []
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }

    let contactForm = <form onSubmit={this.contactHandler}>
      {formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(event) => this.inputChangedHandler(event, formElement.id)}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched} />
      ))}
      <Button wrapperClass={classes.wrapperBtnForm} btnClass={classes.btnForm} id={classes.submitForm} formIsValid={this.state.formIsValid} />
    </form>;
    if (this.state.loading) {
      contactForm = <Spinner />
    }
    return (
      (
        <Fragment>
          {contactForm}
        </Fragment>
      )
    )
  }
}

export default ContactForm
