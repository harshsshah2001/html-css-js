// assets/js/auth.js
(function () {
    const token = localStorage.getItem('token');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    console.log('Current Page:', currentPage);
    console.log('Token:', token);

    // List of pages that require authentication
    const protectedPages = [
        'index.html',
        'apps-chat.html',
        'apps-todolist.html',
        'users-profile.html',
        // Add more protected pages here
    ];

    // Redirect to login.html if the current page is protected and no token exists
    if (protectedPages.includes(currentPage) && (!token || token.trim() === '')) {
        console.log('No valid token found, redirecting to login.html');
        window.location.href = 'auth-boxed-signin.html';
    }
})();

// Global sign-out function
window.signOut = function () {
    console.log('Signing out from:', window.location.pathname);
    localStorage.removeItem('token');
    window.location.href = 'auth-boxed-signin.html';
};
