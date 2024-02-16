
//* get all data by date
//! need to update date value after steph is done with input/js file
document.getElementById('get-date').addEventListener('submit', function(event) {
    event.preventDefault();
    const dateInput = document.querySelector('input[name="date"]').value;
    const dateValue = { dateInput };
    console.log(dateValue);

    axios.get('/api/dashboard/water/' + dateValue.dateInput )
    .then(function (response) {
        console.log('Response:', response.data);
    })
    .catch(function (error) {
        console.error('Error:', error.message);
    });    

    axios.get('/api/dashboard/sleep/' + dateValue.dateInput )
    .then(function (response) {
        console.log('Response:', response.data);
    })
    .catch(function (error) {
        console.error('Error:', error.message);
    });   

    axios.get('/api/dashboard/cardio/' + dateValue.dateInput )
    .then(function (response) {
        console.log('Response:', response.data);
    })
    .catch(function (error) {
        console.error('Error:', error.message);
    });   

    axios.get('/api/dashboard/steps/' + dateValue.dateInput )
    .then(function (response) {
        console.log('Response:', response.data);
    })
    .catch(function (error) {
        console.error('Error:', error.message);
    });  

    axios.get('/api/dashboard/workout/' + dateValue.dateInput )
    .then(function (response) {
        console.log('Response:', response.data);
    })
    .catch(function (error) {
        console.error('Error:', error.message);
    });  
});

//* add water 
const wtrBtn = document.querySelector('.wtr-btn');

wtrBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const wtrInput = document.querySelector('input[name= "wtr-amt"]').value;
    const wtrAmt = { wtrInput };
    console.log(wtrAmt);

    const postRequest = axios.post('/api/dashboard/water', wtrAmt);
    postRequest.
    then(function (response) {
        console.log('Response:', response.data);
    })
    .catch(function (error) {
    console.error('Error:', error.message);
    });   
});

//* update water

//* delete water

//* -----------------------------------------------------------------------------

//* add sleep
const slpBtn = document.querySelector('.slp-btn');

slpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const slpInput = document.querySelector('input[name= "slp-amt"]').value;
    const slpAmt = { slpInput };

    console.log(slpAmt);

    const postRequest = axios.post('/api/dashboard/sleep', slpAmt);
    postRequest.
    then(function (response) {
        console.log('Response:', response.data);
    })
    .catch(function (error) {
    console.error('Error:', error.message);
    }); 
})


//* update sleep 

//* delete sleep 

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
    postRequest.
    then(function (response) {
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
    postRequest.
    then(function (response) {
        console.log('Response:', response.data);
    })
    .catch(function (error) {
    console.error('Error:', error.message);
    }); 
});

//* update steps
//* delete steps

//* -----------------------------------------------------------------------------

//* get workout
//* add workout

const addWorkoutBtn = document.querySelector('.workout');

addWorkoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const exercise = document.querySelector('input[name="exercise-name"]').value;
    const reps = document.querySelector('input[name="reps"]').value;
    const sets = document.querySelector('input[name="sets"]').value;

    const exerciseRepSet = { exercise, reps, sets }

    console.log(exerciseRepSet);

    const postRequest = axios.post('/api/dashboard/workout', exerciseRepSet);
    postRequest.
    then(function (response) {
        console.log('Response:', response.data);
    })
    .catch(function (error) {
    console.error('Error:', error.message);
    }); 
});
//* update workout
//* delete workout