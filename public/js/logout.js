// post request to log current user out
document.querySelector('.logout-btn').addEventListener('click', (event) => {
    event.preventDefault();
    
    const username = document.querySelector('input[name= "username"]').value;

    const user = { username };
    const postRequest = axios.post('/api/logout', user);
    postRequest.
        then(function (response) {
          window.location.replace('/');
        })
        .catch(function (error) {
          console.error('Error:', error.message);
        });
});