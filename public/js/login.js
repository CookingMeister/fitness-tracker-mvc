document.querySelector('.login-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.querySelector('input[name= "username"]').value;
    const password = document.querySelector('input[name= "password"]').value;
    const user = { username, password };
    const postRequest = axios.post('/api/login', user);
    postRequest.
        then(function (response) {
          console.log('Response:', response.data);
          window.location.replace('/api/dashboard');
        })
        .catch(function (error) {
          console.error('Error:', error.message);
        });
});