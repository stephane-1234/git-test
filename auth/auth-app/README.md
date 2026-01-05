# Authentication App

This is a simple authentication application built with HTML, CSS, and JavaScript. It provides a user interface for logging in and displays the authentication status.

## Project Structure

```
auth-app
├── src
│   ├── index.html          # Main HTML document for the application
│   ├── styles              # Directory for CSS styles
│   │   └── main.css        # Styles for the application
│   ├── scripts             # Directory for JavaScript files
│   │   ├── app.js          # Main JavaScript file for application logic
│   │   └── state.js        # Manages application state
│   └── components          # Directory for UI components
│       ├── loginForm.js    # Manages the login form
│       └── authStatus.js    # Displays authentication status
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser to view the application.

## Usage

- Enter your credentials in the login form and submit to authenticate.
- The application will display the current authentication status based on user actions.

## How to test

1. Open `src/index.html` in your web browser (double-click or drag-and-drop).
2. You should see the login form and the message "You are not logged in."
3. Enter `user` as username and `password` as password, then click "Login".
4. If credentials are correct, the message "You are logged in." appears and the form disappears.
5. If credentials are incorrect, an "Invalid credentials" alert is shown.

## Ressources pour comprendre les modules JavaScript

- [MDN Web Docs – Modules JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules)
  > Explication complète sur l'import/export, l'utilisation de `type="module"` dans les balises `<script>`, et la structuration des fichiers JavaScript modernes.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.
