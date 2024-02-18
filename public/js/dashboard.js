//* get all data by date

document
  .getElementById('get-date')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const dateInput = document.querySelector('input[name="date"]').value;
    const dateValue = { dateInput };
    console.log(dateValue);

    axios
      .get('/api/dashboard/water/' + dateValue.dateInput)
      .then(function (response) {
        console.log('Response:', response.data);
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });

    axios
      .get('/api/dashboard/sleep/' + dateValue.dateInput)
      .then(function (response) {
        console.log('Response:', response.data);
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });

    axios
      .get('/api/dashboard/cardio/' + dateValue.dateInput)
      .then(function (response) {
        console.log('Response:', response.data);
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });

    axios
      .get('/api/dashboard/steps/' + dateValue.dateInput)
      .then(function (response) {
        console.log('Response:', response.data);
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });

    axios
      .get('/api/dashboard/workout/' + dateValue.dateInput)
      .then(function (response) {
        console.log('Response:', response.data);
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });
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
      console.log(height);
      console.log(weight);
      // const user = { height, weight };
      const postRequest = axios.post('/api/dashboard/user', { height, weight });
      postRequest
      .then(function (response) {
        console.log('Response:', response.data);
        window.location.replace('/api/dashboard');
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      })
    });

  //* delete user height
  const deleteHeightBtn = document.querySelector('button[form="deleteFormUser"]');

deleteHeightBtn.addEventListener('click', (event) => {
  event.preventDefault();

  console.log('button clicked:', deleteHeightBtn);

  const heightLabel = document.querySelector('#deleteHeight');

  const heightId = heightLabel.previousElementSibling.getAttribute('id');

  console.log(heightId)
  
  const deleteRequest = axios.delete('/api/dashboard/user/' + heightId);
  deleteRequest
    .then(function (response) {
      console.log('Response:', response.data);
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
})



//* add water
const wtrBtn = document.querySelector('.wtr-btn');

wtrBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const wtrInput = document.querySelector('input[name= "wtrAmt"]').value;
  const wtrAmt = { wtrInput };
  console.log(wtrAmt);
  console.log(wtrInput);

  const postRequest = axios.post('/api/dashboard/water', wtrAmt);
  postRequest
    .then(function (response) {
      console.log('Response:', response.data);
      // Close the modal
      let editModal = bootstrap.Modal.getInstance(
        document.getElementById('formModalWater')
      );
      editModal.hide();
      // Reload the page
      window.location.reload();
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});

//* update water

//* delete water

const deleteWaterBtn = document.querySelector('button[form="deleteFormWater"]');

deleteWaterBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('button clicked:', deleteWaterBtn);
  const waterLabel = document.querySelector('#waterLabel');
  const waterId = waterLabel.previousElementSibling.getAttribute('id');
  console.log(waterId)
  
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
})

//* -----------------------------------------------------------------------------

//* add sleep
const slpBtn = document.querySelector('.slp-btn');

slpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const slpInput = document.querySelector('input[name= "sleep"]').value;
  const slpAmt = { slpInput };

  console.log(slpAmt);

  const postRequest = axios.post('/api/dashboard/sleep', slpAmt);
  postRequest
    .then(function (response) {
      console.log('Response:', response.data);
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});

//* update sleep

//* delete sleep

const deleteSleepBtn = document.querySelector('button[form="deleteFormSleep"]');

deleteSleepBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('button clicked:', deleteSleepBtn);

  const sleepLabel = document.querySelector('#sleepLabel');
  const sleepId = sleepLabel.previousElementSibling.getAttribute('id');
  console.log(sleepId)
  
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
})

//* -----------------------------------------------------------------------------

//* get cardio
//* add cardio

const addCardioBtn = document.querySelector('.cardio');

addCardioBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const exercise = document.querySelector('input[name="exercise"]').value;
  const distance = document.querySelector('input[name="distance"]').value;
  const time = document.querySelector('input[name="time"]').value;

  const cardio = { exercise, distance, time };

  console.log(cardio);

  const postRequest = axios.post('/api/dashboard/cardio', cardio);
  postRequest
    .then(function (response) {
      console.log('Response:', response.data);
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});

//* update cardio

//* delete cardio

//* -----------------------------------------------------------------------------

//* get steps
//* add steps

const addStepsBtn = document.querySelector('.steps');

addStepsBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const steps = document.querySelector('input[name="steps"]').value;

  const stepsAmt = { steps };

  console.log(stepsAmt);

  const postRequest = axios.post('/api/dashboard/steps', stepsAmt);
  postRequest
    .then(function (response) {
      console.log('Response:', response.data);
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});

//* update steps
//* delete steps
const deleteStepsBtn = document.querySelector('button[form="deleteFormSteps"]');

deleteStepsBtn.addEventListener('click', (event) => {
  event.preventDefault();

  console.log('button clicked:', deleteStepsBtn);

  const stepsLabel = document.querySelector('#stepsLabel');

  const stepsId = stepsLabel.previousElementSibling.getAttribute('id');

  console.log(stepsId)
  
  const deleteRequest = axios.delete('/api/dashboard/steps/' + stepsId);
  deleteRequest
    .then(function (response) {
      console.log('Response:', response.data);
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
})

//* -----------------------------------------------------------------------------

//* get workout
//* add workout

const addWorkoutBtn = document.querySelector('.workout');

addWorkoutBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const exercise = document.querySelector('input[name="workout"]').value;
  const reps = document.querySelector('input[name="reps"]').value;
  const sets = document.querySelector('input[name="sets"]').value;

  const exerciseRepSet = { exercise, reps, sets };

  console.log(exerciseRepSet);

  const postRequest = axios.post('/api/dashboard/workout', exerciseRepSet);
  postRequest
    .then(function (response) {
      console.log('Response:', response.data);
    })
    .catch(function (error) {
      console.error('Error:', error.message);
    });
});
//* update workout
//* delete workout
