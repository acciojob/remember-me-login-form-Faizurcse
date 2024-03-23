//your JS code here. If required.
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberMeCheckbox = document.getElementById('rememberMe');
  const submitButton = document.getElementById('submit');
  const existingUserButton = document.getElementById('existing');

  
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');
  if (savedUsername && savedPassword) {
    rememberMeCheckbox.checked = true;
  }

  
  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const username = usernameInput.value;
    const password = passwordInput.value;
    const rememberMe = rememberMeCheckbox.checked;

    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
    alert(`Logged in as`);
  });

  
 