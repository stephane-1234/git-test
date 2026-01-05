function authStatus(isAuthenticated) {
    const statusElement = document.createElement('div');
    statusElement.className = 'auth-status';

    if (isAuthenticated) {
        statusElement.textContent = 'You are logged in.';
    } else {
        statusElement.textContent = 'You are not logged in.';
    }

    return statusElement;
}

export default authStatus;