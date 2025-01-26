
---

# User Management Dashboard

Welcome to the **User Management Dashboard**! This is a simple, intuitive React web application that lets you manage user data. It allows users to view, add, edit, and delete user information. The data is fetched from a mock API (JSONPlaceholder), giving you a simulated backend experience.

---

## Main Features

- **View Users:** Fetches and displays a list of users with their details (name, email, phone, company) from the API.
- **Add a User:** Provides a form to input new user details, and adds them to the list.
- **Edit User:** Allows you to edit any user's details, updating them locally.
- **Delete User:** Enables you to remove users from the list (although, keep in mind, this is a simulated delete since JSONPlaceholder doesn't actually delete data).

---

## Technologies Used

- **React:** The library that powers the user interface.
- **CSS:** Styling is handled with CSS to ensure a clean, responsive design.
- **JSONPlaceholder:** This free online REST API simulates backend interactions for fetching, adding, editing, and deleting user data.
- **Fetch API:** Used to make HTTP requests to interact with the mock API.

---

## Setting Up the Project

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system. If not, you can download them from [here](https://nodejs.org/en/).

### How to Run the Project

1. **Clone the repository to your local machine:**

   ```bash
   git clone https://github.com/your-username/user-management-dashboard.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd user-management-dashboard
   ```

3. **Install the required dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   This will open the app in your default web browser at [http://localhost:3000](http://localhost:3000).

---

## How the App Works

1. **Dashboard:** Upon loading, the app fetches user data from the API and presents it in a user-friendly layout.
   
2. **Add a New User:** Simply click on the "Add User" button, fill out the form with the user’s name, email, phone, and company, and hit submit. This will add the user locally to the list (without affecting the mock API).

3. **Edit a User:** Each user has an "Edit" button. Clicking it will turn their details into editable fields. After making changes, hit "Save" to update them (locally).

4. **Delete a User:** Clicking the "Delete" button will remove the user from the displayed list. Keep in mind that since we're using a mock API, this is only a simulated deletion.

---

## Project Structure

Here’s a brief overview of the project’s file structure:

```
src/
│
├── components/
│   ├── Dashboard/
│   │   ├── index.js
│   │   └── index.css
│   │
│   └── UserInfo/
│       ├── index.js
│       └── index.css
│
├── App.js
└── App.css
```

---

## Author

This project was created by **Rohit Palavanchu**.

---

## License

This project is open-source and is licensed under the **MIT License**. You can check the license file for more details.

---