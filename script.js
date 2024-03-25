//your JS code here. If required.
  const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const rememberMeCheckbox = document.getElementById('rememberMe');

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

                alert(`Logged in as ${username}`);
            });
        