import './index.css';
import { Component } from 'react';
import { Oval } from 'react-loader-spinner';
import UserInfo from '../UserInfo';

class Dashboard extends Component {
  state = {
    users: [],
    loading: true,
    error: null,
    showAddUserForm: false,
    newUser: { name: '', email: '', phone: '', company: '' },
  };

  async componentDidMount() {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ users: data, loading: false });
    } catch (error) {
      this.setState({ error: 'Failed to load users', loading: false });
    }
  }

  handleUpdateUser = (updatedUser) => {
    this.setState((prevState) => ({
      users: prevState.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    }));
  };

  handleDeleteUser = async (userId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE',
      });

      this.setState((prevState) => ({
        users: prevState.users.filter((user) => user.id !== userId),
      }));
    } catch (error) {
      alert('Failed to delete user.');
    }
  };

  handleAddUserToggle = () => {
    this.setState((prevState) => ({
      showAddUserForm: !prevState.showAddUserForm,
      newUser: { name: '', email: '', phone: '', company: '' },
    }));
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newUser: { ...prevState.newUser, [name]: value },
    }));
  };

  handleSubmitAddUser = async (e) => {
    e.preventDefault();

    const { newUser } = this.state;

    if (!newUser.name || !newUser.email || !newUser.phone || !newUser.company) {
      alert('Please fill all fields');
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          company: { name: newUser.company },
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const newUserData = await response.json();

      this.setState((prevState) => ({
        users: [...prevState.users, newUserData],
        showAddUserForm: false,
        newUser: { name: '', email: '', phone: '', company: '' },
      }));
    } catch (error) {
      alert('Failed to add user.');
    }
  };

  render() {
    const { users, loading, error, showAddUserForm, newUser } = this.state;

    return (
      <div className="dashboard">
        <h1 className="title">Dashboard</h1>

        <button className="add-user-btn" onClick={this.handleAddUserToggle}>
          {showAddUserForm ? 'Cancel' : 'Add User'}
        </button>

        {showAddUserForm && (
          <form className="add-user-form" onSubmit={this.handleSubmitAddUser}>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={this.handleInputChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={this.handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="phone"
              value={newUser.phone}
              onChange={this.handleInputChange}
              placeholder="Phone"
              required
            />
            <input
              type="text"
              name="company"
              value={newUser.company}
              onChange={this.handleInputChange}
              placeholder="Company"
              required
            />
            <button type="submit">Add User</button>
          </form>
        )}

        <section>
          {loading ? (
            <div className="loader-class">
              <Oval
                height={80}
                width={80}
                color="#4fa94d"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <div className="user-list">
              {users.map((user) => (
                <UserInfo
                  key={user.id}
                  user={user}
                  onUpdate={this.handleUpdateUser}
                  onDelete={this.handleDeleteUser}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Dashboard;
