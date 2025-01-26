import React, { Component } from 'react';
import './index.css';

class UserInfo extends Component {
  state = {
    isEditing: false,
    name: this.props.user.name,
    email: this.props.user.email,
    phone: this.props.user.phone,
    company: this.props.user.company.name,
  };

  toggleEdit = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSave = async () => {
    const { id } = this.props.user;
    const { name, email, phone, company } = this.state;

    const updatedUser = { id, name, email, phone, company: { name: company } };

    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      this.props.onUpdate(updatedUser);

      this.setState({ isEditing: false });
    } catch (error) {
      alert('Failed to save changes.');
    }
  };

  render() {
    const { isEditing, name, email, phone, company } = this.state;
    const { onDelete } = this.props;

    return (
      <div className="user-info">
        {isEditing ? (
          <div className="user-edit">
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={this.handleChange}
              placeholder="Phone"
            />
            <input
              type="text"
              name="company"
              value={company}
              onChange={this.handleChange}
              placeholder="Company"
            />
            <div className="edit-buttons">
              <button className="save-btn" onClick={this.handleSave}>Save</button>
              <button className="cancel-btn" onClick={this.toggleEdit}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="user-details">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Company: {company}</p>
            <div className="user-actions">
              <button className="edit-btn" onClick={this.toggleEdit}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(this.props.user.id)}>Delete</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserInfo;