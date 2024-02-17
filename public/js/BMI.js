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

      console.log(heightFeet);
      console.log(heightInches);
      console.log(weightLBS);

      calculateBMI(heightFeet, heightInches, weightLBS);
    });

  function calculateBMI(heightFeet, heightInches, weightLBS) {
    const heightConvertedInches = heightFeet * 12 + heightInches;
    const inchesSquared = heightConvertedInches ** 2;
    const weightHeightDivision = weightLBS / inchesSquared;

    const BMI = Math.floor(weightHeightDivision * 703);
    console.log('Your BMI is:', BMI);
    // If statements for conditionals such as too skinny, too fat, right on track, etc.
  }
});
