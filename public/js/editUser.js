let id;

document.querySelectorAll('.editDetails').forEach(item => {
    item.addEventListener('click', event => {
        id = event.target.getAttribute('data-id');
        let username = event.target.getAttribute('data-username');
        let editModal = new bootstrap.Modal(document.getElementById('editModal'));
        document.querySelector('#modalContent').innerHTML =
        `<p class="user-id">ID: ${id} </p>
         <p>Username: ${username}</p>`;
        editModal.show(); // Show the Bootstrap modal
    });
  });

  document.querySelector('.delete-btn').addEventListener('click', (event) => {
  // event.preventDefault();
  document.querySelector('#modalContent').value = id;
  axios
    .delete('/api/user/' + id)
    .then((response) => {
      console.log(response);
      // Close the modal here
      let editModal = bootstrap.Modal.getInstance(
        document.getElementById('editModal')
      );
      editModal.hide();
     
    })
    .catch((error) => {
      console.log(error);
    });
    window.location.reload(); // working unsure ???????
});
