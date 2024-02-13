const wtrBtn = document.querySelector('.wtr-btn');

wtrBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const wtrInput = document.querySelector('input[name= "wtr-amt"]').value;
    const wtrAmt = { wtrInput };
    console.log(wtrAmt);

    const postRequest = axios.post('/api/dashboard', wtrAmt);
    postRequest.
        then(function (response) {
            console.log('Response:', response.data);
        })
        .catch(function (error) {
          console.error('Error:', error.message);
        });   
});