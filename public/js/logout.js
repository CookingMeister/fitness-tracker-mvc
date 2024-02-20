// post reuest to log current user out
document.querySelector('.logout-btn').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Logout clicked!');
    const username = document.querySelector('input[name= "username"]').value;

    const user = { username };
    const postRequest = axios.post('/api/logout', user);
    postRequest.
        then(function (response) {
          console.log('Response:', response.data);
          window.location.replace('/');
        })
        .catch(function (error) {
          console.error('Error:', error.message);
        });
});