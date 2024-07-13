// script.js
const bcrypt = require('bcrypt');

// Hash a password
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Verify a password
async function verifyPassword(password, hashedPassword) {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
}

// Get the login form elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add event listener to login form submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the email and password values
  const email = emailInput.value;
  const password = passwordInput.value;

  // Hash the password using bcrypt
  const hashedPassword = await hashPassword(password);

  // Verify the password using bcrypt
  const isValid = await verifyPassword(password, hashedPassword);

  if (isValid) {
    // Login successful, redirect to dashboard or whatever
    console.log('Login successful!');
    // window.location.href = '/dashboard';
  } else {
    // Login failed, display error message
    console.log('Invalid email or password');
    // const errorMessage = document.getElementById('error-message');
    // errorMessage.textContent = 'Invalid email or password';
  }
});