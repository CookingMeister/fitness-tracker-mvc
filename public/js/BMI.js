document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.submit-user-btn')
    .addEventListener('click', function (event) {
      event.preventDefault();
      const heightFeet = parseFloat(
        document.querySelector('#userHeightFeet').value
      );
      const heightInches = parseFloat(
        document.querySelector('#userHeightInches').value
      );
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
    // If statements for conditionals such as too skinny, too fat, right on track, etc.
  }
});
// Update BMI value in the info modal
function updateBMIValue(bmi) {
  document.getElementById('bmiValue').innerText = bmi;
  // Store BMI value in localStorage
  localStorage.setItem('bmi', bmi);
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
