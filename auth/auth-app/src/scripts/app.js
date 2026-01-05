// Main JavaScript file for the authentication application

import { getAuthState, setAuthState } from './state.js';
import getAuthStatus from '../components/authStatus.js';
import createLoginForm from '../components/loginForm.js';

const app = () => {
    const authStatusElement = document.getElementById('auth-status');
    const loginFormElement = document.getElementById('login-form');

    const updateUI = () => {
        const { isAuthenticated } = getAuthState();
        // Nettoie l'élément avant d'ajouter le nouveau statut
        authStatusElement.innerHTML = '';
        authStatusElement.appendChild(getAuthStatus(isAuthenticated));
        if (isAuthenticated) {
            loginFormElement.style.display = 'none';
        } else {
            loginFormElement.style.display = 'block';
        }
    };

    const handleLogin = (username, password) => {
        // Simulate authentication (replace with real authentication logic)
        if (username === 'user' && password === 'password') {
            setAuthState(true, { username });
            updateUI();
        } else {
            alert('Invalid credentials');
        }
    };

    // Nettoie le formulaire avant d'ajouter le nouveau
    loginFormElement.innerHTML = '';
    loginFormElement.appendChild(createLoginForm(handleLogin));
    updateUI();
};

document.addEventListener('DOMContentLoaded', app);