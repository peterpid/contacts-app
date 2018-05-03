var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          className: 'inputButton',
          type: 'image',
          src: 'images/add-user.png',
          title: 'Add contact'
        }),
        React.createElement('input', {
          className: 'inputText',
          type: 'text',
          placeholder: 'First Name',
          value: this.props.contact.firstName
        }),
        React.createElement('input', {
          className: 'inputText',
          type: 'text',
          placeholder: 'Last Name',
          value: this.props.contact.lastName
        }),
        React.createElement('input', {
          className: 'inputText',
          type: 'email',
          placeholder: 'E-mail',
          value: this.props.contact.email
        })
      )
    );
  },

});