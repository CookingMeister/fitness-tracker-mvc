// listens for click, takes values from inputs
document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.submit-user-btn')
    .addEventListener('click', function (event) {
      event.preventDefault();
      const heightFeet = parseFloat(
        document.querySelector('#userHeightFeet').value);
      const heightInches = parseFloat(
        document.querySelector('#userHeightInches').value);
      const weightLBS = parseFloat(document.querySelector('#userWeight').value);

      let bmi = calculateBMI(heightFeet, heightInches, weightLBS);
      updateBMIValue(bmi);
    });

  function calculateBMI(heightFeet, heightInches, weightLBS) {
    const heightConvertedInches = heightFeet * 12 + heightInches;
    const inchesSquared = heightConvertedInches ** 2;
    const weightHeightDivision = weightLBS / inchesSquared;

    const BMI = Math.floor(weightHeightDivision * 703);
    return BMI;
  }
});
// Update BMI value in the info modal
function updateBMIValue(BMI) {
  let bmiStatus =
    BMI < 18.5
      ? 'falls within the underweight range'
      : BMI < 25
      ? 'falls within the healthy weight range'
      : BMI < 30
      ? 'falls within the overweight range'
      : 'falls within the obesity range';
  document.getElementById('bmiValue').innerHTML = BMI + ' - ' + bmiStatus;
  // Store BMI value in localStorage
  localStorage.setItem('bmi', BMI);
}

// Function to retrieve BMI value from localStorage
function getStoredBMI() {
  return localStorage.getItem('bmi');
}
document
  .querySelector('.card[data-bs-target="#modalUser"]')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const bmi = getStoredBMI();
    updateBMIValue(bmi);
  });
