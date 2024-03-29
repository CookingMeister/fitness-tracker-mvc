//* get all data by date
document
  .getElementById('get-date')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const dateInput = document.querySelector('input[name="date"]').value;
    const dateValue = { dateInput };

    location.href=('/api/dashboard?id=' + dateValue.dateInput);
});
  
// User update button
document
  .querySelector('.submit-user-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const heightFeet = parseInt(
      document.querySelector('#userHeightFeet').value
    );
    const heightInches = parseInt(
      document.querySelector('#userHeightInches').value
    );
    const weight = parseInt(document.querySelector('#userWeight').value);
    const heightConvertInches = heightFeet * 12 + heightInches;
    const height = heightConvertInches;

    const postRequest = axios.post('/api/dashboard/user', { height, weight });
    postRequest
      .then(function (response) {
        console.log('Response:', response.data);
        window.location.replace('/api/dashboard');
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });
  });

//* delete user height
const deleteHeightBtn = document.querySelector('button[form="deleteFormUser"]');

deleteHeightBtn.addEventListener('click', (event) => {
  event.preventDefault();

  console.log('button clicked:', deleteHeightBtn);
  const heightCheck = document.querySelector('.heightCheck');
  const weightCheck = document.querySelector('.weightCheck');


  if (heightCheck.checked === true && weightCheck.checked === true) {
  const heightLabel = document.querySelector('#deleteHeight');
  const heightId = heightLabel.previousElementSibling.getAttribute('id');

  const deleteHeightRequest = axios.delete(
    '/api/dashboard/user/height/' + heightId
  );
  deleteHeightRequest
    .then(function (response) {
      console.log('Response:', response.data);
      window.location.replace('/api/dashboard');
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });

  const weightLabel = document.querySelector('#deleteWeight');
  const weightId = weightLabel.previousElementSibling.getAttribute('id');

  const deleteWeightRequest = axios.delete(
    '/api/dashboard/user/weight/' + weightId
  );
  deleteWeightRequest
    .then(function (response) {
      console.log('Response:', response.data);
      window.location.replace('/api/dashboard');
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });

  } else if (heightCheck.checked === true) {
    const heightLabel = document.querySelector('#deleteHeight');
    const heightId = heightLabel.previousElementSibling.getAttribute('id');

    const deleteHeightRequest = axios.delete(
      '/api/dashboard/user/height/' + heightId
    );
    deleteHeightRequest
      .then(function (response) {
        console.log('Response:', response.data);
        window.location.replace('/api/dashboard');
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });
  } else  {
    const weightLabel = document.querySelector('#deleteWeight');
    const weightId = weightLabel.previousElementSibling.getAttribute('id');

    const deleteWeightRequest = axios.delete(
      '/api/dashboard/user/weight/' + weightId
    );
    deleteWeightRequest
      .then(function (response) {
        console.log('Response:', response.data);
        window.location.replace('/api/dashboard');
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });
  }
});

//* add water
const wtrBtn = document.querySelector('.wtr-btn');

wtrBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const wtrInput = document.querySelector('input[name= "wtrAmt"]').value;
  const wtrAmt = { wtrInput };
  const toastWater = new bootstrap.Toast(document.getElementById('toastWater'));
  const modalWater = bootstrap.Modal.getInstance(document.getElementById('formModalWater'));

  const postRequest = axios.post('/api/dashboard/water', wtrAmt);
  postRequest
    .then(function (response) {
      console.log('Response:', response.data);
      // Close the modal
     modalWater.hide();
     toastWater.show();
     // Wait for 5 seconds before reloading the page
     setTimeout(function () {
      window.location.reload();
    }, 5000);
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});

//* delete water

const deleteWaterBtn = document.querySelector('button[form="deleteFormWater"]');

deleteWaterBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const waterLabels = document.querySelectorAll('.waterLabel');

  for (i = 0; i < waterLabels.length; i ++) {
    const waterLabel = waterLabels[i];
    const waterId = waterLabel.previousElementSibling.getAttribute('id');

    if (waterLabel.previousElementSibling.checked) {
      const waterId = waterLabel.previousElementSibling.getAttribute('id');

      const deleteRequest = axios.delete('/api/dashboard/water/' + waterId);
      deleteRequest
        .then(function (response) {
          console.log('Response:', response.data);
          // Close the modal
          let editModal = bootstrap.Modal.getInstance(
            document.getElementById('modalWater')
          );
          editModal.hide();
          // Reload the page
          window.location.reload();
        })
        .catch(function (error) {
          console.error('Error:', error.message);
        });
    }
  }
});

//* add sleep
const slpBtn = document.querySelector('.slp-btn');

slpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const slpInput = document.querySelector('input[name= "sleep"]').value;
  const slpAmt = { slpInput };

  const toastSleep = new bootstrap.Toast(document.getElementById('toastSleep'));
  const modalSleep = bootstrap.Modal.getInstance(document.getElementById('formModalSleep'));

  const postRequest = axios.post('/api/dashboard/sleep', slpAmt);
  postRequest
    .then(function (response) {
      modalSleep.hide();
      toastSleep.show();
      // Wait for 5 seconds before reloading the page
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});

//* delete sleep

const deleteSleepBtn = document.querySelector('button[form="deleteFormSleep"]');

deleteSleepBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const sleepLabels = document.querySelectorAll('.sleepLabel');

  for (i = 0; i < sleepLabels.length; i ++) {
    const sleepLabel = sleepLabels[i];

    if (sleepLabel.previousElementSibling.checked) {
      const sleepId = sleepLabel.previousElementSibling.getAttribute('id');

      const deleteRequest = axios.delete('/api/dashboard/sleep/' + sleepId);
      deleteRequest
        .then(function (response) {
          console.log('Response:', response.data);
          // Close the modal
          let editModal = bootstrap.Modal.getInstance(
            document.getElementById('modalSleep')
          );
          editModal.hide();
          // Reload the page
          window.location.reload();
        })
        .catch(function (error) {
          console.error('Error:', error.message);
        });
      }
  }
});

//* -----------------------------------------------------------------------------

//* add cardio

const addCardioBtn = document.querySelector('.cardio');

addCardioBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const exercise = document.querySelector('input[name="exercise"]').value;
  const distance = document.querySelector('input[name="distance"]').value;
  const time = document.querySelector('input[name="time"]').value;

  const cardio = { exercise, distance, time };

  const toastCardio = new bootstrap.Toast(document.getElementById('toastCardio'));
  const modalCardio = bootstrap.Modal.getInstance(document.getElementById('formModalCardio'));

  const postRequest = axios.post('/api/dashboard/cardio', cardio);
  postRequest
    .then(function (response) {
      modalCardio.hide();
      toastCardio.show();
      // Wait for 5 seconds before reloading the page
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});

//* delete cardio
const deleteCardioBtn = document.querySelector(
  'button[form="deleteFormCardio"]'
);

deleteCardioBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const cardioLabels = document.querySelectorAll('.deleteCardio');

  for (i = 0; i < cardioLabels.length; i ++) {
  const cardioLabel= cardioLabels[i];

    if (cardioLabel.previousElementSibling.checked) {
      const cardioId = cardioLabel.previousElementSibling.getAttribute('id');

      const deleteRequest = axios.delete('/api/dashboard/cardio/' + cardioId);
      deleteRequest
        .then(function (response) {
          console.log('Response:', response.data);
          window.location.replace('/api/dashboard');
        })
        .catch(function (error) {
          console.error('Error:', error.message);
        });
    } 
  }
});

//* -----------------------------------------------------------------------------
//* add steps

const addStepsBtn = document.querySelector('.steps');

addStepsBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const steps = document.querySelector('input[name="steps"]').value;

  const stepsAmt = { steps };

  const toastSteps = new bootstrap.Toast(document.getElementById('toastSteps'));
  const modalSteps = bootstrap.Modal.getInstance(document.getElementById('formModalSteps'));

  const postRequest = axios.post('/api/dashboard/steps', stepsAmt);
  postRequest
    .then(function (response) {
      // console.log('Response:', response.data);
      modalSteps.hide();
      toastSteps.show();
      // Wait for 5 seconds before reloading the page
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});

//* delete steps
const deleteStepsBtn = document.querySelector('button[form="deleteFormSteps"]');

deleteStepsBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const stepsLabels = document.querySelectorAll('.stepsLabel');

  for (i = 0; i < stepsLabels.length; i ++) {
    const stepsLabel = stepsLabels[i];

    if (stepsLabel.previousElementSibling.checked) {
    const stepsId = stepsLabel.previousElementSibling.getAttribute('id');
   
      const deleteRequest = axios.delete('/api/dashboard/steps/' + stepsId);
      deleteRequest
        .then(function (response) {
          // console.log('Response:', response.data);
          window.location.replace('/api/dashboard');
        })
        .catch(function (error) {
          console.error('Error:', error.message);
        });
    }
  }
});

//* -----------------------------------------------------------------------------

//* add workout

const addWorkoutBtn = document.querySelector('.workout');

addWorkoutBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const exercise = document.querySelector('input[name="workout"]').value;
  const reps = document.querySelector('input[name="reps"]').value;
  const sets = document.querySelector('input[name="sets"]').value;
  const weight = document.querySelector('input[name="weight"]').value;

  const exerciseRepSet = { exercise, reps, sets, weight };

  const toastWorkout = new bootstrap.Toast(document.getElementById('toastWorkout'));
  const modalWorkout = bootstrap.Modal.getInstance(document.getElementById('formModalWorkout'));

  const postRequest = axios.post('/api/dashboard/workout', exerciseRepSet);
  postRequest
    .then(function (response) {
      modalWorkout.hide();
      toastWorkout.show();
      // Wait for 5 seconds before reloading the page
      setTimeout(function () {
        window.location.reload();
      }, 5000);
      // window.location.replace('/api/dashboard');
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});

//* delete workout
const deleteWorkoutBtn = document.querySelector(
  'button[form="deleteFormWorkout"]'
);

deleteWorkoutBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const workoutLabels = document.querySelectorAll('.deleteWorkout');

  for (i = 0; i < workoutLabels.length; i ++) {
    const workoutLabel = workoutLabels[i];

    if (workoutLabel.previousElementSibling.checked) {
      const workoutId = workoutLabel.previousElementSibling.getAttribute('id');
 
       const deleteRequest = axios.delete('/api/dashboard/workout/' + workoutId);
        deleteRequest
          .then(function (response) {
            // console.log('Response:', response.data);
            window.location.replace('/api/dashboard');
          })
          .catch(function (error) {
            console.error('Error:', error.message);
          });
    }
  };
});

// Logout button
const logout = document.querySelector('.logout-btn');
logout.addEventListener('click', (event) => {
  event.preventDefault();

  const postRequest = axios.post('/api/logout');
  postRequest.
      then(function (response) {
        // console.log('Response:', response.data);
        window.location.replace('/');
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });
  });