document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
      if (event.target.matches('.delete-wtr-btn')) {
        event.preventDefault();
        console.log('Delete water button clicked');
        const waterId = document.querySelector('.waterId').value;
        console.log(waterId);
        const deleteRequest = axios.delete('/api/dashboard/water/' + waterId);
        deleteRequest
          .then(function (response) {
            console.log('Response:', response.data);
            window.location.reload();
          })
          .catch(function (error) {
            console.error('Error:', error.message);
          });
      }
    });
  });