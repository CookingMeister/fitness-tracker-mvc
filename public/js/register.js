// Register form event listener
document.querySelector('.register-btn').addEventListener('click', (event) => {
  event.preventDefault();
  const username = document.querySelector('input[name= "username"]').value;
  const password = document.querySelector('input[name= "password"]').value;
  const user = { username, password };
  // Make a POST request and save it as a constant
  const postRequest = axios.post('/api/register', user);
  // Handle the promise returned by the POST request
  postRequest
    .then(function (response) {
      // console.log('Response:', response.data);
      window.location.replace('/api/dashboard');
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});
