import React from 'react';

class ContactInfo extends React.Component {

  render() {
    return (
      <li>{this.props.name} {this.props.phone}</li>
    );
  }
}

ContactInfo.propTypes = {
  name: React.PropTypes.string,
  phone: React.PropTypes.string.isRequired,
};

export default ContactInfo;
